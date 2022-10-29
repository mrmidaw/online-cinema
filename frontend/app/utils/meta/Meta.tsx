import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { ISeo } from "./meta.interface";
import logoImage from "@/assets/images/logo.svg";
import { siteName, titleMerge } from "@/config/seo.config";
import { onlyText } from "@/utils/string/clearText";

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
			{children}
		</>
	);
};

export default Meta;
