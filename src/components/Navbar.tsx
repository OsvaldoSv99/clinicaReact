// components/Navbar.tsx

interface NavbarProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setOpen }: NavbarProps) => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      {/* botón solo visible en móvil */}
      <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
        ☰
      </button>

      <h1 className="font-semibold">Panel Admin</h1>

      <div>Usuario</div>
    </header>
  );
};

export default Navbar;
