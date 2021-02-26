import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { CompletedChanllenger } from "../componentes/CompletedChallenger";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChanllenger />
        </div>
        <div></div>
      </section>
    </div>
  );
}
