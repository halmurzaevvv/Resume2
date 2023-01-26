import React from "react"

const Footer = () => {
	return (
		<div>
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
								<img class="social_items" src="./assets/instagram.png" alt="" />
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
		</div>
	)
}

export default Footer
