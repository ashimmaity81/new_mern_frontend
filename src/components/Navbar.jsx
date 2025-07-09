import {Link} from "react-router";
const Navbar = () => {
    return (
        <div className="py-4 px-6 flex justify-between bg-amber-200">
            <div className="font-bold text-emerald-600">Shopping App</div>
            <div className="flex gap-2">
                <input placeholder="Search here..." className="border-1 py-1 px-2 rounded-md"/>
                <button className="border-1 py-1 px-2 rounded-md">Search</button>
            </div>
            <div className="flex gap-2">
                <Link to='/profile'>Profile</Link>
                <Link to='/signup'>Signup</Link>
            </div>
        </div>
    )
}
export {Navbar};