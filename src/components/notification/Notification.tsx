import { useRef, useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
//4500ms 마다 연결이 끊기는 에러 존재하여 useEffect를 통해 다시 연결
import RTnoti from "./RTnoti";

const Notification = () => {
	const eventSource = useRef<EventSourcePolyfill>();
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const URL = import.meta.env.VITE_BASE_URL;

	const [notification, setNotification] = useState(null);

	useEffect(() => {
		//SSE 연결 생성
		eventSource.current = new EventSourcePolyfill(
			`${URL}/api/notifications/connect`,
			{
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
				withCredentials: true,
			},
		);

		//기본 메세지 받았을 때
		eventSource.current.onmessage = (event) => {
			const parsedData = JSON.parse(event.data);
			console.log("이벤트 핸들러 등록", parsedData);
			setNotification(parsedData);
		};

		//연결 성공 핸들러 - 접속이 맺어졌을 때 호출
		eventSource.current.onopen = (event) => {
			console.log("이벤트 성공 핸들러", event);
		};

		//연결 오류 핸들러?
		eventSource.current.onerror = (err) => {
			console.log("이벤트 에러 핸들러", err);
			eventSource.current?.close();
		};

		//컴포넌트 언마운트 시 연결 종료
		return () => {
			eventSource.current?.close();
		};
	});

	return <>{notification && <RTnoti />}</>;
};

export default Notification;
