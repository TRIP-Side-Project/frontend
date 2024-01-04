import { atom, selector } from "recoil";

export const bookmarksState = atom({
  key: "bookmarksState",
  default: [] as number[],
});

// 북마크 추가
export const bookmarkSelector = selector({
  key: "bookmarkSelector",
  get: ({get}) => {
    return get(bookmarksState);
  },
  // set: ({set, get}, newBookmark: string) => {
  //   const bookmarks = get(bookmarksState);
  //   const updatedBookmarks = [...bookmarks, newBookmark];
  //   // return bookmark
  //   set(bookmarksState, updatedBookmarks);
  // }
})