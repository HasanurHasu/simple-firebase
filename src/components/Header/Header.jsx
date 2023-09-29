import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center gap-4 text-green-700 font-semibold underline mt-5">
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            
        </div>
    );
};

export default Header;