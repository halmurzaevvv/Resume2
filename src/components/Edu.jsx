import React from "react"

const Edu = () => {
	return (
		<div>
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
							Kyrgyz National University named after Aitmatov Ch.
						</div>
					</div>
				</li>
				{/* <!-- Item 4 --> */}
				<li>
					<div class="direction-l">
						<div class="flag-wrapper">
							<span class="flag">Student Makers</span>
							<span class="time-wrapper">
								<span class="time">2022 - 20XX </span>
							</span>
						</div>
						<div class="desc">Student JS vol. 13 evening</div>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Edu
