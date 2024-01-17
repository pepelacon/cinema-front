import Layout from '@/components/layout/Layout'
import { IHome } from './home.interface'
import { FC } from 'react'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<div>Home</div>
		</Layout>
	)
}

export default Home
