import { ReactNode } from "react";
import styles from "./Chip.module.css";

type Variant = "colored";

interface IChipProps {
  children: ReactNode;
  variant?: Variant;
}

const variantToClassName: { [key in Variant]: string } = {
  'colored': styles.colored,
};

const Chip: React.FC<IChipProps> = ({ children, variant = 'colored' }) => {
  const variantClassName = variantToClassName[variant];
  return <div className={`${styles.root} ${variantClassName}`}>{children}</div>;
};

export default Chip;
