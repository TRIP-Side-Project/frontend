import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/header/Header";
import Forum from "./pages/Forum";

function App() {
	return (
		<>
			<Header />
			<Layout>
				<Forum />
			</Layout>
			<Footer />
		</>
	);
}

export default App;
