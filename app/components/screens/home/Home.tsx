import { IHome } from './home.interface'
import { FC } from 'react'
import { Meta } from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-500 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
