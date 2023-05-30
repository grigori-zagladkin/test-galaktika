import { FC } from 'react'

import Courses from '../component/Courses'
import Main from '../component/Main'
import Teachers from '../component/Teachers'
import FAQ from '../component/faq'
import Layout from '../component/layout'

const Home: FC = () => (
	<Layout>
		<Main />
		<Courses />
		<Teachers />
		<FAQ />
	</Layout>
)

export default Home
