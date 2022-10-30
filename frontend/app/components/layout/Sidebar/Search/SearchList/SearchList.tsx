import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IMovie } from "shared/interface/movie.interface";

import styles from "./SearchList.module.scss";
import { getMovieUrl } from "@/config/url.config";

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie, index) => (
					<Link href={getMovieUrl(movie.slug)} key={movie._id}>
						<a>
							<Image
								src={movie.poster}
								alt={movie.title}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								draggable="false"
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	);
};

export default SearchList;
