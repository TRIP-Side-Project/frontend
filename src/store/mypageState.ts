import { atom, selector } from "recoil";

export const myPageState = atom<string>({
	key: "myPageState",
	default: "likeMerchan",
});

export const myPageSelector = selector({
	key: "myPageSelector",
	get: ({ get }) => {
		const selectMineTab = get(myPageState);
		return selectMineTab;
	},
	set: ({ set }, newValue) => {
		set(myPageState, newValue);
	},
});
