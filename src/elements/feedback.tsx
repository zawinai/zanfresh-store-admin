import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

const Feedbacks = () => {
  const list = [
    {
      id: 1,
      user: "zaw win naing",
      date: "21,2,21",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo rem dolore amet voluptates est, quod possimus repudiandae numquam dolorum cum? Quod dolor accusamus voluptatem fugit asperiores, nam possimus.",
    },
    {
      id: 2,
      user: "zaw win naing",
      date: "21,2,21",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo ",
    },
    {
      id: 3,
      user: "zaw win naing",
      date: "21,2,21",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo rem dolore amet voluptates est, quod possimus repudiandae numquam dolorum cum? Quod dolor accusamus voluptatem fugit asperiores, nam possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo rem dolore amet voluptates est, quod possimus repudiandae numquam dolorum cum? Quod dolor accusamus voluptatem fugit asperiores, nam possimus.",
    },
    {
      id: 4,
      user: "zaw win naing",
      date: "21,2,21",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo rem dolore amet voluptates est, quod possimus repudiandae numquam dolorum cum? ",
    },
    {
      id: 5,
      user: "zaw win naing",
      date: "21,2,21",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nemo, illo rem dolore ",
    },
  ];

  return (
    <div className='pt-3 space-y-20 pb-10'>
      <h1 className='text-4xl text-center'>Feedbacks</h1>
      <ul className='grid grid-cols-feedback-cards gap-y-4 place-items-center'>
        {list.map(({ id, user, date, p }) => (
          <li
            key={id}
            className='relative w-[390px] h-auto bg-blue-500 px-4 py-2 rounded-lg flex flex-col'
          >
            <div className='absolute top-5 right-5'>
              <EllipsisVerticalIcon className='w-[20px] h-auto text-white' />
            </div>
            <div className="flex flex-col py-3">
              <h1 className=' text-lg font-bold text-slate-200'>{user}</h1>
              <span className="text-xs font-light text-slate-300">{date}</span>
            </div>
            <p className='py-3 px-1 min-h-[200px] text-slate-200 tracking-wider'>
              {p.slice(0, 200)}{" "}
              <span className='text-xs text-slate-300 font-medium ml-2'>
                {p.length > 200 ? "See more" : ""}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedbacks;
