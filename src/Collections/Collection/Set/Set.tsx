import Counters from "./Counters/Counters";
import { imageMap } from "./utilities/imageMap";

import styles from "./Set.module.scss";

interface SetProps {
  set: string;
}

const Set = ({ set }: SetProps) => {
  // Convert the 'set' string to match the format of keys in imageMap
  const imageKey = set.toLowerCase().replace(/\s/g, "");

  return (
    <div className={styles.card}>
      <div className={styles.setTitle}>
        <h2>{set}</h2>
        {set !== "Base Set" && (
          <img src={imageMap[imageKey]} className="setImage" height="46px" />
        )}
      </div>
      <Counters />
    </div>
  );
};

export default Set;
