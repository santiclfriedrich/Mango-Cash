import { PieChart } from '@mui/x-charts/PieChart';

function PieChartComponent() {
  return (
    <PieChart
  series={[
    {
      data: [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
        { label: 'Group E', value: 278 },
        { label: 'Group F', value: 189 },
      ],
      innerRadius: 70,
      outerRadius: 93,
      paddingAngle: -2,
      cornerRadius: 5,
      startAngle: 0,
      endAngle: 360,
      cx: 150,
      cy: 150,
    }
  ]}
/>
  )
}

export default PieChartComponent;
