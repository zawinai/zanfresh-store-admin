import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  doc,
  collection,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { useFirebase } from "../hooks/useFirebaseData";

import {
  TrashIcon,
  PencilIcon,
  EyeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const Products = () => {
  const list = [
    {
      createdAt: "nt {seconds: 1674407720, nanoseconds: 353000000}",
      description: "Really nice",
      clientid: "1",
      imgUrl: "/backpack-1.png",
      name: "good man",
      price: "233",
    },
    {
      createdAt: "nt {seconds: 1674407720, nanoseconds: 353000000}",
      description: "Really nice",
      clientid: "2",
      imgUrl: "/cap-gr.png",
      name: "better",
      price: "233",
    },
    {
      createdAt: "nt {seconds: 1674407720, nanoseconds: 353000000}",
      description: "Really nice",
      clientid: "3",
      imgUrl: "/hoodie-b-yl.png",
      name: "best",
      price: "233",
    },
  ];

  // useEffect(() => {
  //   let list: any = [];
  //   const fetchData = async () => {
  //     try {
  //       const res = await getDocs(collection(db, "products", "food", "fruit"));
  //       res.forEach((doc) => {
  //         let check = { createdAt: "", ...doc.data() };
  //         const { createdAt, ...other } = check;
  //         list.push({ id: doc.id, other });
  //       });
  //       setData(list);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchData();
  //   // const unsub = onSnapshot(collection(db, "products", "food", "fruit"), (snapShot) => {
  //   //   let list: any = [];
  //   //   snapShot.docs.forEach((doc) => {
  //   //     list.push({ id: doc.id, ...doc.data() });
  //   //   });
  //   //   setData(list);
  //   // });

  //   return () => {
  //     // unsub();
  //   };
  // }, []);

  const { data } = useFirebase("products");

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "products", id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='pt-3 '>
      <h1 className='text-4xl text-center'>Products</h1>
      <div className='inline-flex w-full items-center justify-center md:justify-end my-3 md:pr-10 '>
        <div className='border-2 flex flex-row items-center justify-between'>
          <input type='text' className='outline-none border-none' />
          <button className='px-3'>
            <MagnifyingGlassIcon className='w-[20px] h-auto text-center' />
          </button>
        </div>
      </div>
      <table className='grid gap-y-2 text-xs md:text-sm'>
        <thead className='border px-1 py-3 bg-blue-500 text-white'>
          <tr className='grid grid-cols-12 place-items-start'>
            <th className='col-span-4'>name</th>
            <th className='col-span-2'>image</th>
            <th className='col-span-2'>price</th>
            <th className='col-span-2 mx-auto'>status</th>
            <th className='col-span-2 mx-auto'>actions</th>
          </tr>
        </thead>
        <tbody className='border-3'>
          {list.map(({ name, imgUrl, clientid, price, description }) => (
            <tr
              key={clientid}
              className={`grid grid-cols-12 place-items-start mb-2 ${
                parseInt(clientid) % 2 == 0 ? "bg-slate-200/50" : "bg-white"
              }`}
            >
              <th className='col-span-4 text-center'>{name}</th>
              <td className='col-span-2'>
                <img src={imgUrl} alt='image' className='w-[30px] h-auto' />
              </td>
              <td className='col-span-2 text-center'>{price}</td>
              <td className='col-span-2 mx-auto'>Active</td>
              <td className='col-span-2 mx-auto flex flex-row items-center justify-around w-full'>
                <button>
                  <PencilIcon className='w-[15px] h-auto text-blue-400' />
                </button>
                <button onClick={() => handleDelete(clientid)}>
                  <TrashIcon className='w-[15px] h-auto text-red-400' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
