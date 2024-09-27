import { BarChart } from '@mui/x-charts/BarChart';

function BarChartComponent() {
  return (
    <BarChart
      borderRadius={10}
      xAxis={[
        {
          id: 'barCategories',
          data: ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      ]}

    />
  )
}

export default BarChartComponent
