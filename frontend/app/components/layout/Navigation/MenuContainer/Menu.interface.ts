import { TypeMaterialIconName } from "shared/interface/icons.interface";

export interface IMenuItem {
	icon: TypeMaterialIconName;
	title: string;
	link: string;
}

export interface IMenu {
	title: string;
	items: IMenuItem[];
}
