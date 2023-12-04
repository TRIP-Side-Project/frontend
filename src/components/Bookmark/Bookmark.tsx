import { useState } from "react";
import UnBookmarkButton from "@/assets/svg/UnBookmarkButton";
import BookmarkButton from "@/assets/svg/BookmarkButton";

export default function Bookmark () {
  const [isBookmarked, setIsBookMarked] = useState(false);

  const handleBookmark = () => {
    setIsBookMarked(!isBookmarked);
  }
  return (
    <>
    <div className="absolute top-0 right-0 cursor-pointer" onClick={handleBookmark}>
      {isBookmarked ?
        <BookmarkButton fillColor="#FF5959" width="40px" height="30px" /> :
        <UnBookmarkButton fillColor="#888888" width="40px" height="30px" />
      }
    </div>
    </>
  )
}