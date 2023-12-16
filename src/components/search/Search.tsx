import { useState } from "react";
import SearchIcon from "@/assets/svg/SearchIcon";

const Search = () => {
	const [search, setSearch] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	return (
		<div className="relative flex flex-row items-center px-2 py-1 border rounded-xl bg-BASIC_WHITE md:w-96 w-36 h-fit border-BASIC_BLACK">
			<div className="relative">
				<SearchIcon fillColor={"#AAAAAA"} width={"20px"} height={"20px"} />
			</div>
			<input
				type="text"
				id="searchInput"
				value={search}
				className="w-full px-2 py-1 outline-none bg-BASIC_WHITE"
				placeholder="게시글 검색"
				onChange={handleChange}
			></input>
		</div>
	);
};

export default Search;
