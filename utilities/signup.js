import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc,setDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig"; // Adjust path as necessary
import { db } from "./firebaseConfig";
export const saveData = async (data) => {
    try {
      // Destructure data if necessary
      const { email, password } = data;
  
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      // Create the user document in Firestore
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, { // Create document if it doesn't exist
        address: "New Address",
        phoneNumber: "123-456-7890",
      });
  
     return console.log("User signup");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };