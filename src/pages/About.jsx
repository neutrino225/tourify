import React from "react";

function About() {
	return (
		<div>
			{/* Hero Section Start */}
			<div className="container-fluid bg-primary py-5 mb-5 hero-header">
				<div className="container py-5">
					<div className="row justify-content-center py-5">
						<div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
							<h1 className="display-3 text-white animated slideInDown">
								About Us
							</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb justify-content-center">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li
										className="breadcrumb-item text-white active"
										aria-current="page">
										About
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* About Section Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-5">
						<div
							className="col-lg-6 wow fadeInUp"
							data-wow-delay="0.1s"
							style={{ minHeight: 400 }}>
							<div className="position-relative h-100">
								<img
									className="img-fluid position-absolute w-100 h-100 rounded"
									src="assets/img/about.jpg"
									alt="About Us"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
							<h6 className="section-title bg-white text-start text-primary pe-3">
								About Us
							</h6>
							<h1 className="mb-4">
								Welcome to <span className="text-primary">Tourify</span>
							</h1>
							<p className="mb-4">The best travel agency in the world!</p>
							<p className="mb-4">
								Want to travel the world hassle-free? Tourify is here to help
								you with that. We offer the best travel packages for you to
								enjoy your vacation to the fullest. Our services include
								first-class flights, handpicked hotels, 5-star accommodations,
								premium city tours, and 24/7 support.
							</p>
							<div className="row gy-2 gx-4 mb-4">
								{[
									"First Class Flights",
									"Handpicked Hotels",
									"5 Star Accommodations",
									"Latest Model Vehicles",
									"150 Premium City Tours",
									"24/7 Service",
								].map((feature, index) => (
									<div key={index} className="col-sm-6">
										<p className="mb-0">
											<i className="fa fa-arrow-right text-primary me-2" />
											{feature}
										</p>
									</div>
								))}
							</div>
							<a className="btn btn-primary py-3 px-5 mt-2" href="#">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* About Section End */}

			{/* Team Section Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Travel Guide
						</h6>
						<h1 className="mb-5">Meet Our Guide</h1>
					</div>
					<div className="row g-4">
						{[1, 2, 3, 4].map((item, index) => (
							<div
								key={index}
								className="col-lg-3 col-md-6 wow fadeInUp"
								data-wow-delay={`${0.1 * (index + 1)}s`}>
								<div className="team-item">
									<div className="overflow-hidden">
										<img
											className="img-fluid rounded"
											src={`assets/img/team-${item}.jpg`}
											alt={`Team Member ${item}`}
										/>
									</div>
									<div className="position-relative d-flex justify-content-center mt-3">
										{[
											{ icon: "facebook-f", link: "#" },
											{ icon: "twitter", link: "#" },
											{ icon: "instagram", link: "#" },
										].map((social, idx) => (
											<a
												key={idx}
												className="btn btn-square mx-1"
												href={social.link}>
												<i className={`fab fa-${social.icon}`} />
											</a>
										))}
									</div>
									<div className="text-center p-4">
										<h5 className="mb-0">Full Name</h5>
										<small>Designation</small>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Team Section End */}
		</div>
	);
}

export default About;
