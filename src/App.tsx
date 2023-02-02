// Elements
import Layout from "./components/Layout";
import Sidebar from "./components/sidebar";
// Utils
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { useLocation, Link } from "react-router-dom";
import {
  Bars3Icon,
  UsersIcon,
  HomeIcon,
  SquaresPlusIcon,
  ArrowRightOnRectangleIcon,
  ShoppingBagIcon,
  TableCellsIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

function App() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className='grid grid-cols-12 gap-x-5 max-w-[1300px] mx-auto'>
      <div className='block small:hidden'>
        <Bars3Icon
          className='w-[40px] absolute right-3 z-50'
          onClick={() => setOpen(!open)}
        />
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-0 scale-95'
          leaveTo='transform opacity-0 scale-95'
          show={open}
        >
          <div
            className={`absolute w-full md:w-min min-h-screen z-40 md:flex text-xl bg-slate-200/20 backdrop-blur-lg py-3 px-2 md:fixed md:left-0 md:min-h-screen md:min-w-[250px] md:max-w-[500px] border-r border-r-slate-200 ${""}  ${""} ${
              pathname == "/signin" ? "hidden" : ""
            }`}
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
                <Link
                  to='/products'
                  className='flex flex-row items-center gap-3'
                  onClick={() => setOpen(false)}
                >
                  <TableCellsIcon className='w-[30px] h-auto text-sky-500' />
                  <span>Products</span>
                </Link>
                <Link
                  to='/users'
                  className='flex flex-row items-center gap-3'
                  onClick={() => setOpen(false)}
                >
                  <UsersIcon className='w-[30px] h-auto text-sky-500' />
                  <span>Customers</span>
                </Link>
                <Link
                  to='/addproduct'
                  className='flex flex-row items-center gap-3'
                  onClick={() => setOpen(false)}
                >
                  <SquaresPlusIcon className='w-[30px] h-auto text-sky-500' />
                  <span>Add product</span>
                </Link>
              </div>
              <div className='mt-10 flex flex-col gap-3'>
                <h1>Reports</h1>
                <Link
                  to='/feedbacks'
                  className='flex flex-row items-center gap-3'
                  onClick={() => setOpen(false)}
                >
                  <ChatBubbleLeftEllipsisIcon className='w-[30px] h-auto text-sky-500' />
                  <span>Feedbacks</span>
                </Link>
                <Link
                  to='/orders'
                  className='flex flex-row items-center gap-3'
                  onClick={() => setOpen(false)}
                >
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
        </Transition>
      </div>

      <div className='fixed left-0 w-full md:w-fit hidden small:block overflow-y-clip col-start-1'>
        <Sidebar />
      </div>
      <div
        className={`max-w-[1200px] mx-auto col-span-full small:col-start-3 md:col-end-13 w-full min-h-screen`}
      >
        <Layout />
      </div>
    </div>
  );
}

export default App;
