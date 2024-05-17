/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import {Input} from '../common/Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  password_validation,
  
} from '../../utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ImCheckboxUnchecked } from 'react-icons/im'

interface Customer{
  "name": string,
  "dob": string,
  "email": string,
  "phone": number,
  "regdate": string,
  "aadhar": number
}

export const Login = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    fetch(`http://localhost:3010/customers`)
        .then(response => response.json())
        .then(res => {
          const result:Customer[] = res;
          if(result.some(i => i.name === data.name)){
            setSuccess(true);
            methods.reset();
            navigate('./dashboard',{state:data.name})
          } else {
            setSuccess(false);
          }
        } );
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...password_validation} />
        </div>
        <div className="mt-5">
          {success 
          ? (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Customer has been registered successfully
            </p>
          )
          : (
            <p className="font-semibold text-red-500 mb-5 flex items-center gap-1">
              <ImCheckboxUnchecked /> No customer found. Please Register
            </p>
          )
          }
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}