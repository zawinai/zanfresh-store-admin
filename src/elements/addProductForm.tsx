import { useNavigate } from "react-router-dom";
import { FormEvent, useState, useEffect } from "react";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase.config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import {
  LockClosedIcon,
  LockOpenIcon,
  ArrowUpTrayIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { Listbox } from "@headlessui/react";

export default function AddProductForm() {
  const options = [
    {
      id: 1,
      name: "meat",
    },
    {
      id: 2,
      name: "veges",
    },
    {
      id: 3,
      name: "fruit",
    },
  ];

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [col, setCol] = useState(options[0].name);

  const [percent, setPercent] = useState<number | undefined>(0);

  const navigate = useNavigate();

  const handleAddProduct = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // await setDoc(doc(db, "products", col), {
      //   name: name,
      //   price: price,
      //   description: description,
      //   imgUrl: imgUrl,
      //   createdAt: serverTimestamp(),
      // }); // require an ID and says must be even number of segments

      navigate("/products");

      await addDoc(collection(db, "products", "food", col), {
        name: name,
        price: price,
        description: description,
        imgUrl: imgUrl,
        createdAt: serverTimestamp(),
      }); // create without unique Id odd number of segments
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      const storage = getStorage();
      const storageRef = ref(storage, img?.name);

      const uploadTask = uploadBytesResumable(storageRef, img as Blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPercent(progress);
          switch (snapshot.state) {
            case "paused":
              setPercent(progress);
              break;
            case "running":
              setPercent(progress);
              break;
          }
        },
        (err: any) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);
          });
        }
      );
    };

    img && uploadFile();
  }, [img]);

  return (
    <div>
      <h1 className='text-5xl text-gray-500 font-extrabold text-center py-3 drop-shadow-md'>
        Add New Product
      </h1>
      <div className='mt-10 max-w-[1000px] mx-auto'>
        <form action='#' method='POST'>
          <div className='shadow sm:overflow-hidden sm:rounded-md'>
            <div className='space-y-6 bg-white px-4 py-5 sm:p-6'>
              <div className='flex flex-col'>
                <div className='grid grid-cols-5 '>
                  <div className='col-span-2'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <div className='mt-1 flex rounded-md shadow-sm '>
                      <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500'>
                        Capital Letter
                      </span>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        placeholder='Apple'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-start-5 col-end-6'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Collections
                    </label>
                    <div className='relative flex flex-col justify-between px-2 border-gray-300 mt-1'>
                      <Listbox value={col} onChange={setCol}>
                        <div className='flex flex-row items-center justify-between border-2 rounded-md h-[40px] px-2 sm:text-sm '>
                          <span>{col}</span>
                          <Listbox.Button className=' focus:border-indigo-500 focus:ring-indigo-500 '>
                            <ChevronDownIcon className='w-[30px] h-auto  focus:border-indigo-500 focus:ring-indigo-500 ' />
                          </Listbox.Button>
                        </div>
                        <Listbox.Options className='absolute top-10 w-full mt-3 p-2 text-center z-30 backdrop-blur-[2px] bg-sky-300/20 rounded-md shadow-md'>
                          {options.map(({ id, name }) => (
                            <Listbox.Option
                              key={id}
                              value={name}
                              className='cursor-pointer hover:bg-slate-200 block text-sm font-medium text-gray-700'
                            >
                              {name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Price
                  </label>
                  <div className='mt-1 flex rounded-md '>
                    <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500'>
                      Kyat
                    </span>
                    <input
                      type='number'
                      name='price'
                      id='price'
                      className=' rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      placeholder='eq : 1000'
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <div className='mt-1'>
                  <textarea
                    id='description'
                    name='description'
                    rows={3}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    placeholder='A very fresh organic apple..'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <p className='mt-2 text-sm text-gray-500'>
                  Brief description for your product
                </p>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Product Image
                </label>
                <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                  <div className='space-y-1 text-center'>
                    <ArrowUpTrayIcon className='w-[20px] h-auto' />
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                          multiple={false}
                          onChange={(e) =>
                            setImg(
                              e.target.files !== null ? e.target.files[0] : null
                            )
                          }
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=' grid grid-cols-6 gap-x-5 sm:px-6 w-full'>
              <button
                type='submit'
                disabled={percent !== 100 ? true : false}
                className={`relative col-start-4 col-end-6 w-full inline-flex justify-center rounded-md border border-transparent ${
                  percent !== 100
                    ? "bg-slate-500"
                    : "bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                } py-2 px-4 text-sm font-medium text-white `}
                onClick={(e) => handleAddProduct(e)}
              >
                Save
                {percent !== 100 ? (
                  <LockClosedIcon className='absolute w-[20px] left-1' />
                ) : (
                  <LockOpenIcon className='absolute w-[20px] left-1' />
                )}
              </button>
              <button
                type='submit'
                className='col-start-6 col-end-7 w-full inline-flex justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2'
                onClick={() => navigate("/products")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
