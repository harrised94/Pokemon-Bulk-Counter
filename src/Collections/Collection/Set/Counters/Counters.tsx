import { useState } from "react";

import styles from "./Counters.module.scss";

const Counters = () => {
  const [commonCount, setCommonCount] = useState(0);
  const [uncommonCount, setUncommonCount] = useState(0);
  const [rareCount, setRareCount] = useState(0);
  const [holoCount, setHoloCount] = useState(0);

  const resetCounters = () => {
    setCommonCount(0);
    setUncommonCount(0);
    setRareCount(0);
    setHoloCount(0);
  };

  return (
    <div className={styles.counters}>
      <div>
        <b>Common: {commonCount}</b>
        <button onClick={() => setCommonCount((count) => count + 1)}>
          Add Common
        </button>
      </div>
      <div>
        <b>Uncommon: {uncommonCount}</b>
        <button onClick={() => setUncommonCount((count) => count + 1)}>
          Add Uncommon
        </button>
      </div>
      <div>
        <b>Rare: {rareCount}</b>
        <button onClick={() => setRareCount((count) => count + 1)}>
          Add Rare
        </button>
      </div>
      <div>
        <b>Holo: {holoCount}</b>
        <button onClick={() => setHoloCount((count) => count + 1)}>
          Add Holo
        </button>
      </div>
      <h4 className={styles.total}>
        Total: {commonCount + uncommonCount + rareCount + holoCount}
      </h4>
      <button className={styles.clearButton} onClick={() => resetCounters()}>
        Clear
      </button>
    </div>
  );
};

export default Counters;
