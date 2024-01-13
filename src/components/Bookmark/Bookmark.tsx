import UnBookmarkButton from "@/assets/svg/UnBookmarkButton";
import BookmarkButton from "@/assets/svg/BookmarkButton";
import { useRecoilState } from "recoil";
import { bookmarksState } from "@/store/bookmarkState";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface ItemIdProps {
	itemId: number;
	type: "forum" | "item";
}

export default function Bookmark({ itemId, type }: ItemIdProps) {
	// const [isBookmarked, setIsBookMarked] = useState(false);
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	// console.log(itemId);

	const [isBookmarked, setIsBookMarked] = useRecoilState(bookmarksState);
	// const bookmarkValue = useRecoilValue(bookmarkSelector);
	// console.log(bookmarkValue);

	const handleBookmark = () => {
		setIsBookMarked([...isBookmarked, itemId]);
	};

	const interestItemMutation = useMutation({
		mutationFn: () => {
			return axios.post(
				`${BASE_URL}/api/interest-items`,
				{
					itemId: itemId,
				},
				{
					headers: {
						"Content-Type": "application/json",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
		},
	});

	const interestArticleMutation = useMutation({
		mutationFn: () => {
			return axios.post(
				`${BASE_URL}/api/interest-articles`,
				{
					articleId: itemId,
				},
				{
					headers: {
						"Content-Type": "application/json",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
		},
	});

	const addInterestItem = async () => {
		try {
			if (type === "forum") await interestArticleMutation.mutateAsync();
			const response = await interestItemMutation.mutateAsync();
			console.log(response);
			handleBookmark();
		} catch (error) {
			console.log("Error: " + error);
		}
	};

	return (
		<>
			<div className="cursor-pointer" onClick={addInterestItem}>
				{isBookmarked.includes(itemId) ? (
					<BookmarkButton fillColor="#FF5959" width="40px" height="30px" />
				) : (
					<UnBookmarkButton fillColor="#888888" width="40px" height="30px" />
				)}
			</div>
		</>
	);
}
