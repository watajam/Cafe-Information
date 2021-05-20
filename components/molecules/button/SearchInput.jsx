import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { Input } from "../../atoms/input/Input"

export const SearchInput = () => {
  return (
    <div class="flex">
      <Input placeholder={"都道府県を入力してください"}  />
      <SecondaryButton>Q</SecondaryButton>
    </div>
  );
}
