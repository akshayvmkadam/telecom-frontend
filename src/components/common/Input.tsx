/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import cn from 'classnames'
import { findInputError } from '../../utils/findInputError';
import { isFormInvalid } from '../../utils/isFormInvalid';
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'
import React from 'react';

interface Input{
    name: string,
    label: string,
    type: string,
    id: string,
    placeholder: string,
    disabled: boolean,
    validation: object,
    className: string,
}

export const Input:React.FC<Input> = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  disabled,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputErrors: any = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  const input_tailwind =
    'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'

  return (
    <div className={cn('flex flex-col w-full gap-2', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors!.error!.message}
              key={inputErrors!.error!.message}
            />
          )}
        </AnimatePresence>
      </div>
        <input
            id={id}
            type={type}
            className={cn(input_tailwind)}
            placeholder={placeholder}
            disabled={disabled}
            {...register(name, validation)}
        />
    </div>
  )
}

interface Message{
    message: string;
}

const InputError: React.FC<Message> = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}