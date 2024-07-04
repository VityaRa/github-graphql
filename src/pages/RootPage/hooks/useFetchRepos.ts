import { useUnit } from "effector-react";
import { $pageInfo, $searchQuery, fetchReposFx } from "../model";
import { useCallback } from "react";

export const useFetchReposActions = () => {
  const [searchQuery, pageInfo] = useUnit([
    $searchQuery,
    $pageInfo,
  ]);
  
  const onSearchQueryChange = useCallback((searchQuery: string) => {
    fetchReposFx({
      searchTerm: searchQuery,
      after: null,
      before: null,
    })
  }, []);

  const onPageChange = (type: 'next' | 'prev') => {
    const query = {
      searchTerm: searchQuery,
      after: type === 'next' ? pageInfo.after : null,
      before: type === 'prev' ? pageInfo.before : null,
    };

    fetchReposFx(query);
  };

  const onLoad = () => {
    fetchReposFx({
      searchTerm: searchQuery,
      after: pageInfo.prevState?.after ?? null,
      before: null,
    });
  };

  return {
    onLoad,
    onPageChange,
    onSearchQueryChange,
  }
}