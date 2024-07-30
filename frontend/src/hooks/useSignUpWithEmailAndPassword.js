import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, 
        user ,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth);
	
	const signup = async({email ,fname, password})=>{
        try {
            const newUser = await createUserWithEmailAndPassword(email , fname, password);
            if (!newUser &&error){
                console.log(error);
                return;
            }
            if (newUser){
                return 1;
            }
        } catch (error) {
            console.log(error)
        }
    }
  
    return {loading , error ,signup}
}

export default useSignUpWithEmailAndPassword
