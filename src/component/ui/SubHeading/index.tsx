import { FC, PropsWithChildren } from 'react'

import styles from './SubHeading.module.scss'

const SubHeading: FC<PropsWithChildren> = ({ children }) => {
	return <h2 className={styles.subHeading}>{children}</h2>
}

export default SubHeading
