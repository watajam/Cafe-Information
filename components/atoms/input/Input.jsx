export const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className=" w-full h-10 pl-1 text-base focus:outline-none 	border-solid border-2 border-oreng-500  rounded-r-lg appearance-none rounded-none"
      onChange={onChange}
      value={value}
    ></input>
  );
};
