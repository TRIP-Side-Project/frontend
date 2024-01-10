import { atom, selector } from "recoil";

export const menuState = atom<string>({
	key: "menuState",
	default: "",
});

export const menuSelector = selector({
	key: "menuSelector",
	get: ({ get }) => {
		const state = get(menuState);
		return state;
	},
	set: ({ set }, newValue) => {
		set(menuState, newValue);
	},
});
