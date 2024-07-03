import styles from "./GridLIst.module.css";

interface IGridListProps {
  children: JSX.Element;
}

const GridList: React.FC<IGridListProps> = ({ children }) => {
  return <ul className={styles.root}>{children}</ul>;
};

export default GridList;