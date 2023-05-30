import { FC } from 'react'

import underline from '../../assets/underline.svg'
import Button from '../ui/Button'
import Heading from '../ui/Heading'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<div className="container-app">
			<section className={styles.main}>
				<Heading variant="bold">Подготовимся к ЕГЭ вместе</Heading>
				<Heading variant="normal">
					только до {'  '}
					<div className="flex flex-col ml-5">
						{' '}
						3 сентября
						<img src={underline} />
					</div>
				</Heading>
				<div className={styles.promo}>1+1=3</div>
				<p className={styles.descr}>три курса по цене двух</p>
				<div className={styles.buttons}>
					<Button variant="secondColor" size="medium">
						Подробнее
					</Button>
					<Button variant="accentColor" size="medium">
						Купить
					</Button>
				</div>
			</section>
		</div>
	)
}

export default Main
