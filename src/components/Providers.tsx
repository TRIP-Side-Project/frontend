import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProvidersType = {
	children: React.ReactNode;
};

const Providers = ({ children }: ProvidersType) => {
	const queryClient = new QueryClient({});

	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
			</QueryClientProvider>
		</RecoilRoot>
	);
};

export default Providers;
