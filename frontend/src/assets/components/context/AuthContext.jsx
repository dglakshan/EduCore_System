// import { createContext, useEffect, useState } from "react";
// import { getMe } from "../services/authService";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initUser = async () => {
//       try {
//         const userData = await getMe();
//         setUser(userData);
//       } catch (err) {
//         throw err;
//       } finally {
//         setLoading(false);
//       }
//     };
//     initUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
