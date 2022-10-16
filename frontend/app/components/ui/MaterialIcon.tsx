import { FontConfig } from "next/dist/server/font-utils";
import React, { FC } from "react";
import * as MaterialIcons from "react-icons/md";
import { TypeMaterialIconName } from "shared/interface/icons.interface";

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};
