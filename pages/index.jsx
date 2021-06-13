import Head from "next/head";
import { LocationMarkerIcon } from "@heroicons/react/solid";

import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SearchInput } from "../components/molecules/button/SearchInput";
import { InformationCord } from "../components/organisms/InformationCord";
import { useCallback, useState } from "react";


export default function Home(props) {
  const [keyword, setKeyword] = useState("");


  const onSearchSubmit = useCallback(
    (text) => {
      setKeyword(text);
    },
    [keyword]
  );

  return (
    <>
      <Head>
        <title>Information</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <div className="p-5">
        <div className="flex mb-6">
          <SearchInput onSearchSubmit={onSearchSubmit} />

          <div className="ml-6">
            <PrimaryButton>
              <LocationMarkerIcon className="w-14 h-5  text-white " />
            </PrimaryButton>
          </div>
        </div>

        <div>
          <h2 className="w-full h-8 mb-6 pl-2 bg-gray-350 text-white leading-8 font-bold">
            カフェ・スイーツ情報
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {props.data.map((user) => (
              <InformationCord key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const keywords = "静岡市";
  const utf8Keyword = encodeURIComponent(keywords);
  const res = await fetch(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&keyword=${utf8Keyword}&range=5&genre=G014&count=20&format=json`
  );

  const datasLists = await res.json();
  const data = datasLists.results.shop;

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
}
