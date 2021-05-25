export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-orange-500 rounded-r-lg  hover:opacity-80 focus:outline-none shadow-2xl  ">
      {children}
    </button>
  );
};
