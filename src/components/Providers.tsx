import React from "react";
import { RecoilRoot } from "recoil";
import {
	QueryClientProvider,
	QueryClient,
	// QueryCache,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProvidersType = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProvidersType) => {
	//const queryCache = new QueryCache();
	const queryClient = new QueryClient({
		defaultOptions: {
			// queries: {
			// 	suspense: true, - 실험적
			// },
		},
	});

	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
				{children}
			</QueryClientProvider>
		</RecoilRoot>
	);
};

export default Providers;
