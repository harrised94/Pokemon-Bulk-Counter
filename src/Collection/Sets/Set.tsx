import Counters from "./Counters/Counters";

import styles from "./Set.module.scss";

interface SetProps {
  set: string;
  imageUrl?: string;
}

const Set = ({ set, imageUrl }: SetProps) => {
  return (
    <div className={styles.card}>
      <Counters set={set} imageUrl={imageUrl} />
    </div>
  );
};

export default Set;
