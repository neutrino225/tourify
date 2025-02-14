import React from "react";

export default function Home() {
	return (
		<div>
			<div className="min-h-screen container-fluid hero-header-landing bg-primary py-5 mb-5">
				<div className="container py-5">
					<div className="row justify-content-center py-5">
						<div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
							<h1 className="display-3 text-white mb-3 animated slideInDown">
								Enjoy Your Vacation With Us
							</h1>
							<p className="fs-4 text-white mb-4 animated slideInDown">
								Want to travel the world hassle-free? <br />
								We are here to help you.
							</p>
							<div className="position-relative w-75 mx-auto animated slideInDown">
								<input
									className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
									type="text"
									placeholder="Eg: Thailand"
								/>
								<button
									type="button"
									className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
									style={{ marginTop: 7 }}>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* About Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="row g-5">
						<div
							className="col-lg-6 wow fadeInUp"
							data-wow-delay="0.1s"
							style={{ minHeight: 400 }}>
							<div className="position-relative h-100">
								<img
									className="img-fluid position-absolute w-100 h-100"
									src="assets/img/about.jpg"
									alt=""
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
							<p className="mb-4">
								Your gateway to unforgettable travel experiences. At Tourify, we
								are passionate about creating seamless journeys that turn your
								dreams into reality. As the premier travel agency in the world,
								we pride ourselves on offering unparalleled service and
								expertise.
							</p>
							<p className="mb-4">
								From luxurious first-class flights to handpicked accommodations
								and the latest model vehicles, we ensure every aspect of your
								journey is meticulously planned for comfort and style. With over
								150 premium city tours and 24/7 dedicated service, we guarantee
								a personalized travel experience that exceeds expectations.
							</p>
							<p className="mb-4">
								Explore the world with confidence. Let Tourify be your trusted
								companion in discovering the wonders of global travel. Join us
								on a journey where every moment is crafted with care, ensuring
								your vacation is nothing short of extraordinary.
							</p>
							<div className="row gy-2 gx-4 mb-4">
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										First Class Flights
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Handpicked Hotels
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />5 Star
										Accommodations
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										Latest Model Vehicles
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										150 Premium City Tours
									</p>
								</div>
								<div className="col-sm-6">
									<p className="mb-0">
										<i className="fa fa-arrow-right text-primary me-2" />
										24/7 Service
									</p>
								</div>
							</div>
							<a className="btn btn-primary py-3 px-5 mt-2" href="/">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* About End */}

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

			{/* Destination Start */}
			<div className="container-xxl py-5 destination">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Destination
						</h6>
						<h1 className="mb-5">Popular Destination</h1>
					</div>
					<div className="row g-3">
						<div className="col-lg-7 col-md-6">
							<div className="row g-3">
								<div
									className="col-lg-12 col-md-12 wow zoomIn"
									data-wow-delay="0.1s">
									<a
										className="position-relative d-block overflow-hidden"
										href="">
										<img
											className="img-fluid"
											src="assets/img/destination-1.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											30% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"></div>
									</a>
								</div>
								<div
									className="col-lg-6 col-md-12 wow zoomIn"
									data-wow-delay="0.3s">
									<a
										className="position-relative d-block overflow-hidden"
										href="">
										<img
											className="img-fluid"
											src="assets/img/destination-2.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											25% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"></div>
									</a>
								</div>
								<div
									className="col-lg-6 col-md-12 wow zoomIn"
									data-wow-delay="0.5s">
									<a
										className="position-relative d-block overflow-hidden"
										href="">
										<img
											className="img-fluid"
											src="assets/img/destination-3.jpg"
											alt=""
										/>
										<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
											35% OFF
										</div>
										<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"></div>
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-lg-5 col-md-6 wow zoomIn"
							data-wow-delay="0.7s"
							style={{ minHeight: 350 }}>
							<a
								className="position-relative d-block h-100 overflow-hidden"
								href="">
								<img
									className="img-fluid position-absolute w-100 h-100"
									src="assets/img/destination-4.jpg"
									alt=""
									style={{ objectFit: "cover" }}
								/>
								<div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
									20% OFF
								</div>
								<div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2"></div>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* Destination Start */}

			{/* Package Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Packages
						</h6>
						<h1 className="mb-5">Exclusive Vacation Packages</h1>
					</div>
					<div className="row g-4 justify-content-center">
						{/* Skardu Package */}
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-1.jpg"
										alt="Skardu"
									/>
								</div>
								<div className="d-flex border-bottom">
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-map-marker-alt text-primary me-2" />
										Skardu
									</small>
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-calendar-alt text-primary me-2" />4 Days
									</small>
									<small className="flex-fill text-center py-2">
										<i className="fa fa-user text-primary me-2" />2 Persons
									</small>
								</div>
								<div className="text-center p-4">
									<h3 className="mb-0">PKR 120,000</h3>
									<div className="mb-3">
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star-half-alt text-primary" />
									</div>
									<p>
										Experience the breathtaking beauty of Skardu, surrounded by
										majestic mountains and serene lakes.
									</p>
									<div className="d-flex justify-content-center mb-2">
										<a
											href="#"
											className="btn btn-sm btn-primary px-3 border-end"
											style={{ borderRadius: "30px 0 0 30px" }}>
											Read More
										</a>
										<a
											href="#"
											className="btn btn-sm btn-primary px-3"
											style={{ borderRadius: "0 30px 30px 0" }}>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Hunza Package */}
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-2.jpg"
										alt="Hunza"
									/>
								</div>
								<div className="d-flex border-bottom">
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-map-marker-alt text-primary me-2" />
										Hunza
									</small>
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-calendar-alt text-primary me-2" />5 Days
									</small>
									<small className="flex-fill text-center py-2">
										<i className="fa fa-user text-primary me-2" />2 Persons
									</small>
								</div>
								<div className="text-center p-4">
									<h3 className="mb-0">PKR 135,000</h3>
									<div className="mb-3">
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
									</div>
									<p>
										Explore the wonders of Hunza Valley with its stunning
										landscapes, historic forts, and vibrant culture.
									</p>
									<div className="d-flex justify-content-center mb-2">
										<a
											href="#"
											className="btn btn-sm btn-primary px-3 border-end"
											style={{ borderRadius: "30px 0 0 30px" }}>
											Read More
										</a>
										<a
											href="#"
											className="btn btn-sm btn-primary px-3"
											style={{ borderRadius: "0 30px 30px 0" }}>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Malaysia Package (Remains the Same) */}
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-3.jpg"
										alt="Malaysia"
									/>
								</div>
								<div className="d-flex border-bottom">
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-map-marker-alt text-primary me-2" />
										Malaysia
									</small>
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-calendar-alt text-primary me-2" />3 Days
									</small>
									<small className="flex-fill text-center py-2">
										<i className="fa fa-user text-primary me-2" />2 Persons
									</small>
								</div>
								<div className="text-center p-4">
									<h3 className="mb-0">PKR 152,920</h3>
									<div className="mb-3">
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
									</div>
									<p>
										Discover Malaysia's rich culture, stunning beaches, and
										lively cities. This package is perfect for those looking for
										an unforgettable trip.
									</p>
									<div className="d-flex justify-content-center mb-2">
										<a
											href="#"
											className="btn btn-sm btn-primary px-3 border-end"
											style={{ borderRadius: "30px 0 0 30px" }}>
											Read More
										</a>
										<a
											href="#"
											className="btn btn-sm btn-primary px-3"
											style={{ borderRadius: "0 30px 30px 0" }}>
											Book Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Package End */}

			{/* Booking Start */}
			<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
				<div className="container">
					<div className="booking p-5">
						<div className="row g-5 align-items-center">
							<div className="col-md-6 text-white">
								<h6 className="text-white text-uppercase">Booking</h6>
								<h1 className="text-white mb-4">Plan Your Dream Vacation</h1>
								<p className="mb-4">
									Looking for an unforgettable getaway? Whether you want a
									tranquil beach vacation or an adventure-packed trip, our
									online booking makes it easy for you to plan every detail with
									ease.
								</p>
								<p className="mb-4">
									Our team is committed to ensuring your travel experience is
									seamless and enjoyable. Customize your trip, pick your dream
									destination, and let us handle the rest. Book now to create
									memories that will last a lifetime.
								</p>
								<a className="btn btn-outline-light py-3 px-5 mt-2" href="">
									Learn More
								</a>
							</div>
							<div className="col-md-6">
								<h1 className="text-white mb-4">Book Your Perfect Tour</h1>
								<form>
									<div className="row g-3">
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="text"
													className="form-control bg-transparent"
													id="name"
													placeholder="Your Name"
												/>
												<label htmlFor="name">Your Name</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<input
													type="email"
													className="form-control bg-transparent"
													id="email"
													placeholder="Your Email"
												/>
												<label htmlFor="email">Your Email</label>
											</div>
										</div>
										<div className="col-md-6">
											<div
												className="form-floating date"
												id="date3"
												data-target-input="nearest">
												<input
													type="text"
													className="form-control bg-transparent datetimepicker-input"
													id="datetime"
													placeholder="Preferred Date & Time"
													data-target="#date3"
													data-toggle="datetimepicker"
												/>
												<label htmlFor="datetime">Date &amp; Time</label>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-floating">
												<select
													className="form-select bg-transparent"
													id="select1">
													<option value={1}>Maldives</option>
													<option value={2}>Paris</option>
													<option value={3}>Bali</option>
												</select>
												<label htmlFor="select1">Destination</label>
											</div>
										</div>
										<div className="col-12">
											<div className="form-floating">
												<textarea
													className="form-control bg-transparent"
													placeholder="Special Request or Additional Details"
													id="message"
													style={{ height: 100 }}
													defaultValue={""}
												/>
												<label htmlFor="message">Special Request</label>
											</div>
										</div>
										<div className="col-12">
											<button
												className="btn btn-outline-light w-100 py-3"
												type="submit">
												Confirm Booking
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Booking End */}

			{/* Process Start */}
			<div className="container-xxl py-5">
				<div className="container">
					<div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
						<h6 className="section-title bg-white text-center text-primary px-3">
							Process
						</h6>
						<h1 className="mb-5">3 Simple Steps to Your Dream Trip</h1>
					</div>
					<div className="row gy-5 gx-4 justify-content-center">
						{/* Step 1 */}
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}>
									<i className="fa fa-globe fa-3x text-white" />
								</div>
								<h5 className="mt-4">Choose Your Destination</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Start your adventure by selecting a destination from our wide
									range of breathtaking travel locations. Whether it’s a serene
									beach or a bustling cityscape, the choice is yours.
								</p>
							</div>
						</div>

						{/* Step 2 */}
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}>
									<i className="fa fa-dollar-sign fa-3x text-white" />
								</div>
								<h5 className="mt-4">Make a Secure Payment</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Book your trip in just a few clicks with our secure online
									payment system. No stress, no hassle — simply make your
									payment and get ready for your journey.
								</p>
							</div>
						</div>

						{/* Step 3 */}
						<div
							className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="position-relative border border-primary pt-5 pb-4 px-4">
								<div
									className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
									style={{ width: 100, height: 100 }}>
									<i className="fa fa-plane fa-3x text-white" />
								</div>
								<h5 className="mt-4">Take Off & Enjoy</h5>
								<hr className="w-25 mx-auto bg-primary mb-1" />
								<hr className="w-50 mx-auto bg-primary mt-0" />
								<p className="mb-0">
									Pack your bags and get ready to fly! Enjoy a seamless travel
									experience from the moment you step onto the plane to the
									unforgettable adventures awaiting you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Process End */}

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
