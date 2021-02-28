import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { CompletedChallenges } from "../componentes/CompletedChallenges";
import { Countdown } from "../componentes/Countdown";

import Head from "next/head";
import styles from "../styles/pages/Home.module.css";
import React from "react";
import { ChallengeBox } from "../componentes/ChallegenBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
