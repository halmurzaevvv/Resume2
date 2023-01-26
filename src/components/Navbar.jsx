import React from "react"

const Navbar = () => {
	return (
		<div>
			<div class="navbar">
				<a href="#top" class="navbar__logo">
					HALMURZAEV
				</a>
				<div class="navbar__list">
					<a href="#profile">About me</a>
					<a href="#skills">Skills</a>
					<a href="#timeline">EDU</a>
					<a href="#contacts">Contacts</a>
				</div>

				<div class="container nav-container">
					<input class="checkbox" type="checkbox" name="" id="" />
					<div class="hamburger-lines">
						<span class="line line1"></span>
						<span class="line line2"></span>
						<span class="line line3"></span>
					</div>

					<div class="menu-items">
						<a href="#profile">About me</a>
						<a href="#skills">Skills</a>
						<a href="#timeline">EDU</a>
						<a href="#contacts">Contacts</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
