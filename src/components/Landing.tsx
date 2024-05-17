/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: Landing page for Login/Register
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { FC, ReactNode, useState } from 'react';
import { Register } from './forms/Register';
import { Tab } from './common/Tab';
import { Login } from './forms/Login';

interface TabsData {
  title: string;
  body: ReactNode;
}

export const Landing: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const res: TabsData[] = [{
    "title": "Login",
    "body": <Login />
},{
  "title": "Register",
  "body": <Register />
}];

  return (
    <div role="tablist" className="mt-10 tabs tabs-lifted">
      {res.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          body={tab.body}
          clickTab={() => setActiveTab(index)}
          isActive={activeTab === index} //if tab index is same as
        />
      ))}
  </div>
  )
}
