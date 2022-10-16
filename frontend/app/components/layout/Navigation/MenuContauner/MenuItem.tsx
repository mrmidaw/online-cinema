import classNames from "classnames";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { IMenuItem } from "./Menu.interface";
import styles from "./Menu.module.scss";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface IProps {
	item: IMenuItem;
	key: number;
}

export const MenuItem: FC<IProps> = ({ item, key }) => {
	const { asPath } = useRouter();

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	);
};
