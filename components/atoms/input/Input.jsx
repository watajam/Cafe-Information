export const Input = ({ placeholder }) => {
  return (
    <div class="w-full appearance-none rounded-none ">
      {/*  rounded-l-lg */}
      <input
        type="search"
        placeholder={placeholder}
        class="rounded-l-lg appearance-none rounded-none w-full h-10 focus:outline-none 	border-solid border-2 border-oreng-500 text-xs "
      ></input>
    </div>
  );
};
