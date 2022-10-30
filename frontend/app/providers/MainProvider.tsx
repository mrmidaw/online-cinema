import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { store } from "../store/store";

import HeadProvider from "./HeadProvider/HeadProvider";
import Layout from "@/components/layout/Layout";
import ReduxToastr from "@/components/ui/redux-toastr/ReduxToastr";

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
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToastr />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
