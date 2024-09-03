"use client";
import textBox from "@/public/images/textBox.png";
import tomatoImg from "@/public/images/tomato.png";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Villain, villans } from "../tomatos/tomatos";
import styles from "./TomatoPage.module.css";

const TomatoPage = () => {
  const router = useRouter();
  // 토마토 커스텀 기능. 일단 보류
  // const [tomatoValue, setTomatoValue] = useState({
  //   name: "Kimato",
  //   age: 12,
  //   sex: "tomato",
  //   job: "goodBoy",
  // });
  // const handleTomage = () => {
  //   setTomatoValue((prev) => ({
  //     ...prev,
  //     name: "김토마토",
  //     age: 13,
  //   }));
  // };

  // 보스 몬스터 상태관리
  const [villanState, setVillanState] = useState<Villain[]>(villans);
  // 스테이지 상태관리
  const [stageStatus, setStageStatus] = useState({
    stage: 0,
    status: false,
  });
  // 토마토가 쳐맞을 때 css 효과
  const [isShaking, setIsShaking] = useState(false);
  // 사용자 스탯
  const [userInfo, setUserInfo] = useState({
    level: 1,
    damage: 1,
  });
  const nowStage = stageStatus.stage;

  const attackVillan = (damage: number) => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    setVillanState((prevVillains) => {
      const currentVillain = prevVillains[nowStage];

      const updatedVillain = {
        ...currentVillain,
        HP: currentVillain.HP != 0 ? currentVillain.HP - damage : damage,
      };
      const newVillains = [...prevVillains];
      newVillains[stageStatus.stage] = updatedVillain;

      return newVillains;
    });
  };

  // 토마토 체력 변화 생길 때 스테이지 관리
  useEffect(() => {
    if (villans[nowStage].HP === 0) {
      setStageStatus((prevStage) => ({
        ...prevStage,
        stage: prevStage.stage++,
        status: true,
      }));
    }
  }, [villanState]);

  const backToMain = () => {
    router.push("/");
  };
  // 스테이지 핸들링
  const handleStage = () => {
    setStageStatus((prev) => ({ ...prev, stage: prev.stage++, ready: true }));
  };
  return (
    <div className={styles.container}>
      <h2>{villanState[nowStage].name}</h2>
      <div className={styles.imageWrapper}>
        <Image src={textBox} alt="Text Box" width={100} height={100} />
        {villanState[nowStage]["HP"] === 0 ? (
          <p className={styles.comment}>{villanState[nowStage].lastComment}</p>
        ) : (
          <p className={styles.comment}>{villanState[nowStage].comment}</p>
        )}
      </div>
      <Image
        src={villanState[nowStage].img || tomatoImg}
        alt="Tomato Image"
        width={300}
        height={300}
        className={isShaking ? styles.shake : ""}
      />
      {stageStatus.status ? (
        <button onClick={handleStage}>{"다음 토마토로 이동"}</button>
      ) : (
        <button onClick={() => attackVillan(userInfo.damage)}>
          {"토마토 공격!!"}
        </button>
      )}

      <div style={{ height: "30px" }}>
        {/* <button onClick={handleTomage}>{"토마토 꾸미기"}</button> */}
        <button onClick={backToMain}>{"메인페이지로"}</button>
      </div>
    </div>
  );
};

export default TomatoPage;
