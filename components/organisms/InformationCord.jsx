import { HomeIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/solid";

import { Cord } from "../atoms/cord/Cord";

export const InformationCord = ({user}) => {
  return (
    <Cord>
      <img
        src={user.photo.pc.l}
        alt="img"
        className="object-cover w-full  h-34 rounded-t-lg"
      />

      <div className="p-2">
        <h1 className="text-lg font-bold  text-orange-500  pb-2">
          {user.name}
        </h1>

        <dl>
          <dt>
            <HomeIcon className="w-5 h-5 text-gray-150 " />
          </dt>

          <dd>{user.address}</dd>

          <dt>
            <LocationMarkerIcon className="w-5 h-5 text-gray-150 " />
          </dt>
          <dd>{user.mobile_access}</dd>
          <dt>
            <ClockIcon className="w-5 h-5 text-gray-150" />
          </dt>
          <dd className="pb-0">OPEN</dd>
          <dd>{user.open}</dd>
        </dl>
      </div>
    </Cord>
  );
};
