import Head from "next/head";
import { LocationMarkerIcon } from "@heroicons/react/solid";

import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SearchInput } from "../components/molecules/button/SearchInput";
import { UserCord } from "../components/organisms/UserCord";

export default function Home() {
  return (
    <>
      <Head>
        <title>Event APP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="p-5">
        <div class="flex">
          <SearchInput />
          <PrimaryButton>
            <LocationMarkerIcon class="w-14 h-5  text-white  " />
          </PrimaryButton>
        </div>
        <br />
        <div>
          <h2 class="w-full h-8  pl-2 bg-gray-350 text-white leading-8 font-bold">
            観光情報
          </h2>
          <br />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
          <UserCord />
        </div>
      </div>
    </>
  );
}
