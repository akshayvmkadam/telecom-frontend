/**
 * Dashboard after login and register which has plans and current customer details
 */

import {FC} from 'react'
import { Plans } from './customers/Plans'
// import { CustomerTable } from './customers/CustomerTable'
import { Link, useLocation } from 'react-router-dom';
import { CustomerDetailTable } from './customers/CustomerDetailTable';

export const Dashboard:FC = () => {
    const location = useLocation();

  return (
    <div className=''>
        <div className='py-4'>
            <h2 color='primary'>Welcome {location.state}</h2>
        </div>
        <Plans name={location.state} />
        <CustomerDetailTable name={location.state}/>
        <div className='p-2'>
          <Link to="/" className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center hover:bg-blue-800">Logout</Link>
        </div>
        {/* <CustomerTable name={location.state}/> */}
    </div>
  )
}
