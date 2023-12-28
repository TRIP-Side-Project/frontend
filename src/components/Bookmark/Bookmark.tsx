import UnBookmarkButton from "@/assets/svg/UnBookmarkButton";
import BookmarkButton from "@/assets/svg/BookmarkButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookmarkSelector, bookmarkState } from "@/store/bookmarkState";

export default function Bookmark () {
  // const [isBookmarked, setIsBookMarked] = useState(false);
  
  const [isBookmarked, setIsBookMarked] = useRecoilState(bookmarkState);
  const bookmarkValue = useRecoilValue(bookmarkSelector);
  console.log(bookmarkValue);

  const handleBookmark = () => {
    setIsBookMarked(!isBookmarked);
  }
  return (
    <>
    <div className="cursor-pointer" onClick={handleBookmark}>
      {isBookmarked ?
        <BookmarkButton fillColor="#FF5959" width="40px" height="30px" /> :
        <UnBookmarkButton fillColor="#888888" width="40px" height="30px" />
      }
    </div>
    </>
  )
}