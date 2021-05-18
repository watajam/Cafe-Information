export const PrimaryButton = ({ children }) => {
  return (
    <button class="bg-orange-500 hover:opacity-80 focus:outline-none shadow-2xl w-40 h-12   text-white font-bold rounded-lg">
      {children}
    </button>
  );
};
