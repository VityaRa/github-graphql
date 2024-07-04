import { SearchInput } from "@/shared/ui";
import Paginator from "@/shared/ui/Paginator/Paginator";
import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { $afterCursor, $currentPage, $cursors, $reposLoading, $searchQuery, $totalCount, fetchReposFx, onPageChange, onQueryChange } from "../model";
import RepoList from "./RepoList/RepoList";
import { REPOS_PER_PAGE } from "@/shared/api/graphql/const/params";

const RootPage: React.FC = () => {
  const [total, cursors, afterCursor, currentPage, searchQuery] = useUnit([$totalCount, $cursors, $afterCursor, $currentPage, $searchQuery]);

  useEffect(() => {
    fetchReposFx({ searchTerm: searchQuery, cursors: { end: null, start: null } });
  }, []);

  return (
    <main>
      <h1>Total list</h1>
      <SearchInput onChange={onQueryChange} value={searchQuery} />
      <RepoList />
      <Paginator onClick={onPageChange} max={Math.min(Math.floor(total / REPOS_PER_PAGE), REPOS_PER_PAGE)} current={currentPage} />
    </main>
  );
};

export default RootPage;
