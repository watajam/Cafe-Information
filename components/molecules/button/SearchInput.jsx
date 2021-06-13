import { useCallback, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter} from "next/router"

import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { Input } from "../../atoms/input/Input";

export const SearchInput = ({ onSearchSubmit }) => {
  const [text, setText] = useState("");
  const router = useRouter()

  const submitFrom = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("キーワードを入力してください");
      return;
    }
    onSearchSubmit(encodeURIComponent(text));
    router.push("/search");
  };

  const onChange = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  return (
    <form className="flex w-full" onSubmit={submitFrom}>
      <SecondaryButton>
        <SearchIcon className="w-14 h-5 text-white text-base" />
      </SecondaryButton>

      <Input
        placeholder="店名・エリア・キーワード"
        onChange={onChange}
        value={text}
      />
    </form>
  );
};
