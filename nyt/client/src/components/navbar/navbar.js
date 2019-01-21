import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
 
        return (

            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <span class="navbar-brand">Book Search</span>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" tag={Link} to= "/">Search</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" tag={Link} to= "/saved">Saved</Link>
                        </li>
                    </ul>
                </nav>
                <div className="jumbotron text-center">
                    <h1>NYT Book Search</h1>
                    <p>
                        Powered by Google
      </p>
                </div>

            </div>


        );
    }


export default Navbar;