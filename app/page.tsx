import { NextPage } from 'next'
import Home from './components/screens/home/Home'

const HomePage: NextPage = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Home />
		</main>
	)
}
export default HomePage
