import React, { FC } from "react";

import styles from "./Search.module.scss";
import SearchList from "./SearchList/SearchList";
import { useSearch } from "./useSearch";
import SearchField from "@/components/ui/search-field/SearchField";

const Search: FC = () => {
	const { handleSearch, isSuccess, data, searchTerm } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;
