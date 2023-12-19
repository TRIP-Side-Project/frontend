export default function useFormatTitle(title: string, maxLength: number) {
	if (title.length <= maxLength) {
		return title;
	} else {
		const formattedData = title.slice(0, maxLength - 2) + "...";
		return formattedData;
	}
}
