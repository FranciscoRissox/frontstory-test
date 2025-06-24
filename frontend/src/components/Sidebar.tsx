import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 space-y-2">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700'
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/campaigns"
        className={({ isActive }) =>
          isActive ? 'font-bold text-blue-600' : 'text-gray-700'
        }
      >
        Campaigns
      </NavLink>
    </aside>
  );
};

export default Sidebar;