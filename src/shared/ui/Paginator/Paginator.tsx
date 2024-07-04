import styles from "./Paginator.module.css";

interface IPaginatorProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;

  onNextPage: () => void,
  onPrevPage: () => void,
}

const Paginator: React.FC<IPaginatorProps> = ({
  hasNextPage,
  hasPrevPage,

  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className={styles.root}>
      {hasPrevPage && <button onClick={onPrevPage}>{"<-"}</button>}
      {hasNextPage && <button onClick={onNextPage}>{"->"}</button>}
    </div>
  );
};

export default Paginator;
