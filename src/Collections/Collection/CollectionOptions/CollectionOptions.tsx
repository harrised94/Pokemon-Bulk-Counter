import { Select } from "antd";
import { SetDetails } from "../Collection";

import styles from "./CollectionOptions.module.scss";

interface FilterOption {
  label: string;
  options: SetDetails[];
}

interface CollectionProps {
  onSortSets: (value: string) => void;
  onFilterSets: (value: string[]) => void;
  filterOptions: FilterOption[];
}

function CollectionOptions({
  onSortSets,
  onFilterSets,
  filterOptions,
}: CollectionProps) {
  return (
    <div className={styles.selectOptions}>
      <Select
        style={{
          minWidth: 200,
          maxWidth: "66%",
          maxHeight: "32px",
          textAlign: "left",
        }}
        mode="multiple"
        showSearch
        optionFilterProp="children"
        onChange={onFilterSets}
        options={filterOptions}
        placeholder="Filter Sets"
      />
      <Select
        style={{ width: 200, textAlign: "left" }}
        showSearch
        onChange={onSortSets}
        options={[
          { value: "Value Asc", label: "Name (A-Z)" },
          { value: "Value Desc", label: "Name (Z-A)" },
          { value: "Date Asc", label: "Date (Old-New)" },
          { value: "Date Desc", label: "Date (New-Old)" },
        ]}
        placeholder="Sort Sets"
      />
    </div>
  );
}

export default CollectionOptions;
