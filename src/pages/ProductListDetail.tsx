import BackToList from "@/assets/svg/BackToList";
import Button, { btnAttributes } from "@/common/button/Button";
import Bookmark from "@/components/Bookmark/Bookmark";
import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import SearchVehicle from "@/components/searchVehicle/SearchVehicle";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductInfo } from "./ProductList";


export default function ProductListDetail () {

  const buyBtnInfo: btnAttributes = {
		width: "150px",
		position: "right",
		text: "구매하러 가기",
		type: "circle",
	};
  
  // 뒤로가기 버튼
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  }

  // 상품 Id 별 데이터 요청
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const productId = useParams();
  // console.log(productId.id);

  const [productItem, setProductItem] = useState<ProductInfo>({
    id: null,
    maxPrice: null,
    minPrice: null,
    productId: null,
    shopName: null,
    title: null,
    buyUrl: null,
    imageUrl: undefined,
  });

  const productMutation = useMutation({
    mutationFn: () => {
      return axios.get(
        `${BASE_URL}/api/items/${productId.id}`,
      )
    }
  });

  const getProduct = async () => {
    try{
      const response = await productMutation.mutateAsync();
      // console.log(response.data);
			setProductItem(response.data);
    } catch (error) {
      console.log("Error: " + error)
    }
  }

	useEffect(() => {
		getProduct();
	}, [])

  // console.log(productItem);

  return (
    <>
    <div className="px-10 md:px-28 pt-20 bg-BASIC_WHITE w-full dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
      <div className="flex gap-1 mb-5 cursor-pointer items-top" onClick={backButton}>
        <p>목록 돌아가기</p>
        <BackToList fillColor="#333333" width="20px" height="20px" />
      </div>
      <div className="border-b pb-10 border-LIGHT_GRAY_COLOR mb-20 flex flex-col md:flex-row md:h-[400px] items-start md:items-center relative gap-10">
        <div className="md:w-[400px] h-[300px] bg-rose-300 overflow-hidden rounded-md relative">
          <div className="w-full h-full">
            <img src={productItem.imageUrl} alt="Product image" className="w-full h-full" />
          </div>
          <div className="absolute top-3 right-3">
            {productItem.id ? <Bookmark itemId={productItem.id} /> : "" }
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-5 md:gap-0 justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-5 dark:text-BASIC_WHITE">{productItem.title}</h1>
            <div className="text-lg md:text-xl flex gap-5 mb-5">
              <span>#대분류</span>
              <span>#중분류</span>
              <span>#소분류</span>
            </div>
          </div>
          <div className="pb-3 flex flex-col gap-3 md:gap-5">
            <div>
              <span className="w-[100px] inline-block">판매자</span>
              <span>{productItem.shopName}</span>
            </div>
            <div>
              <span className="w-[100px] inline-block">상품 가격</span>
              <span>{String(productItem.minPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a href={`${productItem.buyUrl}`}>
              <Button btnInfo={buyBtnInfo} />
            </a>
          </div>
        </div>
        <div className="">
        </div>
      </div>
      <SearchVehicle />
      <div className="pb-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">관련상품</h1>
        <div className="w-full flex flex-col gap-10 md:gap-10 md:flex-row justify-between items-center">
          {Array.from(Array(3), (_, index) => (
            <ProductCardItems key={index} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}