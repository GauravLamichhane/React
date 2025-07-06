//useContext() = react hook that allows you to share values between multiple levels of components without passing props through each level\
/**
 PROVIDER COMPONENT i.e parent
 1. import {createcontextx} from 'react'
 2. export const Mycontext = createContext()
 3. <MyContext.provider value = {value}>
 <Child/>
 </MyComponent.Provider>

 CONSUMER COMPONENTS
 1.import { useContext } from "react";
import { MyContext } from "./ComponentA";\
2.Const value = useContext(useContext)
 */

import { createContext, useState } from "react";
import ComponentB from "./ComponentB";
export const UserContext = createContext();

export function ComponentA() {
  const [user, setUser] = useState("BroCode");
  return (
    <div className="box">
      <p>ComponentA</p>
      <h2>{`Hello:${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
