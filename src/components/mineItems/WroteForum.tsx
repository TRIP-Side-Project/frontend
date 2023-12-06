const WroteForum = () => {
	return (
		<div className="flex flex-col w-full gap-3 px-3 py-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<div className="relative flex flex-row justify-between text-xs">
				<div className="font-light">
					{" "}
					여행 후기 &gt;{" "}
					<span className="font-medium text-ETC_COLOR">아리</span>님의 게시글에
					댓글을 달았습니다.
				</div>
				<div className=" text-LIGHT_GRAY_COLOR">2023.11.24</div>
			</div>
			<div className="text-lg font-semibold text-BASIC_BLACK">
				내가 작성한 댓글 이다 어쩌구 어쩌구 어저구 저쩌구
			</div>
		</div>
	);
};

export default WroteForum;
