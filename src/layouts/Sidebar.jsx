import { NavLink } from "react-router-dom";

const navItem =
  "block rounded-md px-3 py-2 text-sm hover:bg-gray-800";
const active =
  "bg-gray-800 text-white";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200">
      <div className="border-b border-gray-800 px-4 py-4 font-bold">
        MegaTech Admin
      </div>

      <nav className="p-3 space-y-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${navItem} ${isActive ? active : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${navItem} ${isActive ? active : ""}`
          }
        >
          Orders
        </NavLink>
      </nav>
    </aside>
  );
}
