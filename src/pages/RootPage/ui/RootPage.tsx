import useDebounce from "@/shared/hooks/useDebounce";
import { SearchInput } from "@/shared/ui";
import Paginator from "@/shared/ui/Paginator/Paginator";
import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { useFetchReposActions } from "../hooks/useFetchRepos";
import {
  $pageInfo,
  $searchQuery,
  onQueryChange
} from "../model";
import RepoList from "./RepoList/RepoList";

const RootPage: React.FC = () => {
  const { onLoad, onPageChange, onSearchQueryChange } =  useFetchReposActions();
  const [searchQuery, pageInfo] = useUnit([
    $searchQuery,
    $pageInfo,
  ]);
  
  useEffect(() => {
    onLoad();
  }, []);

  useDebounce(() => onSearchQueryChange(searchQuery), 1000, [searchQuery])

  return (
    <main>
      <h1>Total list</h1>
      <SearchInput onChange={onQueryChange} value={searchQuery} />
      <Paginator
        hasNextPage={pageInfo.hasNextPage}
        hasPrevPage={pageInfo.hasPreviousPage}

        onNextPage={() => onPageChange('next')}
        onPrevPage={() => onPageChange('prev')}
      />
      <RepoList />
    </main>
  );
};

export default RootPage;
