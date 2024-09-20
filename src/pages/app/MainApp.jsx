import React from 'react'
import Layout from '../../components/app/Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Profile from './profile/profile';
import Balances from './balances/balances';

function MainApp() {
  return (
    
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/balances" element={<Balances />} />
          {/* Agrega otras rutas aquí */}
        </Routes>
      </Layout>
  
  )
}

export default MainApp