/*-------------------------------------------------------------------
|  🐼 Function findInputError
|
|  🐯 Purpose: GIVEN AN ERRORS OBJECT AND AN INPUT NAME, THIS FUNCTION
|              FILTERS THE ERRORS OBJECT AND RETURN THE ERROR OF THE 
|              GIVEN INPUT.
|
|  🐸 Returns:  OBJECT
*-------------------------------------------------------------------*/


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findInputError = (errors: any, name: string) => {
    const filtered = Object.keys(errors)
      .filter(key => key.includes(name))
      .reduce((cur, key: string) => {
        return Object.assign(cur, { error: errors[key] })
      }, {})
    return filtered
  }
