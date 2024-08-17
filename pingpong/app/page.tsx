// import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>{"hello world!"}</h2>
      <Link href="/tomato">{"Move to '/tomato'"}</Link>
    </div>
  );
}
