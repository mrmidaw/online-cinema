import React, { FC } from "react";

import { IHome } from "./home.interface";
import Layout from "@/components/layout/Layout";
import Heading from "@/components/ui/heading/Heading";
import Meta from "@/utils/meta/Meta";

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows."
		>
			<Heading title="Watch movies online" className="gray.300 mb-8 text-xl" />
		</Meta>
	);
};

export default Home;
