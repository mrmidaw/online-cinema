import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import logoImage from "@/assets/images/logo.svg";

export const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={247}
					height={34}
					alt="Online Cinema"
					draggable={false}
				/>
			</a>
		</Link>
	);
};
