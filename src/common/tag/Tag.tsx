import Close from "@/assets/svg/Close";

type TagItemTypes = {
	tagData: string;
	tagIdx: number;
	showSelectTag?: (tag: string) => void;
	showDeleteTag?: (
		event: React.MouseEvent<HTMLDivElement>,
		tagIdx: number,
	) => void;
	type: "show" | "amend";
};

export const TagItem = ({
	tagData,
	tagIdx,
	showSelectTag,
	showDeleteTag,
	type,
}: TagItemTypes) => {
	return (
		<div className="relative flex flex-row items-center px-2 py-1 mx-2 my-1 rounded-lg text-BASIC_WHITE hover:bg-ETC_COLOR bg-MAIN_COLOR whitespace-nowrap">
			<div
				className="mr-2 cursor-pointer"
				onClick={() => {
					if (showSelectTag) {
						showSelectTag(tagData);
					}
				}}
			>
				{tagData}
			</div>
			{type === "amend" ? (
				<div
					className="p-1 rounded-lg hover:bg-LIGHT_GRAY_COLOR"
					onClick={(event) => {
						if (showDeleteTag) {
							showDeleteTag(event, tagIdx);
						}
					}}
				>
					<Close fillColor={"#FCFCFC"} width={"12px"} height={"12px"} />
				</div>
			) : null}
		</div>
	);
};
