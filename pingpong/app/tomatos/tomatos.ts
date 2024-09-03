import carrotImg from "@/public/images/carrot.png";
import tomatoImg from "@/public/images/tomato.png";
import { StaticImageData } from "next/image";
export type Villain = {
  name: string;
  HP: number;
  comment: string;
  lastComment: string;
  img: StaticImageData | undefined;
  stage: number;
};
export const villans: Villain[] = [
  {
    name: "토마토 빌런",
    HP: 30,
    comment: "나는 토마토 악당! 널 죽인다!",
    lastComment: "대단...하군..",
    img: tomatoImg,
    stage: 1,
  },
  {
    name: "당근백작",
    HP: 60,
    comment: "of course를 직역하면... 당근이지... 케켁",
    lastComment: "꾸에에에엥",
    img: carrotImg,
    stage: 2,
  },
];
