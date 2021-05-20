import { Cord } from "../atoms/cord/Cord";
import Image from "next/image";

export const UserCord = ({ children }) => {
  return (
    <div>
      <h2 class="w-82 h-8  pl-2 bg-gray-350 text-white leading-8 font-bold">
        イベント情報
      </h2>
      <br />
      <Cord>
        <img
          src="/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg"
          alt={"aa"}
          class="object-cover w-full  h-34 rounded-t-lg"
        />
        <dl class="">
          <dt>カテゴリ</dt>
          <dt>環境を大切に</dt>
          <dt>会場名</dt>
          <dt>2021年4月1日 (木)~2021年5月11日 (木)</dt>
          <dt>参加費無料</dt>
        </dl>
      </Cord>
    </div>
  );
};
