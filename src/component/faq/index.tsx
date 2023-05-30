import { FC, useState } from 'react'

import Button from '../ui/Button'
import Heading from '../ui/Heading'

import Accordion from './Accordion'
import styles from './faq.module.scss'

const FAQ: FC = () => {
	const [openedInfo, setOpendedInfo] = useState<number[]>([])
	return (
		<div className="container-app" id="faq">
			<section className={styles.faq}>
				<div className={styles.btns}>
					<Button variant={'accentColor'} size={'large'}>
						Начать учиться
					</Button>
					<Button variant="secondColor" size="large">
						Перейти к курсам
					</Button>
				</div>
				<Heading variant="bold">FAQ</Heading>
				<Accordion />
			</section>
		</div>
	)
}

export default FAQ
