import { BookCheck } from "lucide-react";
import NavLink from "./nav-link";

export default function Header() {
    const isLoggedIn = false;
    return (
        <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
            <div className="flex lg:flex-1">
                <NavLink href="/" className="flex items-center gap-1 lg:gap-3">
                    <BookCheck className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
                    <span className="font-extrabold text-gray-900 lg:text-xl">Brefe</span>
                </NavLink>
            </div>
            <div className="flex lg:justify-center lg:items-center gap-4 lg:gap-12">
                <NavLink href="#pricing">Pricing</NavLink>
                {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
            </div>
            <div className="flex lg:justify-end lg:flex-1">
                {isLoggedIn ? (
                    <div className="flex gap-2 items-center">
                        <NavLink href="/upload">Upload PDF</NavLink>
                        <div>Pro</div>
                        <NavLink href="#signout">User</NavLink>
                    </div>
                ) : (
                    <div>
                        <NavLink href="#sign-in">Sign in</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}