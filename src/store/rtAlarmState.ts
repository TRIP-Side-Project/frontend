import { atom } from "recoil";

type RTalarmTypes = {
	alarmState: boolean;
};

export const rtAlarmState = atom<RTalarmTypes>({
	key: "rtAlarmState",
	default: {
		alarmState: false,
	},
});
