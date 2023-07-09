import Set from "./Set/Set";

import styles from "./Collection.module.scss";
import { useState, useEffect } from "react";
import { Select } from "antd";
import CollectionOptions from "./CollectionOptions";

export interface SetDetails {
  value: string;
  symbol?: string;
  date: string;
}

export type Sets = SetDetails[];

const wotcSets: Sets = [
  {
    value: "Base Set",
    date: "1999-01-09",
    symbol: "baseset.png",
  },
  {
    value: "Jungle",
    date: "1999-06-16",
    symbol: "jungle.png",
  },
  {
    value: "Fossil",
    date: "1999-10-10",
    symbol: "fossil.png",
  },
  {
    value: "Base Set 2",
    date: "2000-02-24",
    symbol: "baseset2.png",
  },
  {
    value: "Team Rocket",
    date: "2000-04-24",
    symbol: "teamrocket.png",
  },
  {
    value: "Gym Heroes",
    date: "2000-08-14",
    symbol: "gymheroes.png",
  },
  {
    value: "Gym Challenge",
    date: "2000-10-16",
    symbol: "gymchallenge.png",
  },
  {
    value: "Neo Genesis",
    date: "2000-12-16",
    symbol: "neogenesis.png",
  },
  {
    value: "Neo Discovery",
    date: "2001-06-01",
    symbol: "neodiscovery.png",
  },
  {
    value: "Neo Revelation",
    date: "2001-09-21",
    symbol: "neorevelation.png",
  },
  {
    value: "Neo Destiny",
    date: "2002-02-28",
    symbol: "neodestiny.png",
  },
  {
    value: "Legendary Collection",
    date: "2002-05-24",
    symbol: "legendarycollection.png",
  },
  {
    value: "Expedition Base Set",
    date: "2002-09-15",
    symbol: "expeditionbaseset.png",
  },
  {
    value: "Aquapolis",
    date: "2003-01-15",
    symbol: "aquapolis.png",
  },
  {
    value: "Skyridge",
    date: "2003-05-12",
    symbol: "skyridge.png",
  },
];

const modernSets: Sets = [
  {
    value: "EX Ruby & Sapphire",
    date: "2003-07-18",
    symbol: "exruby&sapphire.png",
  },
  {
    value: "EX Sandstorm",
    date: "2003-09-18",
    symbol: "exsandstorm.png",
  },
  {
    value: "EX Dragon",
    date: "2003-11-24",
    symbol: "exdragon.png",
  },
  {
    value: "EX Team Magma vs Team Aqua",
    date: "2004-03-15",
    symbol: "exteammagmavsteamaqua.png",
  },
  {
    value: "EX Hidden Legends",
    date: "2004-06-14",
    symbol: "exhiddenlegends.png",
  },
  {
    value: "EX FireRed & LeafGreen",
    date: "2004-08-30",
    symbol: "exfirered&leafgreen.png",
  },
  {
    value: "EX Team Rocket Returns",
    date: "2004-11-08",
    symbol: "exteamrocketreturns.png",
  },
  {
    value: "EX Deoxys",
    date: "2005-02-14",
    symbol: "exdeoxys.png",
  },
  {
    value: "EX Emerald",
    date: "2005-05-09",
    symbol: "exemerald.png",
  },
  {
    value: "EX Unseen Forces",
    date: "2005-08-22",
    symbol: "exunseenforces.png",
  },
  {
    value: "EX Delta Species",
    date: "2005-10-31",
    symbol: "exdeltaspecies.png",
  },
  {
    value: "EX Legend Maker",
    date: "2006-02-13",
    symbol: "exlegendmaker.png",
  },
  {
    value: "EX Holon Phantoms",
    date: "2006-05-03",
    symbol: "exholonphantoms.png",
  },
  {
    value: "EX Crystal Guardians",
    date: "2006-08-30",
    symbol: "excrystalguardians.png",
  },
  {
    value: "EX Dragon Frontiers",
    date: "2006-11-08",
    symbol: "exdragonfrontiers.png",
  },
  {
    value: "EX Power Keepers",
    date: "2007-02-14",
    symbol: "expowerkeepers.png",
  },
];

const setsList = wotcSets;

const x = [
  { manufacturer: "wotc", sets: wotcSets },
  { manufacturer: "nintendo", sets: modernSets },
];

interface CollectionProps {
  collectionName: string;
}
function Collection({ collectionName }: CollectionProps) {
  const [selectedSets, setSelectedSets] = useState<Sets>(setsList);

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

  return (
    <div className={styles.collection}>
      <h3>{collectionName}</h3>
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
        {selectedSets.map((set) => {
          return <Set set={set.value} />;
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
