import { FC } from 'react'

import tg from '../../../assets/social-icons/tg.svg'
import vk from '../../../assets/social-icons/vk.svg'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className="container-app">
				<div className={styles.footerTopBlock}>
					<div className={styles.footerContacts}>
						<h3 className={styles.footerTitle}>Контакты</h3>
						<div>ООО «СПЕЙСТУСТАДИ»</div>
						<div className="underline">8 (919) 007-49-37</div>
						<div className="underline">spacetostudyonlineschool@gmail.com</div>
						<div className="text-gray">
							602267, Владимирская обл.,
							<br /> г. Муром, ул. Артема, д. 20, кв.63
						</div>
					</div>
					<div className={styles.footerIconsBlock}>
						<h3 className={styles.footerTitle}>Социальные сети</h3>
						<div className={styles.footerIcons}>
							<div>
								<img src={vk} alt="" />
							</div>
							<div>
								<img src={tg} alt="" />
							</div>
						</div>
					</div>
					<div className={styles.footerEducate}>
						<div className={styles.footerCertif}></div>
						<div>
							Образовательная
							<br />
							лицензия
						</div>
					</div>
				</div>
				<div className={styles.footerMidBlock}>
					<div>Пользовательское соглашение</div>
					<div>Правовая информация</div>
					<div>политика обработки персональных данных</div>
					<div>Договор оферты</div>
				</div>
				<div className={styles.footerBotBlock}>
					<div>ИНН 3334024101</div>
					<div>ОГРН 1233300002363</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
