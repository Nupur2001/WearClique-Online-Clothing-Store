// import React, { createContext, useContext, useState } from 'react'


// export const AuthContext=createContext()
// export default function AuthProvider({children}) {
//   const initialAuthUser=localStorage.getItem("Users")
//   const [authUser,setAuthUser]=useState(
//     initialAuthUser? JSON.parse(initialAuthUser): undefined
//   )
//   return(
//     <AuthContext.Provider value={[authUser,setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth=()=>useContext(AuthContext)




// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//     const initialAuthUser = localStorage.getItem("Users");
//     const [authUser, setAuthUser] = useState(
//       initialAuthUser ? JSON.parse(initialAuthUser) : null
//     );


//   const updateAuthUser = (user) => {
//     setAuthUser(user);
//     if (user) {
//       localStorage.setItem("Users", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("Users");
//     }
//   };

//   return (
//     <AuthContext.Provider value={[authUser, updateAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };



import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);