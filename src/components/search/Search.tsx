import { useState } from "react";
import SearchIcon from "@/assets/svg/SearchIcon";

const Search = () => {
	const [search, setSearch] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	return (
		<div className="relative flex flex-row items-center px-2 py-1 mx-auto my-5 border rounded-2xl bg-BASIC_WHITE w-96 min-w-fit h-fit border-BASIC_BLACK">
			<div className="relative">
				<SearchIcon fillColor={"#AAAAAA"} width={"27px"} height={"27px"} />
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
