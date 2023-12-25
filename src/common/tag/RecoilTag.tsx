import { useRecoilState, useRecoilValue } from "recoil";
import { TagItem } from "./Tag";
import { tagState, tagSelector, allTagState } from "@/store/tagState";
import { useCallback } from "react";

interface RecoilTagTypes {
	isTagOpen: boolean;
	onOffTag: () => void;
}

const RecoilTag = ({ isTagOpen, onOffTag }: RecoilTagTypes) => {
	const [, setSelectedList] = useRecoilState(tagState);
	const [allList] = useRecoilState(allTagState);
	const filteredList = useRecoilValue(tagSelector);

	const handleClickTag = useCallback(
		(clickTag: string) => {
			setSelectedList((prev) => {
				const isTagAlreadySelected = prev.includes(clickTag);

				// if (!prev) {
				// 	return [clickTag];
				// }

				if (isTagAlreadySelected) {
					//이미 존재한다면
					return [...prev];
				}

				//새로운 태그라면
				return [...prev, clickTag];
			});
		},
		[setSelectedList],
	);

	const handleDeleteTag = useCallback(
		(event: React.MouseEvent<HTMLDivElement>, tagIndex: number) => {
			event.stopPropagation();
			setSelectedList((prev) => {
				const currTags = [...prev];
				currTags.splice(tagIndex, 1);
				return currTags;
			});
		},
		[setSelectedList],
	);

	return (
		<>
			<div
				className="flex text-sm font-semibold border bg-BAISC_WHITE flex-rowpx-3 rounded-xl border-BASIC_BLACK h-9"
				onClick={onOffTag}
			>
				<div className="flex flex-row ">
					{filteredList.map((el, idx) => (
						<TagItem
							key={idx}
							tagData={el}
							tagIdx={idx}
							type={"amend"}
							showDeleteTag={(event) => handleDeleteTag(event, idx)}
						/>
					))}
				</div>
			</div>

			{isTagOpen && (
				<div className="relative z-30 flex flex-row flex-wrap w-full p-2 text-sm font-semibold rounded-lg shadow-2xl top-1 h-fit bg-zinc-200">
					{allList.map((tag, idx) => (
						<TagItem
							key={idx}
							tagData={tag}
							tagIdx={idx}
							showSelectTag={handleClickTag}
							type={"show"}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default RecoilTag;
