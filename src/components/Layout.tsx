type ComponentProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: ComponentProps) => {
	//px-14 제거
	return (
		<div className="flex justify-center w-full h-full m-0">{children}</div>
	);
};

export default Layout;
