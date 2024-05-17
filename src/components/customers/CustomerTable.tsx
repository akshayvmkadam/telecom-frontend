import {useState, useEffect} from 'react';

interface Customer{
  "name": string,
  "dob": string,
  "email": string,
  "phone": number,
  "regdate": string,
  "aadhar": number
}

interface currentCustomer{
  "name": string
}

export const CustomerTable = ( { name } :currentCustomer) => {

  const [customers, setCustomer] = useState<Customer[] | null>();

  useEffect(() => { 
    const fetchPlans = async () => {
        const response = await fetch('http://localhost:3010/customers');
        const jsonData = await response.json();
        console.log(jsonData)
        setCustomer(jsonData)
    }
    fetchPlans();
  }, []);


  return (
    customers ? 
      <div className="py-4 row overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Registration Date</th>
              <th>Aadhar Number</th>
            </tr>
          </thead>
          <tbody>
            {customers!.map(cust => 
              <tr className={`${cust.name === name ? 'bg-base-200' : ''}`}>
              <td>{cust.name}</td>
              <td>{cust.dob}</td>
              <td>{cust.email}</td>
              <td>{cust.aadhar}</td>
              <td>{cust.regdate}</td>
              <td>{cust.phone}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    : <h2>Loading Data...</h2>
  )
}
