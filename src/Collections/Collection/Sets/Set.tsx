import Counters from "./Counters/Counters";

import styles from "./Set.module.scss";

interface SetProps {
  set: string;
  imageUrl?: string;
}

const Set = ({ set, imageUrl }: SetProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.setTitle}>
        <h2>{set}</h2>
        {imageUrl && <img src={imageUrl} className="setImage" height="46px" />}
      </div>
      <Counters />
    </div>
  );
};

export default Set;
