import './dashboard.css'
import React from 'react'
import BarChartComponent from '../../../components/app/Dashboard/BarChartComponent'
import PieChartComponent from '../../../components/app/Dashboard/PieChartComponent copy'
import LineAreaChartComponent from '../../../components/app/Dashboard/LineAreaChartComponent'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className='chart-container'>
        <BarChartComponent />
      </div>
      <div className='chart-container'>
        <PieChartComponent />
      </div>
      <div className='chart-container'>
        <LineAreaChartComponent />
      </div>
    </div>
  )
}

export default Dashboard