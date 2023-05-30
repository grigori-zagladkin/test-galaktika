import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './SubjectCard.module.scss'

interface ICard {
	variant: 'main' | 'pink' | 'green' | 'blue' | 'peach'
}

const SubjectCard: FC<PropsWithChildren<ICard>> = ({ children, variant }) => (
	<div
		className={clsx({
			[styles.main]: variant === 'main',
			[`${styles.pink} ${styles.card}`]: variant === 'pink',
			[`${styles.green} ${styles.card}`]: variant === 'green',
			[`${styles.peach} ${styles.card}`]: variant === 'peach',
			[`${styles.blue} ${styles.card}`]: variant === 'blue',
		})}
	>
		{children}
	</div>
)

export default SubjectCard
