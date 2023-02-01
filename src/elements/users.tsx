import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Users = () => {
  return (
    <div className='pt-3'>
      <h1 className='text-4xl text-center'>Customers</h1>
      <div className='inline-flex w-full items-center justify-center md:justify-end my-3 md:pr-10 '>
        <div className='border-2 flex flex-row items-center justify-between'>
          <input type='text' className='outline-none border-none' />
          <button className='px-3'>
            <MagnifyingGlassIcon className='w-[20px] h-auto text-center' />
          </button>
        </div>
      </div>
      <table className='w-full  text-xs md:text-sm gap-y-2 px-2'>
        <thead className='border-2 px-2 py-3 w-full bg-blue-500 text-white'>
          <tr className='grid grid-cols-10 py-3 place-items-start px-2'>
            <th className='col-span-2'>Name</th>
            <th className='col-span-2'>Joined Date</th>
            <th className='col-span-2'>Amount Spent</th>
            <th className='col-span-2'>Order times</th>
            <th className='col-span-2'>City</th>
          </tr>
        </thead>
        <tbody className='border-3'>
          <tr className='grid grid-cols-10 w-full mb-2 py-3 place-items-start px-2'>
            <td className='col-span-2'>Zaw win Naing</td>
            <td className='col-span-2'>12,2, 21</td>
            <td className='col-span-2'>30,000</td>
            <td className='col-span-2'>30</td>
            <td className='col-span-2'>Yangon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
