//ATOM 설정
//어떤 컴포넌트에서나 읽고 쓸 수 있다. atom 의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독.
//atom에 변화가 있으면 이 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생.

import { atom } from "recoil";

interface TempTypes {
	count: number;
}

export const tempState = atom<TempTypes>({
	key: "countState", // unique key
	default: {
		// initial value
		count: 0,
	},
});
