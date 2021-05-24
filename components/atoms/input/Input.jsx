export const Input = ({ placeholder }) => {
  return (
    <div class="w-full  appearance-none rounded-none">
      <input
        type="search"
        placeholder={placeholder}
        class="w-full h-10 appearance-none rounded-none  rounded-l-lg focus:outline-none 	border-solid border-2 border-oreng-500 text-xs "
      ></input>
    </div>
  );
};
