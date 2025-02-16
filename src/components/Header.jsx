import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			{/* Navbar & Hero Start */}
			<div className="container-fluid position-relative p-0">
				<nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
					<Link to="/" className="navbar-brand p-0">
						<h1 className="text-primary m-0">Tourify</h1>
						{/* <img src="img/logo.png" alt="Logo"> */}
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse">
						<span className="fa fa-bars" />
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<div className="navbar-nav ms-auto py-0">
							<Link to="/" className="nav-item nav-link">
								Home
							</Link>
							<Link to="/About" className="nav-item nav-link">
								About
							</Link>
							<Link to="/Services" className="nav-item nav-link">
								Services
							</Link>
							<Link to="/Packages" className="nav-item nav-link">
								Packages
							</Link>

							{/* Blogs */}
							<Link to="/Blogs" className="nav-item nav-link">
								Blogs
							</Link>

							<Link to="/Contact" className="nav-item nav-link">
								Contact
							</Link>
						</div>
						<Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
							Register
						</Link>
					</div>
				</nav>
			</div>
			{/* Navbar & Hero End */}
		</div>
	);
}

export default Header;
