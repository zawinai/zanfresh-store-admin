// React
import React from "react";
// Utils
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// Hook
import { useFirebase } from "../hooks/useFirebaseData";
// types
import { customerTypes } from "../types";

const Users = () => {
  const { data } = useFirebase<customerTypes>("customers");

  console.log(data);

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
      <table className='w-full text-xs md:text-sm gap-y-2 px-2'>
        <thead className='border-2 px-2 py-3 w-full bg-blue-500 text-white'>
          <tr className='grid grid-cols-12 py-3 place-items-start px-2'>
            <th className='col-span-4'>Name</th>
            <th className='col-span-2'>Joined</th>
            <th className='col-span-2'>Spent</th>
            <th className='col-span-2'>Orders</th>
            <th className='col-span-2'>City</th>
          </tr>
        </thead>
        <tbody className='border-3'>
          {data.map(({ id, name, joined, spent, orders, city }) => (
            <tr
              className='grid grid-cols-12 w-full mb-2 py-3 place-items-start px-2'
              key={id}
            >
              <td className='col-span-4'>{name}</td>
              <td className='col-span-2'>{joined}</td>
              <td className='col-span-2'>{spent}</td>
              <td className='col-span-2'>{orders}</td>
              <td className='col-span-2'>{city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
