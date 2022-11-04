import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

//set upp authentication
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithRedirect(auth, provider);



export {provider, auth, signInWithRedirect}