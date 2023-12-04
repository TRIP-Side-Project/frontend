import Search from "@/components/search/Search";
import ProductListItems from "@/components/productListItems/ProductListItems";
import Pagenation from "@/components/Pagenation";
export default function ProductList () {
  return (
    <>
    <div className="px-28 bg-BASIC_WHITE">
      <div className="flex justify-between align-center mb-10 pt-10">
        <h1 className="text-3xl font-bold">눈꽃여행</h1>
        <Search />
        <div className="flex gap-2 border-b text-base">
          <span>인기순</span>
          <span> | </span>
          <span>최신순</span>
        </div>
      </div>
      {Array.from(Array(5), (_, index) => (
				<ProductListItems key={index} />
			))}
      <Pagenation />
    </div>
    </>
  )
}