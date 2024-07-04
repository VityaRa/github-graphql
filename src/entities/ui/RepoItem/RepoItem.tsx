import Repository from "@/entities/repo/model/types";
import styles from "./RepoItem.module.css";

interface IRepoItemProps {
  item: Repository;
}

const RepoItem: React.FC<IRepoItemProps> = ({ item }) => {
  return (
    <li className={styles.root}>
      <a href={`/${item.id}`} className={styles.root}>
        <h3>{item.name}</h3>
        <span>{item.stargazerCount}</span>
        <span>{item.url}</span>
        <span>{item.committedDate}</span>
      </a>
    </li>
  );
};

export default RepoItem;
