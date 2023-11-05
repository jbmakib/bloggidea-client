import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    const [addBg, setAddBg] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            setAddBg(true);
        } else {
            setAddBg(false);
        }
    });
    return (
        <nav
            className={`navbar navbar-expand-lg w-100 ${
                addBg
                    ? `bg-white navbar sticky-top`
                    : `${props.isHome ? `navbar-dark` : `navbar`} fixed-top`
            }`}
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Bloggidea
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto align-items-center">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/blogs"
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "nav-link active text-primary"
                                    : "nav-link"
                            }
                            to="/login"
                        >
                            <button className="btn btn-primary rounded-pill">
                                Login
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
