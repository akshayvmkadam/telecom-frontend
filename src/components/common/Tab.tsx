/*-------------------------------------------------------------------
|  🐼 React JSX Element
|
|  🐯 Purpose: RE-USEABLE TAB COMPONENT to tabwise content for login and register
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { ChangeEventHandler, ReactNode } from "react";

interface TabProps {
    title : string,
    body: ReactNode,
    clickTab : ChangeEventHandler<HTMLInputElement>,
    isActive: boolean
}

export const Tab = ({ title, body, clickTab, isActive } : TabProps) => {
    return (
      <>
        <input type="radio" name={title} role="tab" className="tab" aria-label={title} onChange={clickTab} checked={isActive}/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {body}
        </div>
      </>
    );
  };
  
  