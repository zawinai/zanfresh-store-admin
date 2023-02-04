import BarChart from "../charts/barChart";
import PieChart from "../charts/pieChart";
import Widgets from "../charts/widgets";

const Dashboard = () => {
  return (
    <div className='min-h-screen py-10'>
      <div className='grid grid-cols-1 md:grid-rows-2 md:grid-cols-12 gap-y-10 place-items-center justify-items-center p-10 w-full '>
        <div className='md:row-start-1 col-span-full w-full'>
          <Widgets />
        </div>
        <div className='md:row-start-2 md:col-start-1 md:col-end-5 mx-auto'>
          <PieChart />
        </div>
        <div className='md:row-start-2 md:col-start-5 md:col-end-13 '>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
