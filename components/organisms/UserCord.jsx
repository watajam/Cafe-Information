import { Cord } from "../atoms/cord/Cord";

export const UserCord = ({ children }) => {
  return (
    <div>
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
