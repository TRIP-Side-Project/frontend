import { atom, selector } from "recoil";

export const bookmarkState = atom({
  key: "bookmarkState",
  default: false,
});

export const bookmarkSelector = selector({
  key: "bookmarkSelector",
  get: ({get}) => {
    const bookmark = get(bookmarkState);
    return bookmark
  }
})