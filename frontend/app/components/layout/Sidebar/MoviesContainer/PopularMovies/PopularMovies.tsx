import React, { FC } from "react";
import { useQuery } from "react-query";

import SkeletonLoading from "../../../../ui/skeleton-loader/SkeletonLoader";
import MovieList from "../MovieList/MovieList";

import { MovieService } from "@/services/movie.service";

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		"Popular movies in sidebar",
		() => MovieService.getMostPopularMovies()
	);

	return (
		<div>
			{isLoading ? (
				<div className="mt-11">
					<SkeletonLoading count={3} className="h-28 mb-4" />
				</div>
			) : (
				<MovieList
					link="/trending"
					title="Popular Movies"
					movies={popularMovies || []}
				/>
			)}
		</div>
	);
};

export default PopularMovies;
