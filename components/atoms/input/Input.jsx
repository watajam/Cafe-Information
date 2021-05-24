export const Input = ({ placeholder }) => {
  return (
    <div class="w-full">
      <input
        type="text"
        placeholder={placeholder}
        class=" w-full h-10 focus:outline-none 	border-solid border-2 border-oreng-500 text-xs rounded-l-lg appearance-none rounded-none"
      ></input>
    </div>
  );
};
