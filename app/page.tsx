import MainProvider from './providers/MainProvider'
import type { AppProps } from 'next/app'
import Home from './components/screens/home/Home'

// import { TypeComponentAuthFields } from '@/shared/types/auth.types'

// import '../app/assets/styles/globals.scss'

type TypeAppProps = AppProps

const MyApp = () => {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}

export default MyApp
