import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import styles from "../styles/Home.module.css";

// import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Sidebar />
        <Body />
      </main>
    </div>
  );
}
