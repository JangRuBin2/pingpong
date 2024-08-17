"use client";
import textBox from "@/public/images/textBox.png";
import tomato from "@/public/images/tomato.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./TomatoPage.module.css";

const TomatoPage = () => {
  const [tomatoValue, setTomatoValue] = useState({
    name: "Kimato",
    age: 12,
    sex: "tomato",
    job: "goodBoy",
  });

  const [tomatoState, setTomatoState] = useState({
    name: "토마토 빌런",
    HP: 30,
    comment: "나는 토마토 악당! 널 죽인다!",
  });

  const [isShaking, setIsShaking] = useState(false);
  const router = useRouter();

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    setTomatoState((prev) => ({
      ...prev,
      HP: prev.HP - 1,
    }));
  };

  useEffect(() => {
    if (tomatoState.HP === 0) {
      setTomatoState((prev) => ({
        ...prev,
        comment: "날... 쓰러뜨리다니... 대단...하다...",
      }));
    }
  }, [tomatoState.HP]);

  const handleTomage = () => {
    setTomatoValue((prev) => ({
      ...prev,
      name: "김토마토",
      age: 13,
    }));
  };

  const backToMain = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>{tomatoState.name}</h2>
      <div className={styles.imageWrapper}>
        <Image src={textBox} alt="Text Box" width={100} height={100} />
        <p className={styles.comment}>{tomatoState.comment}</p>
      </div>
      <Image
        src={tomato}
        alt="Tomato Image"
        width={300}
        height={300}
        className={isShaking ? styles.shake : ""}
      />
      <button onClick={handleShake}>{"토마토 공격!!"}</button>
      <div style={{ height: "30px" }}>
        <button onClick={handleTomage}>{"토마토 핸들링"}</button>
        <button onClick={backToMain}>{"메인페이지로 돌아갓"}</button>
      </div>
    </div>
  );
};

export default TomatoPage;
