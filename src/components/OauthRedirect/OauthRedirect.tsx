import { useNavigate } from "react-router-dom";

const OauthRedirect = () => {
  const navigate = useNavigate();
  const accessToken = new URL(window.location.href).searchParams.get("accessToken");
  console.log(accessToken);
  if (accessToken) localStorage.setItem("access_token", accessToken);
  navigate('/');
  
  return (
    <></>
  )
}

export default OauthRedirect;