import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IMovie } from "shared/interface/movie.interface";

import styles from "../MovieList/MovieList.module.scss";

import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { getGenreUrl, getMovieUrl } from "@/config/url.config";
import { getGenresListEach } from "@/utils/movie/getGenresListEach";

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						src={movie.poster}
						alt={movie.title}
						width={65}
						height={97}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>{movie.title}</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, index) => (
						<Link key={genre._id} href={getGenreUrl(genre.slug)}>
							<a>{getGenresListEach(index, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
			</div>

			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	);
};

export default MovieItem;
