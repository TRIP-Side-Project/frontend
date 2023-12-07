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

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/products/detail" element={<ProductListDetail />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/forum/detail" element={<DetailForum />} />
					<Route path="/forum/edit" element={<EditForum />} />
					<Route path="/mypage" element={<Mypage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Layout>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
