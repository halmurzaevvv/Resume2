import React from "react"

const Profile = () => {
	return (
		<div>
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
						<img src="../assets/title_img.jpg" alt="" class="profile_photo" />
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
		</div>
	)
}

export default Profile
