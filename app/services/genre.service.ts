import { getGenresUrl } from '@/configs/api.config'
import { IGenre } from '@/shared/types/movie.types'
import { axiosClassic } from 'api/interceptors'
import axios from 'axios'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
					}
				: {},
		})
	},
}
