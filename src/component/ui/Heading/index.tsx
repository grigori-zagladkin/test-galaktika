import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './Heading.module.scss'

interface IHeading {
	variant: 'normal' | 'bold'
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, variant }) => {
	return (
		<h1
			className={clsx(styles.heading, {
				['font-normal']: variant === 'normal',
				['font-bold']: variant === 'bold',
			})}
		>
			{children}
		</h1>
	)
}

export default Heading
