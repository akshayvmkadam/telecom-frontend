import {FC} from 'react'
import { Plans } from './customers/Plans'
// import { CustomerTable } from './customers/CustomerTable'
import { useLocation } from 'react-router-dom';
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
        {/* <CustomerTable name={location.state}/> */}
    </div>
  )
}
