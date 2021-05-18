export const PrimaryButton = ({ children }) => {
  return (
    <button class="bg-yellow-500 hover:opacity-80 focus:outline-none w-36 h-12  text-white font-bold rounded-lg  ">
      {children}
    </button>
  );
};
