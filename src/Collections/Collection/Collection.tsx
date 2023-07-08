import Set from "./Sets/Set";

import styles from "./Collection.module.scss";

interface SetDetails {
  name: string;
  symbol?: string;
}

type Sets = SetDetails[];

const wotcSets: Sets = [
  { name: "Base Set" },
  {
    name: "Jungle",
    symbol:
      "https://archives.bulbagarden.net/media/upload/6/69/Jungle_Logo.png",
  },
  {
    name: "Fossil",
    symbol:
      "https://archives.bulbagarden.net/media/upload/7/7f/Fossil_Logo.png",
  },
  {
    name: "Base Set 2",
    symbol:
      "https://archives.bulbagarden.net/media/upload/2/20/Base_Set_2_Logo.png",
  },
  {
    name: "Team Rocket",
    symbol:
      "https://archives.bulbagarden.net/media/upload/5/5d/Team_Rocket_Logo.png",
  },
  {
    name: "Gym Heroes",
    symbol:
      "https://archives.bulbagarden.net/media/upload/1/1b/Gym_Heroes_Logo.png",
  },
  {
    name: "Gym Challenge",
    symbol:
      "https://archives.bulbagarden.net/media/upload/e/e0/Gym_Challenge_Logo.png",
  },
  {
    name: "Neo Genesis",
    symbol:
      "https://archives.bulbagarden.net/media/upload/5/55/Neo_Genesis_Logo_EN.png",
  },
  {
    name: "Neo Discovery",
    symbol:
      "https://archives.bulbagarden.net/media/upload/9/98/Neo_Discovery_Logo_EN.png",
  },
  {
    name: "Neo Revelation",
    symbol:
      "https://archives.bulbagarden.net/media/upload/4/49/Neo_Revelation_Logo_EN.png",
  },
  {
    name: "Neo Destiny",
    symbol:
      "https://archives.bulbagarden.net/media/upload/1/18/Neo_Destiny_Logo_EN.png",
  },
  {
    name: "Legendary Collection",
    symbol:
      "https://archives.bulbagarden.net/media/upload/8/81/Legendary_Collection_Logo.png",
  },
  {
    name: "Expedition Base Set",
    symbol: "https://archives.bulbagarden.net/media/upload/e/ed/E1_Logo_EN.png",
  },
  {
    name: "Aquapolis",
    symbol: "https://archives.bulbagarden.net/media/upload/0/0d/E2_Logo_EN.png",
  },
  {
    name: "Skyridge",
    symbol: "https://archives.bulbagarden.net/media/upload/b/b8/E3_Logo_EN.png",
  },
  {
    name: "Southern Islands",
    symbol:
      "https://archives.bulbagarden.net/media/upload/c/c4/SouthernIslandsLogo.png",
  },
  {
    name: "Wizards Black Star Promos",
    symbol:
      "https://archives.bulbagarden.net/media/upload/5/58/SetSymbolPromo.png",
  },
  {
    name: "Best of Game",
    symbol:
      "https://archives.bulbagarden.net/media/upload/9/9d/SetSymbolBest.png",
  },
];

interface CollectionProps {
  collectionName: string;
}

function Collection({ collectionName }: CollectionProps) {
  return (
    <>
      <h3>{collectionName}</h3>
      <div className={styles.sets}>
        {wotcSets.map((set) => {
          return <Set set={set.name} imageUrl={set.symbol} />;
        })}
      </div>
    </>
  );
}

export default Collection;
