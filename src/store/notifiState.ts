import { atom, selector } from "recoil";

export const notifiState = atom<boolean>({
	key: "notifiState",
	default: false,
});

export const notifiSelector = selector({
	key: "notifiSelector",
	get: ({ get }) => {
		const state = get(notifiState);
		return state;
	},
	set: ({ set }, newValue) => {
		set(notifiState, newValue);
	},
});
