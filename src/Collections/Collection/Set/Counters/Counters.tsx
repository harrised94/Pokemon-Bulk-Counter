import { useState, useEffect } from "react";
import { InputNumber } from "antd";

import styles from "./Counters.module.scss";

interface CountersProps {
  onTotalChange: (total: number) => void;
}

const Counters = ({ onTotalChange }: CountersProps) => {
  const [commonCount, setCommonCount] = useState(0);
  const [uncommonCount, setUncommonCount] = useState(0);
  const [rareCount, setRareCount] = useState(0);
  const [holoCount, setHoloCount] = useState(0);

  useEffect(() => {
    // Notify the parent whenever the count changes
    const total = commonCount + uncommonCount + rareCount + holoCount;
    onTotalChange(total);
  }, [commonCount, uncommonCount, rareCount, holoCount, onTotalChange]);

  const resetCounters = () => {
    setCommonCount(0);
    setUncommonCount(0);
    setRareCount(0);
    setHoloCount(0);
  };

  const handleValueChange = (inputName: string, value: number) => {
    switch (inputName) {
      case "common":
        setCommonCount(value);
        break;
      case "uncommon":
        setUncommonCount(value);
        break;
      case "rare":
        setRareCount(value);
        break;
      case "holo":
        setHoloCount(value);
        break;
      default:
        return;
    }

    onTotalChange(commonCount + uncommonCount + rareCount + holoCount);
  };

  return (
    <div className={styles.counters}>
      <div>
        <b>Common:</b>
        <InputNumber
          size="small"
          min={0}
          defaultValue={0}
          onChange={(value) => {
            if (value === null) return;

            handleValueChange("common", value);
          }}
          value={commonCount}
          keyboard={true}
        />
      </div>
      <div>
        <b>Uncommon:</b>
        <InputNumber
          min={0}
          defaultValue={0}
          onChange={(value) => {
            if (value === null) return;

            handleValueChange("uncommon", value);
          }}
          value={uncommonCount}
          keyboard={true}
        />
      </div>
      <div>
        <b>Rare:</b>
        <InputNumber
          min={0}
          defaultValue={0}
          onChange={(value) => {
            if (value === null) return;

            handleValueChange("rare", value);
          }}
          value={rareCount}
          keyboard={true}
        />
      </div>
      <div>
        <b>Holo:</b>
        <InputNumber
          min={0}
          defaultValue={0}
          onChange={(value) => {
            if (value === null) return;

            handleValueChange("holo", value);
          }}
          value={holoCount}
          keyboard={true}
        />
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
