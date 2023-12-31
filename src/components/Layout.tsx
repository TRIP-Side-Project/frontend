type ComponentProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: ComponentProps) => {
	//px-14 제거 flex w-full h-full mx-auto overflow-hidden bg-pink-200 md:max-w-5xl
	//origin - flex justify-center w-full h-full m-0
	return (
		<div className="flex justify-center w-full h-full m-auto overflow-hidden dark:bg-BASIC_BLACK bg-BASIC_WHITE sm:max-w-5xl">
			{children}
		</div>
	);
};

export default Layout;
