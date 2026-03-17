// components/Sidebar.tsx

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <>
      {/* fondo oscuro cuando abre en móvil */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-20 bg-gray-900 text-white h-full w-64
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="p-4 font-bold text-xl">Dashboard</div>

        <nav className="flex flex-col p-2 gap-2">
          <a className="p-2 hover:bg-gray-700 rounded">Inicio</a>

          <a className="p-2 hover:bg-gray-700 rounded">Usuarios</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
