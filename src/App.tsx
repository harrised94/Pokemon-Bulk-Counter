import ashImage from "./assets/ash.png";
import Collections from "./Collections/Collections";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.nav}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ashImage} className="logo" alt="Ash from Pokemon" />
        </a>
        <h2>Pokemon Bulk Counter</h2>
      </div>
      <Collections />
    </>
  );
}

export default App;
