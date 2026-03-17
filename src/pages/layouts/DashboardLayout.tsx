// layout/DashboardLayout.tsx

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex flex-col flex-1">
        <Navbar setOpen={setOpen} />

        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
