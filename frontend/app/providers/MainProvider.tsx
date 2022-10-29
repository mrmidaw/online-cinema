import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "@/components/layout/Layout";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

interface IProps {
	children: React.ReactNode;
}

const MainProvider: FC<IProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};

export default MainProvider;
