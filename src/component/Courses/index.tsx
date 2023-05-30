import { FC } from 'react'

import Heading from '../ui/Heading'

import styles from './Courses.module.scss'

const Courses: FC = () => {
	return (
		<section className={styles.courses} id="courses">
			<div className="container-app">
				<Heading variant="bold">О курсах</Heading>
				<p className={styles.descr}>
					Все обучающие материалы находятся на одной платформе
				</p>
				<ul className={styles.infoBlock}>
					<li className={styles.infoItemWrapper}>
						<div className={styles.infoItemOrder}>1</div>
						<p className="font-semibold mb-10">
							Каждый <span className="text-accent">модуль</span> включает в
							себя:
						</p>
						<p>Разбор теоретического материала</p>
						<hr className="my-6" />
						<p>
							Практические задания <br /> для закрепления материала
						</p>
						<hr className="my-6" />
						<p>Мини-лекции от наших преподавателей</p>
						<hr className="my-6" />
						<p>Аудио - и видеоматериалы</p>
					</li>
					<li className={styles.infoItemWrapper}>
						<div className={styles.infoItemOrder}>2</div>
						<p>
							Готовим <span className="text-accent">понятные методички </span>
							для более быстрого усвоения материала нашими учениками
						</p>
					</li>
					<li className={styles.infoItemWrapper}>
						<div className={styles.infoItemOrder}>3</div>
						<p>
							Каждую неделю проводим онлайн-занятия с преподавателем
							<span className="text-accent">
								в мини-группах от 5 до 20{' '}
							</span>{' '}
							человек
						</p>
						<hr />
						<p>
							Все <span>записи занятий</span> доступны на платформе в любое
							время
						</p>
					</li>
					<li className={styles.infoItemWrapper}>
						<div className={styles.infoItemOrder}>4</div>
						<p>
							Раз в месяц{' '}
							<span className="text-accent">проводим пробный экзамен</span>
							для проверки и мониторинга знаний ученика, чтобы скорректировать
							вектор дальнейшего обучения для достижения наилучшего результата
						</p>
						<hr />
						<p>
							Каждый пробный экзамен <span>проверяется вручную</span> нашими
							педагогами
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Courses
