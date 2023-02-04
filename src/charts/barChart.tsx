import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useData } from "../context/dataContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const BarChart = () => {
  const {
    barChartData: { data },
  } = useData();

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Bar data={data} width={500} height={300} options={options} />;
};

export default BarChart;
