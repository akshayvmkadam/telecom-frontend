//common interfaces

export interface Customer{
    "name": string,
    "dob": string,
    "email": string,
    "phone": number,
    "regdate": string,
    "aadhar": number,
    "plan":
      {
      "id": number,
      "name": string,
      "cost": number,
      "validity": number,
      "status": boolean
      }
  }

export interface IPlans{
    id: number,
    name: string,
    cost: number,
    validity: number,
    status: boolean,
}

export interface currentCustomer{
    "name": string
  }