import { useQuery } from "react-query";

import { IMenuItem } from "../Menu.interface";

import { getGenreUrl } from "@/config/url.config";
import { GenreService } from "@/services/genre.service";

export const usePopularGenres = () => {
	const queryData = useQuery(
		"popular genre menu",
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	);

	return queryData;
};
