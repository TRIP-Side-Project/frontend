import SearchIcon from "@/assets/svg/SearchIcon";

type SearchTypes = {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
};

//상위 컴포넌트에서 const [search, setSearch] = useState(""); 선언 후 props 로 전달
const Search = ({ setSearch }: SearchTypes) => {
	//Enter 키 발동 시 검색 keyword 전달
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		if (event.key === "Enter") {
			setSearch(target.value);
		}
	};

	return (
		<div className="relative flex flex-row items-center px-2 py-1 border rounded-xl bg-BASIC_WHITE md:w-96 w-36 h-fit border-BASIC_BLACK">
			<div className="relative">
				<SearchIcon fillColor={"#AAAAAA"} width={"20px"} height={"20px"} />
			</div>
			<input
				type="text"
				id="searchInput"
				className="w-full px-2 py-1 outline-none bg-BASIC_WHITE"
				placeholder="게시글 검색"
				onKeyDown={handleKeyDown}
				autoComplete="off"
			></input>
		</div>
	);
};

export default Search;
