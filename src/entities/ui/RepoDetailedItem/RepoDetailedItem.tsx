import { IDetailedRepositoryDto } from "@/entities/repo/detailed";
import styles from "./RepoDetailedItem.module.css";
import RepoOwnerCard from "./RepoOwnerCard/RepoOwnerCard";
import Chip from "@/shared/ui/Chip/Chip";

interface IRepoDetailedItemProps {
  item: IDetailedRepositoryDto;
}

const RepoDetailedItem: React.FC<IRepoDetailedItemProps> = ({ item }) => {
  const { name, stargazerCount, updatedAt, owner, languages, description } =
    item;
  
  return (
    <div className={styles.root}>
      <RepoOwnerCard item={owner} />
      <div className={styles.info}>
        <div className={styles.repo}>
          <span>Название: {name}</span>
          <span>Кол-во звезд: {stargazerCount}</span>
          <span>Последний коммит: {updatedAt.toLocaleString()}</span>
        </div>
        <div className={styles.languages}>
          {languages.map((lang, idx) => (
            <Chip key={idx}>{lang}</Chip>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default RepoDetailedItem;
