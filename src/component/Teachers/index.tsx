import axios from 'axios'
import { FC, useEffect, useState } from 'react'

import Heading from '../ui/Heading'

import SubjectCard from './SubjectCard'
import styles from './Teachers.module.scss'

interface ICardData {
	title: string
	variant: 'main' | 'pink' | 'green' | 'blue' | 'peach'
}

interface ITeacher {
	name: string
	url: string
}

const CardData: ICardData[] = [
	{
		title: 'Математика',
		variant: 'blue',
	},
	{
		title: 'Физика',
		variant: 'blue',
	},
	{
		title: 'Информатика',
		variant: 'blue',
	},
	{
		title: 'История',
		variant: 'peach',
	},
	{
		title: 'Обществознание',
		variant: 'peach',
	},
	{
		title: 'Биология',
		variant: 'green',
	},
	{
		title: 'Химия',
		variant: 'green',
	},
	{
		title: 'Русский язык',
		variant: 'pink',
	},
	{
		title: 'Английский язык',
		variant: 'pink',
	},
]

const Teachers: FC = () => {
	const [teacher, setTeacher] = useState<ITeacher | null>(null)
	const fetchTeacher = async () => {
		const data = (
			await axios.get<ITeacher>(
				'https://mocki.io/v1/32e1c37b-c1d9-4427-9ea4-e5fde8eec41b'
			)
		).data
		setTeacher(data)
	}
	useEffect(() => {
		fetchTeacher()
	}, [])
	return (
		<section className={styles.teachers} id="blog">
			<div className="container-app">
				<Heading variant={'bold'}>Преподаватели</Heading>
				<SubjectCard variant="main">ЕГЭ</SubjectCard>
				<ul className={styles.subjectCards}>
					{CardData.map((item, idx) => (
						<li key={idx}>
							<SubjectCard variant={item.variant}>{item.title}</SubjectCard>
						</li>
					))}
				</ul>
				<div className={styles.teacherInfo}>
					<img src={teacher?.url} className={styles.teacherImage} alt="" />
					<div className={styles.teacherInfoPanel}>
						<div>{teacher?.name ? teacher?.name : 'Иван Петров'}</div>
						<ul>
							<li>Опыт</li>
							<li>Сколько учеников подготовил</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Teachers
