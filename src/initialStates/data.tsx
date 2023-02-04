import {
  BanknotesIcon,
  UserGroupIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";

export const widgets = [
  {
    id: 1,
    title: "Total Orders",
    data: "1200",
    icon: <QueueListIcon className='w-[30px] h-auto text-sky-400' />,
  },
  {
    id: 2,
    title: "Total Sale",
    data: "620k",
    icon: <BanknotesIcon className='w-[30px] h-auto text-sky-400' />,
  },
  {
    id: 3,
    title: "Total Customer",
    data: 500,
    icon: <UserGroupIcon className='w-[30px] h-auto text-sky-400' />,
  },
];

export const pieChartData = {
  data: {
    labels: ["Yangon", "Mandalay", "Naypyi Daw"],
    datasets: [
      {
        label: "# of Orders",
        data: [12, 19, 3],
        backgroundColor: ["blue", "skyblue", "gray"],
        borderColor: ["blue", "skyblue", "gray"],
        borderWidth: 1,
      },
    ],
  },
};

export const barChartData = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Mandalay",
        data: [
          3000, 1000, 9000, 4000, 6000, 4000, 3000, 6000, 8000, 7000, 3000,
          5000,
        ],
        backgroundColor: "blue",
      },
      {
        label: "Yangon",
        data: [
          2000, 5000, 5000, 2000, 4000, 7000, 9000, 8000, 4000, 2000, 4000,
          9000,
        ],
        backgroundColor: "skyblue",
      },
    ],
  },
};
