import React, { FC } from "react";

import { Menu } from "./Menu";
import { firstMenu } from "./menu.data";

export const MenuContainer: FC = () => {
	return <Menu menu={firstMenu} />;
};
