import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/header/Header";
import EditForum from "./pages/EditForum";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductListDetail from "./pages/ProductListDetail";
import Forum from "./pages/Forum";
import DetailForum from "./pages/DetailForum";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import FindPw from "./pages/FindPw";
import OauthRedirect from "./components/OauthRedirect/OauthRedirect";
// import Notification from "./components/notification/Notification";

function App() {
	return (
		<div className="dark:bg-BASIC_BLACK bg-BASIC_WHITE">
			<BrowserRouter>
				<Header />
<!-- 				<Notification /> -->
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<ProductList />} />
						<Route
							path="/products/detail/:id"
							element={<ProductListDetail />}
						/>
						<Route path="/forum" element={<Forum />} />
						<Route path="/forum/detail/:articleId" element={<DetailForum />} />
						<Route path="/forum/edit" element={<EditForum />} />
						<Route path="/mypage" element={<Mypage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/home" element={<OauthRedirect />} />
						<Route path="/findpw" element={<FindPw />} />
					</Routes>
				</Layout>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
