import RepoItem from "@/entities/ui/RepoItem/RepoItem";
import { GridList, SearchInput } from "@/shared/ui";
import { useList, useUnit } from "effector-react";
import React, { useEffect } from "react";
import { $repos, $reposLoading, fetchReposFx } from "../model";
import Paginator from "@/shared/ui/Paginator/Paginator";

const RootPage: React.FC = () => {
  const repoItemsList = useList($repos, (item) => <RepoItem item={item} />);
  const reposLoading = useUnit($reposLoading);

  const handleSearch = (query: string) => {
    fetchReposFx({ searchTerm: query });
  };

  useEffect(() => {
    fetchReposFx({ searchTerm: "" });
  }, []);

  return (
    <main>
      <h1>Total list</h1>
      <SearchInput onSearch={handleSearch} />
      {reposLoading ? <div>LOADING</div> : <GridList>{repoItemsList}</GridList>}
      <Paginator max={10} current={1} />
    </main>
  );
};

export default RootPage;
