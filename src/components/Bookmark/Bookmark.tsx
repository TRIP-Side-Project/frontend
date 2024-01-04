import UnBookmarkButton from "@/assets/svg/UnBookmarkButton";
import BookmarkButton from "@/assets/svg/BookmarkButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkSelector, bookmarksState } from "@/store/bookmarkState";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface ItemIdProps {
  itemId: number
}

export default function Bookmark ({itemId}:ItemIdProps) {
  // const [isBookmarked, setIsBookMarked] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  
  const [isBookmarked, setIsBookMarked] = useRecoilState(bookmarksState);
  const bookmarkValue = useRecoilValue(bookmarkSelector);
  console.log(bookmarkValue);

  const handleBookmark = () => {
    setIsBookMarked([...isBookmarked, itemId]);
  }

  const interestItemMutation = useMutation({
    mutationFn: () => {
      return axios.post(
        `${BASE_URL}/api/interest-items`,
        {
          "itemId": itemId
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    }
  });

  const addInterestItem = async () => {
    try{
      const response = await interestItemMutation.mutateAsync();
      console.log(response);
      handleBookmark();
    } catch(error) {
      console.log("Error: " + error)
    }
  }

  return (
    <>
    <div className="cursor-pointer" onClick={addInterestItem}>
      {isBookmarked.includes(itemId) ?
        <BookmarkButton fillColor="#FF5959" width="40px" height="30px" /> :
        <UnBookmarkButton fillColor="#888888" width="40px" height="30px" />
      }
    </div>
    </>
  )
}