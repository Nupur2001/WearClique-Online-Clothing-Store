import React from 'react'
import { useAuth } from '../context/AuthProvider'
// import User from '../../../Backend/modal/user.modal'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                User: null,
            })

            localStorage.removeItem("Users")
            toast.success("Logout Successful")

            // document.getElementById("my_modal_3").close()
            setTimeout(() => {
                window.location.reload()
                // localStorage.setItem("Users", JSON.stringify(res.data.user))
            }, 2000)
        } catch (error) {
            toast.error("An error eccoured: " + error)
            setTimeout(()=>{},3000)
        }
    }
    return (
        <>
            <div>
                <button className='cursor-pointer bg-red-500 text-white duration-300 btn hover:bg-red-400' onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Logout