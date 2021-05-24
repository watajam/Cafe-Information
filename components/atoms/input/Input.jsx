export const Input = ({ placeholder }) => {
  return (
    <div class="w-full">
      <input
        type="search"
        placeholder={placeholder}
        class=" w-full h-10 focus:outline-none 	border-solid border-2 border-oreng-500 te rounded-l-lg appearance-none rounded-none text-sm  text-xs::placeholder"
      ></input>
    </div>
  );
};
