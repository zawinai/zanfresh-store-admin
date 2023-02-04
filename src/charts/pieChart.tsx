import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

import { useData } from "../context/dataContext";

const PieChart = () => {
  const {
    pieChartData: { data },
  } = useData();

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
