import { useParams } from "react-router-dom";
import { $detailedRepositoryLoading, fetchRepoById, repoDetailParamName } from "../model";
import { useEffect } from "react";
import { useUnit } from "effector-react";
import { $detailedRepository } from "../model";
import RepoDetailedItem from "@/entities/ui/RepoDetailedItem/RepoDetailedItem";
import BackLink from "@/shared/ui/BackLink/BackLink";
import styles from './RepoDetailPage.module.css';

const RepoDetailPage = () => {
  const params = useParams();
  const repoId = params[repoDetailParamName]!;
  const [detailedRepo, detailedRepositoryLoading] = useUnit([$detailedRepository, $detailedRepositoryLoading]);

  useEffect(() => {
    fetchRepoById(repoId);
  }, [repoId]);


  if (detailedRepositoryLoading) {
    return <div>
      Loading
    </div>
  }

  if (!detailedRepo) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.root}>
      <BackLink href="/" />
      <RepoDetailedItem item={detailedRepo} />
    </div>
  );
};

export default RepoDetailPage;
