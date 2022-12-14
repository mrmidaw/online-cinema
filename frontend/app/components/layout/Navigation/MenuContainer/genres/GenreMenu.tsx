import React, { FC } from "react";

import SkeletonLoading from "../../../../ui/skeleton-loader/SkeletonLoader";
import { Menu } from "../Menu";

import { usePopularGenres } from "./usePopularGenres";

export const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres();

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoading count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: "Popular genres", items: data || [] }} />
	);
};
