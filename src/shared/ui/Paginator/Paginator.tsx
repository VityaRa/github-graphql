import styles from "./Paginator.module.css";

interface IPaginatorProps {
  max: number;
  min?: number;
  current: number;
}

const getPagination = (current: number, max: number, total: number) => {
  const step = Math.floor((max - 1) / 2);
  let startPage = Math.max(
    current + step > total ? total - max + 1 : current - step,
    1
  );
  const endPage = Math.min(startPage + max - 1, total);
  const pagination = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return pagination;
};

const Paginator: React.FC<IPaginatorProps> = ({ max, current, min = 1 }) => {
  const paginationIndexes = getPagination(current, max, min);
  return (
    <ul className={styles.root}>
      {paginationIndexes.map((idx) => (
        <li className={styles.item}>{idx}</li>
      ))}
    </ul>
  );
};

export default Paginator;
