import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeButtonComponent, {
  HomeButton,
  HomeButton2,
  HomeButton3,
} from "./Components/buttons/homeButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <HomeButton>HomeStyledButton1</HomeButton>
      <HomeButton2>HomeStyledButton2</HomeButton2>
      <HomeButton3>HomeStyledButton3</HomeButton3>
      <Image src="/next.svg" alt="shirt" width={200} height={200} />
      <HomeButtonComponent></HomeButtonComponent>
      <Link href={"product/#rc"}>
        <h3>Go To Recommended Products Section</h3>
      </Link>
    </main>
  );
}
