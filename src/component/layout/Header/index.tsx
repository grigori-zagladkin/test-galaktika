import { FC } from 'react'
import { Link } from 'react-scroll'

import logoImage from '../../../assets/Group.svg'
import underline from '../../../assets/underline.svg'
import Button from '../../ui/Button'

import styles from './Header.module.scss'

const Header: FC = () => {
	const spy = true
	const smooth = true
	const offset = 0
	const duration = 500
	return (
		<div className="container-app">
			<header className={styles.header}>
				<div className={styles.logo}>
					<img src={logoImage} alt="logotype" />
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<a href="#">Главная</a>
							<img src={underline} alt="" />
						</li>
						<li>
							<a href="#">
								<Link
									href="/"
									to="courses"
									spy={spy}
									smooth={smooth}
									offset={offset}
									duration={duration}
								>
									Навыки
								</Link>
							</a>
							<img src={underline} alt="" />
						</li>
						<li>
							<a href="#">
								<Link
									href="/"
									to="blog"
									spy={spy}
									smooth={smooth}
									offset={offset}
									duration={duration}
								>
									Блог
								</Link>
							</a>
							<img src={underline} alt="" />
						</li>
						<li>
							<Link
								href="/"
								to="faq"
								spy={spy}
								smooth={smooth}
								offset={offset}
								duration={duration}
							>
								FAQ
							</Link>

							<img src={underline} alt="" />
						</li>
					</ul>
				</nav>
				<Button variant="auth" size="small">
					Войти
				</Button>
			</header>
		</div>
	)
}

export default Header
