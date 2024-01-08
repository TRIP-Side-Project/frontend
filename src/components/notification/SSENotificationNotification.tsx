import { useRef, useEffect, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
//4500ms 마다 연결이 끊기는 에러 존재하여 useEffect를 통해 다시 연결
// import RTnoti from "./RTnoti";

const SSENotification = ({ isOpen }: { isOpen: boolean }) => {
	const eventSource = useRef<EventSourcePolyfill | null | undefined>();
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const URL = import.meta.env.VITE_BASE_URL;

	const [notification, setNotification] = useState(null);
	const [retryCount, setRetryCount] = useState(-1);

	useEffect(() => {
		//SSE 연결 생성
		const connectSSE = () => {
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
				console.log("!!이벤트 핸들러 등록", parsedData);
				setNotification(parsedData);
			};

			//연결 성공 핸들러 - 접속이 맺어졌을 때 호출
			eventSource.current.onopen = async (event) => {
				console.log("이벤트 성공 핸들러", event);
			};

			//연결 오류 핸들러?
			eventSource.current.onerror = (err) => {
				console.log("이벤트 에러 핸들러", err);
				eventSource.current?.close();

				if (retryCount < 3) {
					setTimeout(() => {
						connectSSE(); //3번 이하 재연결 시도
						setRetryCount(retryCount + 1);
					}, 5000);
				}
			};
		};

		if (
			isOpen ||
			(window.localStorage.getItem("access_token") && !eventSource.current)
		) {
			//중복 연결 방지
			connectSSE();
		}

		// 컴포넌트 언마운트 시 연결 종료
		return () => {
			if (eventSource.current) {
				eventSource.current?.close(); // 연결 종료
				eventSource.current = null; //참조 제거
				console.log("언마운트 이벤트 헨들러 종료");
			}
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, retryCount]);

	return <>{notification && console.log("상단 알림 창 등장 ")}</>;
};

export default SSENotification;
