import styles from './BackLink.module.css';

interface IBackLinkProps {
  href: string;
}

const BackLink: React.FC<IBackLinkProps> = ({ href }) => {
  return <a className={styles.root} href={href}>{`<- Назад`}</a>;
};

export default BackLink;
