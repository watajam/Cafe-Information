export const PrimaryButton = ({ children }) => {
  return (
    <button class="w-14 h-10 bg-orange-500 rounded-lg hover:opacity-80 focus:outline-none shadow-2xl text-white font-bold ">
      {children}
    </button>
  );
};
