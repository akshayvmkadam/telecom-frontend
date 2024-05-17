import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  
  return (
	<>
	<h2>TCMS</h2>
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</BrowserRouter>
	</>
  )
}

export default App