import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header>
			<nav class="navbar ">
				<div class="container">
					<div className="d-flex align-items-center">
						<a class="navbar-brand" href="javascript:;">
							<img src="/logo512.png" alt="" width="22px" />
						</a>

						<div class="navbar-wrap">
							<ul class="nav-list d-flex">
								<li class="nav-item">
									<NavLink to="/Home" activeClassName="active">
										Home
									</NavLink>
								</li>
								<li class="nav-item">
									<NavLink to="/postList">Posts</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
