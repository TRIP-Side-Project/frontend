//ATOM 설정
import { atom, selector } from "recoil";

// interface TagTypes {
// 	default: string[];
// }

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

export const tagState = atom<string[]>({
	key: "tagState",
	default: [],
});

export const allTagState = atom<string[]>({
	key: "allTagState",
	default: [...tempTags],
});

//선택된 태그를 기반으로 필터링 후 목록 반환
export const tagSelector = selector({
	key: "tagSelector",
	get: ({ get }) => {
		//원본 훼손하지 않는다.
		const selectedTags = get(tagState);
		const allTags = get(allTagState);

		//선택된 태그가 없다면 빈 배열 반환
		if (selectedTags.length === 0) {
			return [];
		}

		//선택된 태그를 포함하는 태그들만 반환
		// return allTags.filter(eachTag => allTags.includes(eachTag));
		return allTags.filter((eachTag) =>
			selectedTags.some((el) => eachTag.includes(el)),
		);
	},
});
