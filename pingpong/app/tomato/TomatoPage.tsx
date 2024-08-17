"use client";
import { useRouter } from "next/navigation";

const TomatoPage = () => {
  const router = useRouter();
  const backToMain = () => {
    router.push("/");
  };
  return (
    <div>
      <h2>{"토마토에욤"}</h2>
      <button onClick={backToMain}>{"메인페이지로 돌아갓"}</button>
    </div>
  );
};

export default TomatoPage;
