import { atom } from "recoil";

interface LoginTypes {
	loginState: boolean;
}

export const loginState = atom<LoginTypes>({
	key: "loginState",
	default: {
		loginState: false,
	},
});
