import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    console.log(user);
    return (
        <div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={handleGoogleSingIn}
                    className="text-center py-2 bg-green-700 px-4 rounded-md text-white">Google login
                </button>
            </div>
            <div className="">
                <h1>{user?.displayName}</h1>
                <p>{user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Login;