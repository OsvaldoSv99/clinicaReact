interface SidebarProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  dark: boolean
}

const Sidebar = ({ open, setOpen, dark }: SidebarProps) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-20 h-full w-64
        ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >

        <div className="p-4 font-bold text-xl">
          Dashboard
        </div>

        <nav className="flex flex-col gap-2 p-2">

          <a className={`p-2 rounded ${dark ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
            Inicio
          </a>

          <a className={`p-2 rounded ${dark ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
            Usuarios
          </a>

        </nav>

      </aside>
    </>
  )
}

export default Sidebar