import { useCallback, useEffect, useRef } from "react";

type OutsideClickTypes = {
	onClickOutside: () => void;
};

const useOutsideClick = ({ onClickOutside }: OutsideClickTypes) => {
	const ref = useRef<HTMLInputElement>(null);

	const handleClick = useCallback(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(e: any) => {
			const insde =
				ref.current !== null ? ref.current.contains(e.target) : null;
			if (insde) return;

			onClickOutside();
		},
		[onClickOutside, ref],
	);

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	}, [handleClick]);

	return ref;
};

export default useOutsideClick;
