import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggerUser = result.user;
                setUser(loggerUser)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGitHubSingIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const giHubLoggedUser = result.user;
                setUser(giHubLoggedUser);
                console.log(giHubLoggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);
    return (
        <div>


            <div className="flex justify-center mt-6 gap-5">
                {
                    user ? <button onClick={handleSingOut} className="py-2 px-4 bg-green-500 text-white text-lg font-bold rounded-md">Sing Out</button>
                        :
                        <>
                            <button onClick={handleGoogleSingIn} className="py-2 px-4 bg-green-500 text-white text-lg font-bold rounded-md">Google Sing In</button>
                            <button onClick={handleGitHubSingIn} className="py-2 px-4 bg-green-500 text-white text-lg font-bold rounded-md">GitHub Sing In</button>
                        </>
                }
            </div>
            {
                user &&
                <div className="flex flex-col items-center">
                    <h1 className="text-lg font-semibold">{user.displayName}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;