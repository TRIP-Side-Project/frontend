export default function useFormatDate(date: string): string | null {
	const inputDate = new Date(date);

	//유효성 검사
	if (isNaN(inputDate.getTime())) {
		console.error("알맞지 않은 Date 형식");
		return null;
	}

	const formattedDate = inputDate.toLocaleDateString("ko-KR", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});

	return formattedDate;
}
