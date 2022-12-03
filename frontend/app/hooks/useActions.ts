import { useMemo } from "react";
import { bindActionCreators } from "redux";

import { allActions } from "@/store/rootActions";
import { useAppDispatch } from "@/store/store";

export const useActions = () => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
