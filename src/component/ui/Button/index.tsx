import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton {
	variant: 'auth' | 'accentColor' | 'secondColor' | 'customColor'
	size: 'small' | 'medium' | 'large'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	variant,
	size,
}) => {
	return (
		<button
			className={clsx(
				{
					[styles.auth]: variant === 'auth',
					[styles.accent]: variant === 'accentColor',
					[styles.secondColor]: variant === 'secondColor',
				},
				{
					[styles.small]: size === 'small',
					[styles.medium]: size === 'medium',
					[styles.large]: size === 'large',
				}
			)}
		>
			{children}
		</button>
	)
}

export default Button
