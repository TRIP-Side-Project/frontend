const Footer = () => {
	return (
		<div className="w-full items-center h-[200px] border-t-2 border-LIGHT_GRAY_COLOR flex flex-row whitespace-nowrap">
			<div className="text-4xl font-bold text-MAIN_COLOR px-9">TRIPTRIP</div>
			<div className="flex-1 font-light text-center text-LIGHT_GRAY_COLOR">
				©TRIPTRIP. All Rights Reserved.
			</div>
			<div className="flex flex-col w-2/12 font-light text-LIGHT_GRAY_COLOR">
				<div className="pb-3 text-center">GitHub</div>
				<div className="flex flex-row justify-between ">
					<ul className="px-3 text-center">
						<li>[FE]</li>
						<li
							className="cursor-pointer hover:text-BASIC_BLACK"
							onClick={() => window.open("https://github.com/Emma-Hyejin")}
						>
							조혜진
						</li>
						<li
							className="cursor-pointer hover:text-BASIC_BLACK"
							onClick={() => window.open("https://github.com/HyoJeong-Park")}
						>
							박효정
						</li>
					</ul>
					<ul className="px-3 text-center">
						<li>[BE]</li>
						<li
							className="cursor-pointer hover:text-BASIC_BLACK"
							onClick={() => window.open("https://github.com/don9m1n")}
						>
							김동민
						</li>
						<li
							className="cursor-pointer hover:text-BASIC_BLACK"
							onClick={() => window.open("https://github.com/gkfktkrh153")}
						>
							지승용
						</li>
						<li
							className="cursor-pointer hover:text-BASIC_BLACK"
							onClick={() => window.open("https://github.com/kwondongwook")}
						>
							권동욱
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
