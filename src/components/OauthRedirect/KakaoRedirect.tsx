// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";

const KakaoRedirect = () => {
  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  const code = new URL(window.location.href).searchParams.get("code");
  // const REDIRECT_URI = import.meta.env.KAKAO_REDIRECT_URI;
  // const navigator = useNavigate();
  // const authEmail = "";
  // const [cookies, setCookie] = useCokies();
  // const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
  //   const redirectOauth = async () => {
	// 		try {
	// 			const response = await axios.get(`${BASE_URL}/${REDIRECT_URI}/?code=${code}`);
	// 			console.log(response);
				
	// 		} catch (error) {
	// 			console.error("Error fetching data:", error);
	// 		}
	// 	};
	// 	redirectOauth();
  // navigator("/");
  }, []);

  return (
    <></>
  )
}

export default KakaoRedirect;