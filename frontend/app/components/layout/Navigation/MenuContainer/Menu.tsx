import React, { FC } from "react";

import { IMenu } from "./Menu.interface";
import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem";
import AuthItems from "./auth/AuthItems";

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items?.map((item, index) => (
					<MenuItem item={item} key={index} />
				))}
				{title === "General" ? <AuthItems /> : null}
			</ul>
		</div>
	);
};
