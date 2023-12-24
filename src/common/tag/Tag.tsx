import Close from "@/assets/svg/Close";

type TagItemTypes = {
	tagData: string;
	tagIdx: number;
	handleSelectTag?: (tag: string) => void;
	handleDeleteTag?: (tagIdx: number) => void;
	showSelectTag?: (tag: string) => void;
	showDeleteTag?: (tagIdx: number) => void;
};

type TagTypes = {
	setSelectTag: React.Dispatch<React.SetStateAction<string[]>>;
	handleSelectTag?: (data: string) => void;
};

export const TagItem = ({
	tagData,
	tagIdx,
	handleSelectTag,
	handleDeleteTag,
	showSelectTag,
	showDeleteTag,
}: TagItemTypes) => {
	return (
		<div className="relative flex flex-row items-center px-2 py-1 mx-2 my-1 rounded-lg text-BASIC_WHITE hover:bg-ETC_COLOR bg-MAIN_COLOR whitespace-nowrap">
			<button
				className="mr-2"
				onClick={() => {
					if (handleSelectTag && showSelectTag) {
						handleSelectTag(tagData);
						showSelectTag(tagData);
					}
				}}
			>
				{tagData}
			</button>
			<button
				className="p-1 rounded-lg hover:bg-LIGHT_GRAY_COLOR"
				onClick={() => {
					if (handleDeleteTag && showDeleteTag) {
						handleDeleteTag(tagIdx);
						showDeleteTag(tagIdx);
					}
				}}
			>
				<Close fillColor={"#FCFCFC"} width={"12px"} height={"12px"} />
			</button>
		</div>
	);
};

const Tag = ({ setSelectTag, handleSelectTag }: TagTypes) => {
	const tempTags = [
		"부산",
		"요트",
		"경주",
		"눈꽃여행",
		"기차",
		"제주도",
		"스키",
		"바다",
		"강릉",
		"선셋",
		"목장",
		"일몰",
		"수상스키",
		"설원",
		"해돋이",
	];

	const showSelectTag = (tag: string) => {
		setSelectTag((prevTag) => {
			if (!prevTag) {
				return [tag];
			}
			return [...prevTag, tag];
		});
	};

	return (
		<div className="relative z-30 flex flex-row flex-wrap p-2 text-sm font-semibold rounded-lg shadow-2xl top-1 bg-zinc-200">
			{tempTags.map((tag: string, idx: number) => (
				<TagItem
					key={idx}
					tagData={tag}
					tagIdx={idx}
					handleSelectTag={() => {
						if (handleSelectTag) {
							handleSelectTag(tag);
						}
					}}
					showSelectTag={() => {
						if (showSelectTag) {
							showSelectTag(tag);
						}
					}}
				/>
			))}
		</div>
	);
};

export default Tag;
