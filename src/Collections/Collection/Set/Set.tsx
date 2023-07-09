import { useState } from "react";
import Counters from "./Counters/Counters";
import { imageMap } from "./utilities/imageMap";

import styles from "./Set.module.scss";

interface SetProps {
  set: string;
  onSetTotalChange: (total: number) => void;
}

const Set = ({ set, onSetTotalChange }: SetProps) => {
  // Convert the 'set' string to match the format of keys in imageMap
  const imageKey = set.toLowerCase().replace(/\s/g, "");

  const [previousTotal, setPreviousTotal] = useState(0);

  const handleSetTotalChange = (total: number) => {
    onSetTotalChange(total - previousTotal);
    setPreviousTotal(total);
  };

  return (
    <div className={styles.card}>
      <div className={styles.setTitle}>
        <h2>{set}</h2>
        {set !== "Base Set" && (
          <img
            style={{ maxWidth: "50%" }}
            src={imageMap[imageKey]}
            className="setImage"
            height="46px"
          />
        )}
      </div>
      <Counters onTotalChange={handleSetTotalChange} />
    </div>
  );
};

export default Set;
