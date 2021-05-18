export const PrimaryButton = ({ children }) => {
  return (
    <button class="bg-yellow-500 hover:bg-yellow-400  w-40 h-12 focus:outline-none text-white font-bold rounded-full ">
      {children}
    </button>
  );
};
