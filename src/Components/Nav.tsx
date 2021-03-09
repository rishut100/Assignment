import React from 'react'
import {Link} from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger fixed-top">
            <div className="container">
                <Link to="/"><h3 className="text-white">Shop</h3></Link>
                    <Link to="/cart" >
                        <span className="d-inline text-sm-left text-light text-decoration-none">Cart</span>
                    </Link>
                    <Link to="/loggedUser" >
                        <span className="d-inline text-sm-left text-light text-decoration-none">User</span>
                    </Link>
            </div>
        </nav>
    )
}
