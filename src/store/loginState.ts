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
		loginState: window.localStorage.getItem("access_token") ? true : false,
	},
});

export const darkState = atom<DarkTypes>({
	key: "darkState",
	default: {
		darkState: false,
	},
});

export const loginSelector = selector({
	key: "loginSelector",
	get: ({ get }) => {
		const state = get(loginState);
		return state.loginState;
	},
	set: ({ set }, newValue) => {
		if (newValue instanceof DefaultValue) {
			return;
		}

		set(loginState, { loginState: newValue });
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
