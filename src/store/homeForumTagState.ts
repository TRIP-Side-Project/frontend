import { atom, selector } from "recoil";

export const homeForumTag = atom<string[]>({
	key: "homeTag",
	default: [],
});

export const homeForumTagSelector = selector({
	key: "homForumTagSelector",
	get: ({ get }) => {
		const state = get(homeForumTag);
		return state;
	},
	set: ({ set }, newValue) => {
		set(homeForumTag, newValue);
	},
});
