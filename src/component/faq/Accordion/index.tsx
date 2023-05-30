import clsx from 'clsx'
import { FC, PropsWithChildren, useState } from 'react'

import styles from './accordion.module.scss'

const Accordion: FC<PropsWithChildren> = () => {
	const [activeItems, setActiveItems] = useState<number[]>([])
	const toggleItem = (idx: number) => {
		const _activeItems = [...activeItems]
		if (activeItems.indexOf(idx) !== -1) {
			setActiveItems(_activeItems.filter((item) => item !== idx))
		} else {
			_activeItems.push(idx)
			setActiveItems(_activeItems)
		}
	}
	return (
		<div className={styles.wrapper}>
			<div
				className={clsx(
					{
						[styles.openContent]: activeItems.includes(1),
					},
					styles.item
				)}
			>
				<div className={styles.label} onClick={() => toggleItem(1)}>
					Что из себя представляет школа SpaceToStudy?{' '}
					{activeItems.includes(1) ? (
						<div className={styles.btn}>-</div>
					) : (
						<div className={styles.btn}>+</div>
					)}
				</div>
				<div className={clsx(styles.itemContent)}>
					<div>
						<b>SpaceToStudy</b> — это онлайн-школа по подготовке к ЕГЭ. Наша
						задача – сделать процесс подготовки интересным и занимательным, а
						главное – понятным. При этом для достижения этой цели мы используем
						самые современные технологии: ты сможешь заниматься из любой точки
						мира и изучать материал в любое удобное для тебя время.{' '}
					</div>
				</div>
			</div>
			<div
				className={clsx(
					{
						[styles.openContent]: activeItems.includes(2),
					},
					styles.item
				)}
			>
				<div className={styles.label} onClick={() => toggleItem(2)}>
					Как совмещать подготовку к экзаменам по нескольким предметам?
					{activeItems.includes(2) ? (
						<div className={styles.btn}>-</div>
					) : (
						<div className={styles.btn}>+</div>
					)}
				</div>
				<div className={clsx(styles.itemContent)}>
					В нашей школе ты можешь подготовиться к целому ряду основных школьных
					предметов. Расписание составлено таким образом, что ты будешь успевать
					на все занятия по выбранным тобой дисциплинам.
				</div>
			</div>
			<div
				className={clsx(
					{
						[styles.openContent]: activeItems.includes(3),
					},
					styles.item
				)}
			>
				<div className={styles.label} onClick={() => toggleItem(3)}>
					Что делать, если я не успеваю на онлайн-занятия?
					{activeItems.includes(3) ? (
						<div className={styles.btn}>-</div>
					) : (
						<div className={styles.btn}>+</div>
					)}
				</div>
				<div className={clsx(styles.itemContent)}>
					В нашей школе ты можешь подготовиться к целому ряду основных школьных
					предметов. Расписание составлено таким образом, что ты будешь успевать
					на все занятия по выбранным тобой дисциплинам.
				</div>
			</div>
			<div
				className={clsx(
					{
						[styles.openContent]: activeItems.includes(4),
					},
					styles.item
				)}
			>
				<div className={styles.label} onClick={() => toggleItem(4)}>
					Могу ли я поменять тариф?
					{activeItems.includes(4) ? (
						<div className={styles.btn}>-</div>
					) : (
						<div className={styles.btn}>+</div>
					)}
				</div>
				<div className={clsx(styles.itemContent)}>
					Да, ты можешь поменять тариф в любой момент. Для этого необходимо
					обратиться к менеджеру поддержки.
				</div>
			</div>
		</div>
	)
}

export default Accordion
