import logo from "./logo.svg"
import "./App.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Skills from "./components/Skills"
import Edu from "./components/Edu"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="App">
			{/* <Navbar />
      <Header />
      <Profile />
      <Skills />
      <Edu />
      <Footer /> */}
			<div class="container">
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
				{/* <!-- navbar end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				{/* <!-- header start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}
				<header id="top">
					<div class="header__title">
						<img class="header__title_img" src="./assets/ava.jpg" alt="" />
						<div class="header__title_name">Ilham Halmurzaev</div>
						<div class="header__title_desc">Student | Programmer</div>
						<div class="header__title_icons">
							<a href="https://github.com/halmurzaevvv">
								<img class="title_icons" src="./assets/github.png" alt="" />
							</a>
							<a href="https://instagram.com/halmurzaevvv?igshid=YmMyMTA2M2Y=">
								<img class="title_icons" src="./assets/instagram.png" alt="" />
							</a>
							<a href="ilhamhalmurzaev@gmail.com">
								<img class="title_icons" src="./assets/gmail.png" alt="" />
							</a>
						</div>
					</div>
				</header>

				{/* <!-- header end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				{/* <!-- profile start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}
				<div id="profile" class="profile">
					<div class="profile__block_title">
						<h2 class="block_title_name">My profile!</h2>
						<p class="block_title_desk">
							I am a front-end developer with little experience but a lot of
							potential !
						</p>
					</div>
					<hr />
					<div class="profile__block">
						<div class="profile__block_left">
							<h3 class="profile__block_about-me">About me</h3>
							<p class="block_about-me-desk">
								Hello reader! My name is Ilhamzhan! I am 19 years old. I am a
								future A front-end developer. This is my first site which I
								created myself!🤯
							</p>
						</div>
						<div class="profile__block_center">
							<img src="./assets/title_img.jpg" alt="" class="profile_photo" />
						</div>
						<div class="profile__block_right">
							<h3 class="profile__block_details">Details</h3>
							<p class="profile__block_details_desc">
								<strong>Имя: </strong>
								<br />
								Ilkhamzhan Khalmurzaev
								<br />
								<strong>Age:</strong>
								<br />
								19 y.o.
								<br />
								<strong>Place of residence:</strong>
								<br />
								Bishkek, Kyrgyzstan, Earth
							</p>
							<a href="https://instagram.com/halmurzaevvv?igshid=YmMyMTA2M2Y=">
								<img
									class="profile__follow_me"
									src="./assets/follow-me-on-instagram-retro-badge.png"
									alt=""
								/>
							</a>
						</div>
					</div>
				</div>
				{/* <!-- profile end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				{/* <!-- skills start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}
				<div id="skills" class="skills-bars">
					<div class="skills">
						<div class="skills-bar">
							<h2 class="skills-title">Skills</h2>

							<div class="bar">
								<div class="info">
									<span>HTML</span>
								</div>
								<div class="progress-line">
									<span class="html"></span>
								</div>
								<div class="bar">
									<div class="info">
										<span>CSS</span>
									</div>
									<div class="progress-line">
										<span class="css"></span>
									</div>
									<div class="bar">
										<div class="info">
											<span>BOOTSTRAP</span>
										</div>
										<div class="progress-line">
											<span class="bootstrap"></span>
										</div>
										<div class="bar">
											<div class="info">
												<span>JAVASCRIPT</span>
											</div>
											<div class="progress-line">
												<span class="javascript"></span>
											</div>
											<div class="bar">
												<div class="info">
													<span>MUI</span>
												</div>
												<div class="progress-line">
													<span class="mui"></span>
												</div>
											</div>
											<div class="info">
												<span>REACT</span>
											</div>
											<div class="progress-line">
												<span class="c"></span>
											</div>
										</div>
										<div class="info">
											<span>BEM</span>
										</div>
										<div class="progress-line">
											<span class="bem"></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- skills end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				{/* <!-- edu start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				<h4 id="timeline" class="timeline_title">
					EDU
				</h4>
				<ul class="timeline">
					{/* <!-- Item 1 --> */}
					<li>
						<div class="direction-r">
							<div class="flag-wrapper">
								<span class="flag">RAWWWWWWRRR 🐢🦂</span>
								<span class="time-wrapper">
									<span class="time">65 B.C.</span>
								</span>
							</div>
							<div class="desc">Dinosaurs roamed the Earth</div>
						</div>
					</li>

					{/* <!-- Item 2 --> */}
					<li>
						<div class="direction-l">
							<div class="flag-wrapper">
								<span class="flag">Школьник👶</span>
								<span class="time-wrapper">
									<span class="time">2009 - 2020</span>
								</span>
							</div>
							<div class="desc">
								Ivanovka School-Gymnasium №1 named after Aitmatov Ch.
							</div>
						</div>
					</li>

					{/* <!-- Item 3 --> */}
					<li>
						<div class="direction-r">
							<div class="flag-wrapper">
								<span class="flag">Student of KNU</span>
								<span class="time-wrapper">
									<span class="time">2020 - 2022</span>
								</span>
							</div>
							<div class="desc">
								Kyrgyz National University named after Balasagyn
							</div>
						</div>
					</li>
					{/* <!-- Item 4 --> */}
					<li>
						<div class="direction-l">
							<div class="flag-wrapper">
								<span class="flag">Student Makers</span>
								<span class="time-wrapper">
									<span class="time">2022 - 2023 </span>
								</span>
							</div>
							<div class="desc">Student JS vol. 13 evening</div>
						</div>
					</li>
				</ul>

				{/* <!-- edu end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				{/* <!-- footer start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}

				<footer id="contacts">
					<div class="footer__block">
						<div class="footer__block_desc">
							<div class="desc__items">
								<a href="#top">
									{" "}
									<p class="footer_logo">HALMURZAEV</p>
								</a>
							</div>
							<div class="desc__items">
								<h3 class="items_title">Social</h3>
								<a href="https://instagram.com/halmurzaevvv?igshid=YmMyMTA2M2Y=">
									<img
										class="social_items"
										src="./assets/instagram.png"
										alt=""
									/>
								</a>

								<a href="https://github.com/halmurzaevvv">
									<img class="social_items" src="./assets/github.png" alt="" />
								</a>
								<a href="ilhamhalmurzaev@gmail.com">
									<img class="social_items" src="./assets/gmail.png" alt="" />
								</a>
							</div>
						</div>
					</div>
					<hr />
					<div class="footer__info">© 2022 - All rights reserved</div>
				</footer>

				{/* <!-- footer end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> --> */}
			</div>
		</div>
	)
}

export default App
