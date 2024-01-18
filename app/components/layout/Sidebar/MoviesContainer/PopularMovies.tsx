import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from './MovieList'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import MovieItem from './MovieItem'
import { MovieService } from '@/services/movie.service'

const PopularMovieList: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Most popular movie in sidebar',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 3),
		}
	)

	return isLoading ? (
		<div className="mt-11">
			pga
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies || [],
				title: 'Popular movies',
			}}
		/>
	)
}

export default PopularMovieList
