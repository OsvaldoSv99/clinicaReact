// layout/DashboardLayout.tsx

import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
import { useTheme } from "../../hooks/Theme"

const DashboardLayout = () => {

  const [open, setOpen] = useState(false)
  const { dark, setDark } = useTheme()

  return (
    <div
      className={
        "flex h-screen transition-colors duration-300 " +
        (dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black")
      }
    >

      <Sidebar open={open} setOpen={setOpen} dark={dark} />

      <div className="flex flex-col flex-1">

        <Navbar
          setOpen={setOpen}
          dark={dark}
          toggleTheme={() => setDark(!dark)}
        />

        <main className="p-6">
          <Outlet context={{ dark }} />
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout