import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import axiosJsonpAdapter from "axios-jsonp";

import { PrimaryButton } from "../components/atoms/button/PrimaryButton";
import { SearchInput } from "../components/molecules/button/SearchInput";
import { InformationCord } from "../components/organisms/InformationCord";
import { useCallback, useState } from "react";

const fetcher = (url) =>
  axios
    .get(url, {
      adapter: axiosJsonpAdapter,
    })
    .then((res) => res.data);

export default function Search(props) {
  const [keyword, setKeyword] = useState("");

  const { data, error } = useSWR(
    `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.API_KEY}&keyword=${keyword}&range=5&genre=G014&count=10&format=jsonp`,
    fetcher
  );

  const onSearchSubmit = useCallback(
    (text) => {
      setKeyword(text);
    },
    [keyword]
  );

  if (error) return <div>failed to load</div>;
  //ロード中
  if (!data) return <div>loading...</div>;

  return (
    <>
      {console.log(data)}
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
            検索結果
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.results.shop.map((user) => (
              <InformationCord key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
