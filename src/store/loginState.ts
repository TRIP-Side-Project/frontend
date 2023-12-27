import { DefaultValue, atom, selector } from "recoil";

interface LoginTypes {
	loginState: boolean;
}

interface DarkTypes {
	darkState: boolean;
}

export const loginState = atom<LoginTypes>({
	key: "loginState",
	default: {
		loginState: false,
	},
});

export const darkState = atom<DarkTypes>({
	key: "darkState",
	default: {
		darkState: false,
	},
});

export const darkSelector = selector({
	key: "darkSelector",
	get: ({ get }) => {
		const state = get(darkState);
		return state.darkState;
	},
	set: ({ set }, newValue) => {
		//원본 훼손
		if (newValue instanceof DefaultValue) {
			//DefaultValue 인스턴스가 전달되면 아무것도 하지 않음.
			return;
		}

		set(darkState, { darkState: newValue });
	},
});
