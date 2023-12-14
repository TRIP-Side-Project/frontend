import { useEffect, useState } from "react";

import Search from "@/components/search/Search";
import ProductListItems from "@/components/productListItems/ProductListItems";
import Pagenation from "@/components/Pagenation";

const ProductList = () => {

  // 동적 화면 상태
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  
  // false -> 최신순 true -> 인기순
  // 아무거나 눌러도 바뀌는 걸 만들어버렸다..
  const [isSort, setIsSort] = useState(false);

  const handleSort = () => {
    setIsSort(!isSort);
  }

  const viewSortClass = "cursor-pointer px-2 text-BASIC_BLACK";
  const nonViewSortClass = "cursor-pointer px-2 text-LIGHT_GRAY_COLOR";
  

  return (
    <div className="px-10 md:px-0 md:px-28 bg-BASIC_WHITE w-full">
      <div className="md:flex md:justify-between md:items-end my-14 md:py-20">
        <h1 className="my-7 md:my-0 text-2xl md:text-4xl font-bold">눈꽃여행</h1>
        {innerWidth > 768 &&
          <>
            <Search />
            <div className="flex gap-2 text-base border-b border-DARK_GRAY_COLOR px-3 pb-1">
              <span className={isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>인기순</span>
              <span className={!isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>최신순</span>
            </div>
          </>
        }
        {innerWidth <= 768 &&
          <div className="flex justify-between items-center">
            <Search />
            <div className="flex text-sm border-b border-DARK_GRAY_COLOR pb-1">
              <span className={isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>인기순</span>
              <span className={!isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>최신순</span>
            </div>
          </div>
        }
      </div>
      {Array.from(Array(5), (_, index) => (
        <ProductListItems key={index} />
			))}
      <Pagenation />
    </div>
  )
}

export default ProductList;