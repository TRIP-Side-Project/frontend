//ATOM 설정
import { atom, selector } from "recoil";

// interface TagTypes {
// 	default: string[];
// }

export const tempTags = [
	"전체",
	"서울",
	"강원",
	"춘천",
	"경주",
	"전주",
	"안동",
	"대구",
	"대전",
	"목포",
	"여수",
	"경남",
	"부산",
	"제주",
	"눈꽃",
	"스키",
	"보드",
	"바다",
	"요트",
	"해양스포츠",
	"단풍",
	"골프",
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
