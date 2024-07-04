import RepoItem from "@/entities/ui/RepoItem/RepoItem";
import { GridList } from "@/shared/ui";
import { useList, useUnit } from "effector-react";
import React from "react";
import { $repos, $reposLoading } from "../../model";

const RepoList: React.FC = () => {
  const repoItemsList = useList($repos, (item) => <RepoItem item={item} />);
  const reposLoading = useUnit($reposLoading);

  if (reposLoading) {
    return <>Loading</>
  };

  return <GridList>{repoItemsList}</GridList>
};

export default RepoList;
