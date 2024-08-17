"use client";
import tomato from "@/public/images/tomato.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TomatoPage = () => {
  const [tomatoValue, setTomatoValue] = useState({
    name: "Kimato",
    age: 12,
    sex: "tomato",
    job: "goodBoy",
  });
  const [isShaking, setIsShaking] = useState(false);
  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); // 애니메이션 종료 후 상태 리셋
  };
  const router = useRouter();
  const handleTomage = () => {
    setTomatoValue((prev) => ({ ...prev, name: "김토마토", age: 13 }));
  };
  const backToMain = () => {
    router.push("/");
  };
  useEffect(() => {
    console.log("tomatoValue : ", tomatoValue);
  }, [tomatoValue]);
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        border: "1px solid black",
        justifyContent: "space-between",
      }}
    >
      <h2>{"토마토에욤"}</h2>
      <Image
        src={tomato}
        alt="Tomato Image"
        width={300}
        height={300}
        className={isShaking ? "shake" : ""}
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
