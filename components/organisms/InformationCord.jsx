import { HomeIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/solid";

import { Cord } from "../atoms/cord/Cord";

export const InformationCord = () => {
  return (
    <Cord>
      <img
        src="/gema-saputera-7Gm1Jwt1uYA-unsplash.jpg"
        alt={"aa"}
        className="object-cover w-full  h-34 rounded-t-lg"
      />
      <div className="p-2">
        <h1 className="text-2xl font-bold  text-orange-500  pb-2">STARBUCKS</h1>

        <dl>
          <dt>
            <HomeIcon className="w-5 h-6 text-gray-150 " />
          </dt>
          <dd>静岡県沼津市???番地</dd>
          <dt>
            <LocationMarkerIcon className="w-5 h-6 text-gray-150 " />
          </dt>
          <dd>沼津駅から徒歩?分</dd>
          <dt>
            <ClockIcon className="w-5 h-6 text-gray-150" />
          </dt>
          <dd className="pb-0">OPEN</dd>
          <dd>
            月～日、祝日、祝前日: 17:00～翌0:00 （料理L.O. 23:0 ドリンクL.O.
            23:30
          </dd>
        </dl>
      </div>
    </Cord>
  );
};
