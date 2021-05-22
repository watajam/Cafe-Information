export const PrimaryButton = ({ children }) => {
  return (
    <button class="bg-orange-500 rounded-lg hover:opacity-80 focus:outline-none shadow-2xl ">
      {children}
    </button>
  );
};
