import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { useLocation, Link } from "react-router-dom";
import {
  Bars3Icon,
  BuildingStorefrontIcon,
  UsersIcon,
  HomeIcon,
  SquaresPlusIcon,
  ArrowRightOnRectangleIcon,
  ChartBarSquareIcon,
  ShoppingBagIcon,
  TableCellsIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

import { useAuth } from "../context/authContext";

const Sidebar = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <div
      className={`w-full min-h-screen z-40 md:flex text-xl bg-slate-200/20 backdrop-blur-lg py-3 px-2 md:min-h-screen border-r border-r-slate-200 ${""} ${
        user == null ? "hidden" : ""
      }  ${""} ${pathname == "/signin" ? "hidden" : ""}`}
    >
      <div className='flex flex-col md:relative h-full md:min-h-screen'>
        <h1 className='text-center text-3xl font-bold'>Shop Admin</h1>
        <Link to='/' className='flex flex-col gap-3 mt-10'>
          <h1>Main</h1>
          <div className='flex flex-row items-center gap-3'>
            <HomeIcon className='w-[30px] h-auto text-sky-500' />
            <span>Home</span>
          </div>
        </Link>
        <div className='mt-10 flex flex-col gap-3'>
          <h1>Store</h1>
          <Link to='/products' className='flex flex-row items-center gap-3'>
            <TableCellsIcon className='w-[30px] h-auto text-sky-500' />
            <span>Products</span>
          </Link>
          <Link to='/users' className='flex flex-row items-center gap-3'>
            <UsersIcon className='w-[30px] h-auto text-sky-500' />
            <span>Customers</span>
          </Link>
          <Link to='/addproduct' className='flex flex-row items-center gap-3'>
            <SquaresPlusIcon className='w-[30px] h-auto text-sky-500' />
            <span>Add product</span>
          </Link>
        </div>
        <div className='mt-10 flex flex-col gap-3'>
          <h1>Reports</h1>
          <Link to='/feedbacks' className='flex flex-row items-center gap-3'>
            <ChatBubbleLeftEllipsisIcon className='w-[30px] h-auto text-sky-500' />
            <span>Feedbacks</span>
          </Link>
          <Link to='/orders' className='flex flex-row items-center gap-3'>
            <ShoppingBagIcon className='w-[30px] h-auto text-sky-500' />
            <span>Orders</span>
          </Link>
        </div>
        <button
          type='button'
          className='absolute bottom-10 flex flex-row items-center gap-3'
        >
          <ArrowRightOnRectangleIcon className='w-[30px] h-auto text-sky-500' />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
