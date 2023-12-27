import { useEffect } from "react";
import Sun from "@/assets/svg/Sun";
import Moon from "@/assets/svg/Moon";
import { darkSelector } from "@/store/loginState";
import { useRecoilState } from "recoil";

const DarkToggle = () => {
	// const [isDark, setIsDark] = useState(false);
	const [isDark, setIsDark] = useRecoilState(darkSelector);

	const handleDarkToggle = () => {
		setIsDark(!isDark);
		toggleDarkMode();
	};

	const toggleX = isDark ? `translate-x-11` : "after:-translate-x-10";
	const moonColor = isDark ? "#FAFAFA" : "#1C274C";
	const sunColor = isDark ? "#1C274C" : "#FAFAFA";

	// 다크모드
	const toggleDarkMode = () => {
		if (localStorage.getItem("theme") === "dark") {
			// 다크모드 -> 기본모드
			localStorage.removeItem("theme"); // 다크모드 삭제
			document.documentElement.classList.remove("dark"); // html class에서 dark클래스 삭제 !
			setIsDark(false);
		} else {
			// 기본모드 -> 다크모드
			document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 !
			localStorage.setItem("theme", "dark"); // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 !
			setIsDark(true);
		}
	};

	useEffect(() => {
		// 처음에 다크모드인지 판단
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		}
	}, [isDark]);

	return (
		<div className="relative w-[77px] h-[29px] rounded-full bg-LINE_POINT_COLOR flex-row flex items-center justify-between ">
			<span
				className={`transition duration-300 absolute z-10 w-[32px] p-auto h-full bg-MAIN_COLOR flex items-center justify-center rounded-full drop-shadow-toggle ${toggleX}`}
			></span>

			<div
				className="z-30 flex items-center justify-center px-1.5 "
				onClick={handleDarkToggle}
			>
				<Sun fillColor={sunColor} width={"20px"} height={"20px"} />
			</div>

			<div
				className="z-30 flex items-center justify-center px-1.5"
				onClick={handleDarkToggle}
			>
				<Moon fillColor={moonColor} width={"20px"} height={"20px"} />
			</div>
		</div>
	);
};

export default DarkToggle;
