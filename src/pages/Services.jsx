import React from "react";

function Services() {
	return (
		<div>
			<div className="container-fluid bg-primary py-5 mb-5 hero-header">
				<div className="container py-5">
					<div className="row justify-content-center py-5">
						<div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
							<h1 className="display-3 text-white animated slideInDown">
								Services
							</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb justify-content-center">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li
										className="breadcrumb-item text-white active"
										aria-current="page">
										Services
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* Service Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Services
						</h6>
						<h1 className="mb-5">Our Services</h1>
					</div>
					<div className="row g-4">
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-globe text-primary mb-4" />
									<h5>Worldwide Tours</h5>
									<p>
										Explore breathtaking destinations across the globe with
										tailored tours that suit your schedule and style.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-hotel text-primary mb-4" />
									<h5>Hotel Reservations</h5>
									<p>
										Stay in carefully curated hotels that offer comfort, luxury,
										and convenience at every destination.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-user text-primary mb-4" />
									<h5>Travel Guides</h5>
									<p>
										Discover hidden gems and cultural wonders with experienced
										travel guides who bring your journey to life.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.7s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-cog text-primary mb-4" />
									<h5>Event Management</h5>
									<p>
										From corporate events to destination weddings, we handle
										every detail to make your event unforgettable.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-plane text-primary mb-4" />
									<h5>Flight Bookings</h5>
									<p>
										Seamless and stress-free flight reservations with the best
										deals to get you where you need to go.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-suitcase text-primary mb-4" />
									<h5>Custom Travel Packages</h5>
									<p>
										Tailored travel experiences designed just for you, combining
										adventure, relaxation, and luxury.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-route text-primary mb-4" />
									<h5>Adventure Tours</h5>
									<p>
										Thrill-seekers rejoice! Embark on exciting adventures with
										curated outdoor activities and tours.
									</p>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-sm-6 wow fadeInUp"
							data-wow-delay="0.7s">
							<div className="service-item rounded pt-3">
								<div className="p-4">
									<i className="fa fa-3x fa-clock text-primary mb-4" />
									<h5>24/7 Customer Support</h5>
									<p>
										We're here for you anytime, anywhere. Count on us to make
										your journey smooth and stress-free.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Service End */}

			{/* Updated Testimonial Section */}
			<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
				<div className="container">
					<div className="text-center">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Testimonial
						</h6>
						<h1 className="mb-5">What Our Happy Clients Say</h1>
					</div>
					<div className="row gy-5 gx-4 justify-content-center">
						{/* Testimonial Card 1 */}
						<div className="col-lg-4 col-sm-6">
							<div className="testimonial-item bg-white text-center border rounded p-4 shadow-sm">
								<img
									className="rounded-circle shadow-sm p-1 mb-3"
									src="assets/img/client1.png"
									alt="Client 1"
									style={{ width: 80, height: 80 }}
								/>
								<h5 className="mb-1">Ayesha Malik</h5>
								<p>Lahore, Pakistan</p>
								<p className="text-muted">
									"Planning my trip was a breeze. The service was exceptional
									and every detail was taken care of. Highly recommended!"
								</p>
							</div>
						</div>

						{/* Testimonial Card 2 */}
						<div className="col-lg-4 col-sm-6">
							<div className="testimonial-item bg-white text-center border rounded p-4 shadow-sm">
								<img
									className="rounded-circle shadow-sm p-1 mb-3"
									src="assets/img/client2.png"
									alt="Client 2"
									style={{ width: 80, height: 80 }}
								/>
								<h5 className="mb-1">Hamza Ahmed</h5>
								<p>Karachi, Pakistan</p>
								<p className="text-muted">
									"From start to finish, my travel experience was flawless. No
									surprises and outstanding service. I'll definitely be back!"
								</p>
							</div>
						</div>

						{/* Testimonial Card 3 */}
						<div className="col-lg-4 col-sm-6">
							<div className="testimonial-item bg-white text-center border rounded p-4 shadow-sm">
								<img
									className="rounded-circle shadow-sm p-1 mb-3"
									src="assets/img/client3.png"
									alt="Client 3"
									style={{ width: 80, height: 80 }}
								/>
								<h5 className="mb-1">Bilal Khan</h5>
								<p>Islamabad, Pakistan</p>
								<p className="text-muted">
									"Booking with this service was seamless. Everything was
									handled with care and attention. My preferred choice now!"
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Updated Testimonial Section End */}
		</div>
	);
}

export default Services;
