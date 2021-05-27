import { SearchIcon } from "@heroicons/react/solid";

import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { Input } from "../../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div className="flex w-full mr-6">
      <Input placeholder={"店名・エリア・キーワード"} />
      <SecondaryButton>
        <SearchIcon className="w-14 h-5 text-white text-base" />
      </SecondaryButton>
    </div>
  );
};
