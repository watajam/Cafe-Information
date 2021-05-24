export const Input = ({ placeholder }) => {
  return (
    <div class="w-full  appearance-none rounded-none">
      <input
        type="search"
        placeholder={placeholder}
        class="w-full h-10   rounded-l-lg focus:outline-none 	border-solid border-2 border-oreng-500 text-xs appearance-none rounded-none"
      ></input>
    </div>
  );
};
