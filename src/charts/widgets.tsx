import { useData } from "../context/dataContext";
import {
  BanknotesIcon,
  UserGroupIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";

const Widgets = () => {
  const { widgets } = useData();

  return (
    <div className=' grid grid-cols-widget-cards place-items-center gap-10 w-full'>
      {widgets.map(({ id, title, data, icon }) => (
        <div
          className='relative w-[185px] h-[120px] rounded-xl bg-blue-500 px-5 py-2 flex flex-col items-start justify-between text-white drop-shadow-md'
          key={id}
        >
          <span className='tracking-wider'>{title}</span>
          <h1 className='text-2xl md:text-3xl font-bold drop-shadow-md'>
            {data}
          </h1>
          <div className='absolute right-1 bottom-1'>{icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Widgets;
