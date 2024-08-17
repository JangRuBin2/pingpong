"use client";
import textBox from "@/public/images/textBox.png";
import tomatoImg from "@/public/images/tomato.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { tomato, Tomato } from "../tomatos/tomatos";
import styles from "./TomatoPage.module.css";

const TomatoPage = () => {
  const router = useRouter();
  // 토마토 커스텀 기능. 일단 보류
  const [tomatoValue, setTomatoValue] = useState({
    name: "Kimato",
    age: 12,
    sex: "tomato",
    job: "goodBoy",
  });
  const handleTomage = () => {
    setTomatoValue((prev) => ({
      ...prev,
      name: "김토마토",
      age: 13,
    }));
  };

  // 토마토 상태관리
  const [tomatoState, setTomatoState] = useState<Tomato>(tomato);
  // 스테이지 상태관리
  const [stageStatus, setStageStatus] = useState({
    stage: 1,
    status: false,
  });
  // 토마토 쳐맞을 때 css 효과
  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    setTomatoState((prev) => ({
      ...prev,
      HP: prev.HP - 1,
    }));
  };

  // 토마토 체력 변화 생길 때 스테이지 관리
  useEffect(() => {
    if (tomatoState.HP === 0) {
      // 상태 추가할 수도 있어서 ...prev
      setStageStatus((prev) => ({
        ...prev,
        stage: prev.stage++,
        status: true,
      }));
    }
  }, [tomatoState.HP]);

  const backToMain = () => {
    router.push("/");
  };
  // 스테이지 핸들링
  const handleStage = () => {
    setStageStatus((prev) => ({ ...prev, stage: prev.stage++ }));
  };
  return (
    <div className={styles.container}>
      <h2>{tomatoState.name}</h2>
      <div className={styles.imageWrapper}>
        <Image src={textBox} alt="Text Box" width={100} height={100} />
        {/* 토마토 체력에 따라서 코멘트 변경 */}
        {tomatoState.HP === 0 ? (
          <p className={styles.comment}>{tomatoState.lastComment}</p>
        ) : (
          <p className={styles.comment}>{tomatoState.comment}</p>
        )}
      </div>
      <Image
        src={tomatoImg}
        alt="Tomato Image"
        width={300}
        height={300}
        className={isShaking ? styles.shake : ""}
      />
      {stageStatus.status ? (
        <button onClick={handleStage}>{"다음 토마토로 이동"}</button>
      ) : (
        <button onClick={handleShake}>{"토마토 공격!!"}</button>
      )}

      <div style={{ height: "30px" }}>
        <button onClick={handleTomage}>{"토마토 꾸미기"}</button>
        <button onClick={backToMain}>{"메인페이지로"}</button>
      </div>
    </div>
  );
};

export default TomatoPage;
