import {useState, useEffect} from 'react';
import { currentCustomer, Customer } from '../common/models';

export const CustomerDetailTable = ( { name } :currentCustomer) => {

  const [customers, setCustomer] = useState<Customer | null>();

  useEffect(() => { 
    const fetchPlans = async () => {
        const response = await fetch(`http://localhost:3010/customer/${name}`);
        const jsonData = await response.json();
        console.log(jsonData)
        setCustomer(jsonData[0])
    }
    fetchPlans();
  }, [name]);


  return (
    customers ? 
      <div className="py-4 row overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Contents</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{customers.name}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{customers.dob}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customers.email}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{customers.phone}</td>
            </tr>
            <tr>
              <th>Registration Date</th>
              <td>{customers.regdate}</td>
            </tr>
            <tr>
              <th>Aadhar Number</th>
              <td>{customers.aadhar}</td>
            </tr>
            {customers!.plan ? 
                <><tr>
                    <th>Current Plan</th>
                    <td>{customers.plan.name}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{customers.plan.status ? 'Active' : 'Inactive'}</td>
                </tr>
                <tr>
                    <th>Cost</th>
                    <td>{customers.plan.cost}</td>
                </tr>
                <tr>
                    <th>Validity</th>
                    <td>{customers.plan.validity}</td>
                </tr></>
                : <tr>
                    <th>Current Plan</th>
                    <td>No Plan Selected</td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    : <h2>Loading Data...</h2>
  )
}
