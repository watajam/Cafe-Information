export const Input = ({ placeholder }) => {
  return (
    <div class="w-full  ">
      {/* rounded-r-none rounded-l-lg */}
      <input
        type="search"
        placeholder={placeholder}
        class="w-full h-10 rounded-none focus:outline-none 	border-solid border-2 border-oreng-500 text-xs "
      ></input>
    </div>
  );
};
