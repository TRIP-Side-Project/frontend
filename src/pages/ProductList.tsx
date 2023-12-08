import { useState } from "react";

import Search from "@/components/search/Search";
import ProductListItems from "@/components/productListItems/ProductListItems";
import Pagenation from "@/components/Pagenation";
import { Link } from "react-router-dom";

const ProductList = () => {

  
  // false -> 최신순 true -> 인기순
  // 아무거나 눌러도 바뀌는 걸 만들어버렸다..
  const [isSort, setIsSort] = useState(false);

  const handleSort = () => {
    setIsSort(!isSort);
  }

  const viewSortClass = "cursor-pointer px-2 text-BASIC_BLACK";
  const nonViewSortClass = "cursor-pointer px-2 text-LIGHT_GRAY_COLOR";
  

  return (
    <div className="px-28 bg-BASIC_WHITE w-full">
      <div className="flex justify-between items-end py-20">
        <h1 className="text-4xl font-bold">눈꽃여행</h1>
        <Search />
        <div className="flex gap-2 text-base border-b border-DARK_GRAY_COLOR px-3 pb-1">
          <span className={isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>인기순</span>
          <span className={!isSort ? viewSortClass : nonViewSortClass} onClick={handleSort}>최신순</span>
        </div>
      </div>
      {Array.from(Array(5), (_, index) => (
        <Link to={'/products/detail'}>
          <ProductListItems key={index} />
        </Link>
			))}
      <Pagenation />
    </div>
  )
}

export default ProductList;