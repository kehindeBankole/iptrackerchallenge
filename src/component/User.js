import React , {useContext , useEffect} from 'react'
import { SuperContext } from '../context/context'

function User() {
    const context = useContext(SuperContext)
    console.log(context)
    useEffect(() => {
        context.fetch()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default User
