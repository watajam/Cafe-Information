export const Input = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        class="w-54 h-10  rounded-l-lg focus:outline-none 	border-solid border-2 border-light-blue-500  text-base"
      ></input>
    </div>
  );
};
