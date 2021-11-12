import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/Firebase.init";

    FirebaseInit();
const useFirebase=()=>{
    const [user,setuser]=useState([]);
    const [products,setproducts]=useState([])
    const [isloding,setisloding]=useState(true);
    const [errormasseg,seterrormasseg]=useState(true);
    const [admin,setadmin]=useState(false);
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    ///create register authentication
    const registerUser=(email,password,name)=>{
        setisloding(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            seterrormasseg('');

            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {

                seaveuser(email,name)

              }).catch((error) => {
                // An error occurred
                // ...
              });
                
            })
            .catch((error) => {
                seterrormasseg(error.message); 
            })
            .finally(()=>setisloding(false));
        }
        ////obsarv function
     useEffect(()=>{
        const unsubscrib=onAuthStateChanged(auth, (user) => {
               if (user) {
                 setuser(user)
               } else {
                   setuser({})
               }
               setisloding(false);
             });
             return ()=> unsubscrib;
        },[]);

        //login user
    const loginUser=(email,password)=>{
        setisloding(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            seterrormasseg('')
        })
        .catch((error) => {
            seterrormasseg(error.message); 
        }).finally(()=>setisloding(false));
     }

     //logout authentication
     const logOut=()=>{
        setisloding(true);
        signOut(auth).then(() => {
            setuser({})
          }).catch((error) => {
            // An error happened.
          }).finally(()=>setisloding(false));
     }

     ///google sing in
     const googlesingin=()=>{
        setisloding(true);
        signInWithPopup(auth, googleprovider)
        .then((result) => {
          const user=result.user;
          seterrormasseg('')
          seaveuserlogin(user.email,user.displayName)
        }).catch((error) => {
            seterrormasseg(error.message); 
        }).finally(()=>setisloding(false));
     }


     //register user fetch user saevd
     const seaveuser=(email,name)=>{
      const user={email,name};
      fetch('https://intense-temple-06841.herokuapp.com/users',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
     }


     //login user cheking have in before or no if before not saevd ,if have new saeving user
     const seaveuserlogin=(email,name)=>{
      const user={email,name};
      fetch('https://intense-temple-06841.herokuapp.com/users',{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()
     }

     ///cheking admin with email
     useEffect( ()=>{
       fetch(`https://intense-temple-06841.herokuapp.com/users/${user.email}`)
       .then(res=>res.json())
       .then(data=>setadmin(data.admin))
     },[user?.email]);

     ///getting all products
     
    useEffect(()=>{
        fetch('https://intense-temple-06841.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[products])

    return {
        user,
        admin,
        registerUser,
        loginUser,
        logOut,
        isloding,
        errormasseg,
        googlesingin,
        seaveuser,
        products

    }
}
export default useFirebase;