import styles from "@/styles/page.module.css";
import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Typography variant="h1" className={styles.welcome}>
          Welcome on Egg Tasks
        </Typography>
      </div>
    </main>
  );
}
