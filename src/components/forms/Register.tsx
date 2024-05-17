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
  email_validation,
  phone_validation,
  aadhar_validation,
  date_validation,
  reg_date_validation,
  reg_name_validation,
  
} from '../../utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',  },
        body: JSON.stringify(data)
    };
    fetch(`http://localhost:3010/customer/${data.name}`, requestOptions)
        .then(response => response.json())
        .then(res => {
          console.log(res)
          methods.reset()
          setSuccess(true)
          navigate('./dashboard',{state:data.name})
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
          <Input {...reg_name_validation} />
          <Input {...email_validation} />
          <Input {...date_validation} />
          <Input {...phone_validation} />
          <Input {...aadhar_validation} />
          <Input {...reg_date_validation} />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
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