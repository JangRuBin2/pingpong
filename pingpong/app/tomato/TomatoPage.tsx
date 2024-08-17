"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TomatoPage = () => {
  const [tomatoValue, setTomatoValue] = useState({
    name: "Kimato",
    age: 12,
    sex: "tomato",
    job: "goodBoy",
  });
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
        width: "500px",
        height: "400px",
        border: "1px solid black",
        justifyContent: "space-between",
      }}
    >
      <h2>{"토마토에욤"}</h2>
      <div style={{ height: "30px" }}>
        <button onClick={handleTomage}>{"토마토 핸들링"}</button>
        <button onClick={backToMain}>{"메인페이지로 돌아갓"}</button>
      </div>
    </div>
  );
};

export default TomatoPage;
