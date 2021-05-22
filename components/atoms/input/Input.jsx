export const Input = ({ placeholder }) => {
  return (
    <div class="w-full">
      <input
        type="text"
        placeholder={placeholder}
        class="w-full h-10   rounded-l-lg focus:outline-none 	border-solid border-2 border-oreng-500 text-sm appearance-none"
      ></input>
    </div>
  );
};
