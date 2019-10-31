import React from "react";
import sprout from "../../img/sprout.png";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-1">
		<h1>L E T T U S</h1>
		<h3>Register for free!</h3>
		<h4> Let us grow with you :)</h4>
		<Link to="/register">
			<button className="btn btn-success btn-lg mb-3">Register</button>
		</Link>
		<p>
			<img src={sprout} style={{ height: "350px", width: "350px" }} />
		</p>
		<p> Once registered, you will be able to archive and monitor specific grow operations.</p>
	</div>
);
