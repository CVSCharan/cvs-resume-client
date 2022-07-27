import React, {Component} from "react";
import { Link } from "react-router-dom";
import './index.css';

class Header extends Component {
    render(){
    return (
        <>
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark p-2">
                <h2 className="navbar-heading">Port<span className="header-span">folio</span></h2>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse ml-lg-auto" id="navbarNav">
                    <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item mr-3">
                        <Link className="nav-link" to ="/"><p className="navbar-contents"><span className="contents-span">H</span>ome</p></Link>
                    </li>
                    <li class="nav-item mr-3">
                        <Link className="nav-link" to ="/about"><p className="navbar-contents"><span className="contents-span">A</span>bout</p></Link>
                    </li>
                    <li class="nav-item mr-3">
                        <Link className="nav-link" to ="/contact"><p className="navbar-contents"><span className="contents-span">C</span>ontact</p></Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>    
    )
    }
}

export default Header;
