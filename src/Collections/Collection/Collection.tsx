import Set from "./Set/Set";

import styles from "./Collection.module.scss";
import { useState } from "react";

import CollectionOptions from "./CollectionOptions/CollectionOptions";

export interface SetDetails {
  value: string;
  date: string;
}

export type Sets = SetDetails[];

const wotcSets: Sets = [
  {
    value: "Base Set",
    date: "1999-01-09",
  },
  {
    value: "Jungle",
    date: "1999-06-16",
  },
  {
    value: "Fossil",
    date: "1999-10-10",
  },
  {
    value: "Base Set 2",
    date: "2000-02-24",
  },
  {
    value: "Team Rocket",
    date: "2000-04-24",
  },
  {
    value: "Gym Heroes",
    date: "2000-08-14",
  },
  {
    value: "Gym Challenge",
    date: "2000-10-16",
  },
  {
    value: "Neo Genesis",
    date: "2000-12-16",
  },
  {
    value: "Neo Discovery",
    date: "2001-06-01",
  },
  {
    value: "Neo Revelation",
    date: "2001-09-21",
  },
  {
    value: "Neo Destiny",
    date: "2002-02-28",
  },
  {
    value: "Legendary Collection",
    date: "2002-05-24",
  },
  {
    value: "Expedition Base Set",
    date: "2002-09-15",
  },
  {
    value: "Aquapolis",
    date: "2003-01-15",
  },
  {
    value: "Skyridge",
    date: "2003-05-12",
  },
  {
    value: "Southern Islands",
    date: "2001-07-31",
  },
  {
    value: "Best Of Game",
    date: "2002-12-01",
  },
  {
    value: "Wizards Black Star Promos",
    date: "1999-07-01",
  },
];

// const modernSets: Sets = [
//   {
//     value: "EX Ruby & Sapphire",
//     date: "2003-07-18",
//
//   },
//   {
//     value: "EX Sandstorm",
//     date: "2003-09-18",
//
//   },
//   {
//     value: "EX Dragon",
//     date: "2003-11-24",
//
//   },
//   {
//     value: "EX Team Magma vs Team Aqua",
//     date: "2004-03-15",
//
//   },
//   {
//     value: "EX Hidden Legends",
//     date: "2004-06-14",
//
//   },
//   {
//     value: "EX FireRed & LeafGreen",
//     date: "2004-08-30",
//
//   },
//   {
//     value: "EX Team Rocket Returns",
//     date: "2004-11-08",
//
//   },
//   {
//     value: "EX Deoxys",
//     date: "2005-02-14",
//
//   },
//   {
//     value: "EX Emerald",
//     date: "2005-05-09",
//
//   },
//   {
//     value: "EX Unseen Forces",
//     date: "2005-08-22",
//
//   },
//   {
//     value: "EX Delta Species",
//     date: "2005-10-31",
//
//   },
//   {
//     value: "EX Legend Maker",
//     date: "2006-02-13",
//
//   },
//   {
//     value: "EX Holon Phantoms",
//     date: "2006-05-03",
//
//   },
//   {
//     value: "EX Crystal Guardians",
//     date: "2006-08-30",
//
//   },
//   {
//     value: "EX Dragon Frontiers",
//     date: "2006-11-08",
//
//   },
//   {
//     value: "EX Power Keepers",
//     date: "2007-02-14",
//
//   },
// ];

const setsList = wotcSets;

// const fullSetList = [
//   { manufacturer: "wotc", sets: wotcSets },
//   { manufacturer: "nintendo", sets: modernSets },
// ];

interface CollectionProps {
  collectionName: string;
}
function Collection({ collectionName }: CollectionProps) {
  const [selectedSets, setSelectedSets] = useState<Sets>(setsList);
  const [collectionTotal, setCollectionTotal] = useState(0);

  const handleSortSets = (value: string) => {
    let sortedSets;

    switch (value) {
      case "Value Asc":
        sortedSets = [...selectedSets].sort(sortByValueAsc);
        break;
      case "Value Desc":
        sortedSets = [...selectedSets].sort(sortByValueDesc);
        break;
      case "Date Asc":
        sortedSets = [...selectedSets].sort(sortByDateAsc);
        break;
      case "Date Desc":
        sortedSets = [...selectedSets].sort(sortByDateDesc);
        break;
      default:
        return;
    }

    setSelectedSets(sortedSets);
  };

  const handleFilterSets = (value: string[]) => {
    value.length > 0
      ? setSelectedSets(setsList.filter((set) => value.includes(set.value)))
      : setSelectedSets(setsList);
  };

  const handleCollectionTotalChange = (change: number) => {
    setCollectionTotal((prevTotal) => prevTotal + change);
  };

  return (
    <div className={styles.collection}>
      <div className={styles.collectionDetails}>
        <h3>{collectionName}</h3>
        <p>Total Cards: {collectionTotal}</p>
      </div>
      <div className={styles.options}>
        <CollectionOptions
          filterOptions={[
            {
              label: "Vintage",
              options: wotcSets,
            },
            // {
            //   label: "Modern",
            //   options: modernSets,
            // },
          ]}
          onSortSets={handleSortSets}
          onFilterSets={handleFilterSets}
        />
      </div>
      <div className={styles.sets}>
        {selectedSets.map((set, index) => {
          return (
            <Set
              key={index}
              onSetTotalChange={handleCollectionTotalChange}
              set={set.value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Collection;

//Helper functions
const sortByValueAsc = (a: SetDetails, b: SetDetails) =>
  a.value.localeCompare(b.value);
const sortByValueDesc = (a: SetDetails, b: SetDetails) =>
  b.value.localeCompare(a.value);
const sortByDateAsc = (a: SetDetails, b: SetDetails) =>
  a.date.localeCompare(b.date);
const sortByDateDesc = (a: SetDetails, b: SetDetails) =>
  b.date.localeCompare(a.date);
