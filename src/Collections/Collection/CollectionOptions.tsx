import Set from "./Set/Set";

import styles from "./Collection.module.scss";
import { useState, useEffect } from "react";
import { Select } from "antd";
import { SetDetails, Sets } from "./Collection";

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
  console.log(filterOptions);

  return (
    <>
      <Select
        style={{ width: 200 }}
        mode="multiple"
        showSearch
        optionFilterProp="children"
        onChange={onFilterSets}
        options={filterOptions}
        placeholder="Filter Sets"
      />
      <Select
        style={{ width: 200 }}
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
    </>
  );
}

export default CollectionOptions;
