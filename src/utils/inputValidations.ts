/*-------------------------------------------------------------------
|  🐼 Input Type Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  N/A
*-------------------------------------------------------------------*/

  export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'Enter your name',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
    className: '',
  }

  export const reg_name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'reg_name',
    placeholder: 'Enter your name',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
    className: '',
  }
  
  export const date_validation = {
    name: 'dob',
    label: 'Date of Birth',
    type: 'date',
    id: 'dob',
    placeholder: 'Enter or select date',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
    className: '',
  }

  export const reg_date_validation = {
    name: 'dor',
    label: 'Registration Date',
    type: 'date',
    id: 'regdate',
    placeholder: 'Enter or select date',
    disabled: false,
    validation: {
      required: {
        value: false,
        message: '',
      },
    },
    className: '',
  }
  
  export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Enter password ...',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters',
      },
      maxLength: {
        value: 20,
        message: '20 characters max',
      },
    },
    className: '',
  }
  
  export const aadhar_validation = {
    name: 'aadhar',
    label: 'Aadhar Number',
    type: 'number',
    id: 'aadhar',
    placeholder: 'Enter aadhar number',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 12,
        message: 'Exactly 12 characters',
      },
      maxLength: {
        value: 12,
        message: 'Exactly 12 characters',
      },
    },
    className: '',
  }

  export const phone_validation = {
    name: 'phone',
    label: 'Assigned Mobile Number',
    type: 'number',
    id: 'phone',
    placeholder: 'Enter mobile number',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 10,
        message: 'Exactly 10 characters',
      },
      maxLength: {
        value: 10,
        message: 'Exactly 10 characters',
      },
    },
    className: '',
  }
  
  export const email_validation = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'Enter email address',
    disabled: false,
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
      },
    },
    className: '',
  }