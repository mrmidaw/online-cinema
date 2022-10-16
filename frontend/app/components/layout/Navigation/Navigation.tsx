import React, { FC } from "react";

import { Logo } from "./Logo/Logo";
import { MenuContainer } from "./MenuContauner/MenuContainer";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	);
};

export default Navigation;
