import React from 'react'
import Layout from '../../components/app/Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Profile from './profile/profile';
import Balances from './balances/balances';
import Transactions from './transactions/transactions';

function MainApp() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/balances" element={<Balances />} />
          <Route path='/transactions' element={<Transactions />} />
          {/* Agrega otras rutas aquí */}
        </Routes>
      </Layout>
  
  )
}

export default MainApp