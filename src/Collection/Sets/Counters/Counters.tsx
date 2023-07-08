import { useState } from "react";

import styles from "./Counters.module.scss";

interface CounterProps {
  set: string;
  imageUrl?: string;
}

const Counters = ({ set, imageUrl }: CounterProps) => {
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
    <div>
      <div className={styles.setTitle}>
        <h2>{set}</h2>
        {imageUrl && <img src={imageUrl} className="setImage" height="46px" />}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <b>Common: {commonCount}</b>
        <button
          style={{ width: "200px" }}
          onClick={() => setCommonCount((count) => count + 1)}
        >
          Add Common
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <b>Uncommon: {uncommonCount}</b>
        <button
          style={{ width: "200px" }}
          onClick={() => setUncommonCount((count) => count + 1)}
        >
          Add Uncommon
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "15px",
        }}
      >
        <b>Rare: {rareCount}</b>
        <button
          style={{ width: "200px" }}
          onClick={() => setRareCount((count) => count + 1)}
        >
          Add Rare
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <b>Holo: {holoCount}</b>
        <button
          style={{ width: "200px" }}
          onClick={() => setHoloCount((count) => count + 1)}
        >
          Add Holo
        </button>
      </div>
      <h4
        style={{
          textAlign: "left",
          borderTop: "1px solid black",
          paddingTop: 30,
        }}
      >
        Total: {commonCount + uncommonCount + rareCount + holoCount}
      </h4>
      <button
        style={{ width: "80px", backgroundColor: "#ff5731", color: "white" }}
        onClick={() => resetCounters()}
      >
        Clear
      </button>
    </div>
  );
};

export default Counters;
