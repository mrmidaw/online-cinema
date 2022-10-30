import React, { ChangeEvent, useState } from "react";
import { MdSettingsPower } from "react-icons/md";
import { useQueries, useQuery } from "react-query";

import { useDebounce } from "@/hooks/useDebounce";
import { MovieService } from "@/services/movie.service";

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const debouncedSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		["search movie list", debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch,
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return { isSuccess, handleSearch, data, searchTerm };
};
