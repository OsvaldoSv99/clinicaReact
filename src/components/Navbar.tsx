interface NavbarProps {
  toggleTheme: () => void;
  dark: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ toggleTheme, dark, setOpen }: NavbarProps) => {
  return (
    <header
      className={
        "shadow p-4 flex justify-between items-center transition-colors duration-300 " +
        (dark ? "bg-gray-900 text-white" : "bg-white text-black")
      }
    >
      <button onClick={() => setOpen(true)} className="md:hidden">
        ☰
      </button>

      <h1 className="font-semibold">Dashboard</h1>

      <button
        onClick={toggleTheme}
        className={
          "px-3 py-1 rounded " + (dark ? "bg-gray-700" : "bg-gray-200")
        }
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </header>
  );
};

export default Navbar;
