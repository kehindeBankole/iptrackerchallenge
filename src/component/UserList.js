import React ,{useContext , useEffect}from 'react'
import { SuperContext } from "../context/context";
import User from './User';
function UserList() {
    const context = useContext(SuperContext);
    console.log(context)
  useEffect(() => {
    context.fetch(`bankolek5@gmail.com`);
  }, []);
    return (
        <div>
          <User ip={context.data.ip}
          location={context.data.location?context.data.location.city:""}
          timezone={context.data.location?context.data.location.timezone:""}
          isp={context.data.isp}
          />
        </div>
    )
}

export default UserList
