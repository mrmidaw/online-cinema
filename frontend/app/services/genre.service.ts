import { axiosClassic } from "api/interceptors";
import { IGenre } from "shared/interface/movie.interface";

import { getGenresUrl } from "@/config/api.config";

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		});
	},
};
