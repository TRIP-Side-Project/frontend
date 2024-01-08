interface RegionProductInfo {
	region: string;
	regionImgUrl: string;
}

const RegionProductTheme: React.FC<RegionProductInfo> = ({
	region,
	regionImgUrl,
}) => {
	return (
		<>
			<div className="w-[300px] md:w-[22%] rounded-md relative overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out transform">
				<div className="w-full h-full bg-BASIC_BLACK">
					<img
						src={regionImgUrl}
						alt={region}
						className="w-full h-full opacity-70"
					/>
				</div>
				<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
					{region}
				</h2>
			</div>
		</>
	);
};

export default RegionProductTheme;
