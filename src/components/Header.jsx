import React from "react"

const Header = () => {
	return (
		<div>
			<header id="top">
				<div class="header__title">
					<img class="header__title_img" src="../assets/ava.jpg" alt="" />
					<div class="header__title_name">Ilham Halmurzaev</div>
					<div class="header__title_desc">Student | Programmer</div>
					<div class="header__title_icons">
						<a href="https://github.com/halmurzaevvv">
							<img class="title_icons" src="../assets/github.png" alt="" />
						</a>
						<a href="https://instagram.com/halmurzaevvv?igshid=YmMyMTA2M2Y=">
							<img class="title_icons" src="../assets/instagram.png" alt="" />
						</a>
						<a href="ilhamhalmurzaev@gmail.com">
							<img class="title_icons" src="./assets/gmail.png" alt="" />
						</a>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
