import { TypeMaterialIconName } from "./icons.interface";

export interface IGenre {
	_id: string;
	name: string;
	slug: string;
	description: string;
	icon: TypeMaterialIconName;
}
