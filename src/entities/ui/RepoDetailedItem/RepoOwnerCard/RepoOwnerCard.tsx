import { IOwner } from "@/entities/owner/types";
import styles from "./RepoOwnerCard.module.css";

interface IRepoOwnerCardProps {
  item: IOwner;
}

const RepoOwnerCard: React.FC<IRepoOwnerCardProps> = ({ item }) => {
  return (
    <div className={styles.root}>
      {item?.avatarUrl && <img className={styles.img} src={item.avatarUrl} alt="Avatar" />}
      <a target="_blank" href={item.url}>{item.login}</a>
    </div>
  );
};

export default RepoOwnerCard;
