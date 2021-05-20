import Head from "next/head";
import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SecondaryButton } from "../components/atoms/button/SecondaryButton";
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
        <div class="flex justify-between">
          <SearchInput />
          <PrimaryButton >検索</PrimaryButton>
        </div>
        <br />
        <div>
          <UserCord />
        </div>
      </div>
    </>
  );
}
