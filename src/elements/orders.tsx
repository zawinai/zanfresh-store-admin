// React
import { useState, useEffect } from "react";
// Firebase
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../firebase.config";
// Utils
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
// Hook
import { useFirebase } from "../hooks/useFirebaseData";

// types
import { orderTypes } from "../types";

const Orders = () => {
  const { data } = useFirebase<orderTypes>("orders");

  return (
    <div className='pt-3'>
      <h1 className='text-4xl text-center'>Orders</h1>
      <div className='inline-flex w-full items-center justify-center md:justify-end my-3 md:pr-10 '>
        <div className='border-2 flex flex-row items-center justify-between'>
          <input type='text' className='outline-none border-none' />
          <button className='px-3'>
            <MagnifyingGlassIcon className='w-[20px] h-auto text-center' />
          </button>
        </div>
      </div>
      <table className='w-full text-xs md:text-sm gap-y-2 px-2'>
        <thead className='border-2 py-3 w-full bg-blue-500 text-white'>
          <tr className='grid grid-cols-10 py-3 place-items-start px-1'>
            <th className='col-span-3 md:col-span-2'>Customer</th>
            <th className='col-span-2'>Date</th>
            <th className='col-span-2'>Amount</th>
            <th className='col-span-1'>Items</th>
            <th className='col-span-1'>Status</th>
            <th className='hidden md:flex md:col-span-2 mx-auto'>Actions</th>
          </tr>
        </thead>
        <tbody className='border-3'>
          {data.map(({ id, customer, grandTotal, cart, date }) => (
            <tr
              className='grid grid-cols-10 w-full mb-2 py-3 place-items-start px-1'
              key={id}
            >
              <td className='col-span-3 md:col-span-2'>{customer}</td>
              <td className='col-span-2'>{date}</td>
              <td className='col-span-2'>{grandTotal}</td>
              <td className='col-span-1'>{cart.length}</td>
              <td className='col-span-1 '>Pending</td>
              <td className='hidden md:flex md:col-span-2 w-full md:flex-row md:items-center md:justify-around'>
                <XMarkIcon className='w-[20px] h-auto text-red-300' />
                <CheckIcon className='w-[20px] h-auto text-blue-400' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
