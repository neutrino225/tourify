import React from "react";

function Packages() {
	return (
		<div>
			<div className="container-fluid bg-primary py-5 mb-5 hero-header">
				<div className="container py-5">
					<div className="row justify-content-center py-5">
						<div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
							<h1 className="display-3 text-white animated slideInDown">
								Packages
							</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb justify-content-center">
									<li className="breadcrumb-item">
										<a href="/">Home</a>
									</li>
									<li
										className="breadcrumb-item text-white active"
										aria-current="page">
										Packages
									</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>

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
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.1s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-1.jpg"
										alt=""
									/>
								</div>
								<div className="d-flex border-bottom">
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-map-marker-alt text-primary me-2" />
										Thailand
									</small>
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-calendar-alt text-primary me-2" />3 Days
									</small>
									<small className="flex-fill text-center py-2">
										<i className="fa fa-user text-primary me-2" />2 Persons
									</small>
								</div>
								<div className="text-center p-4">
									<h3 className="mb-0">PKR 141,720</h3>
									<div className="mb-3">
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
									</div>
									<p>
										Explore the vibrant culture and pristine beaches of
										Thailand. This package is perfect for couples seeking a
										relaxing yet adventurous escape.
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
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.3s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-2.jpg"
										alt=""
									/>
								</div>
								<div className="d-flex border-bottom">
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-map-marker-alt text-primary me-2" />
										Indonesia
									</small>
									<small className="flex-fill text-center border-end py-2">
										<i className="fa fa-calendar-alt text-primary me-2" />3 Days
									</small>
									<small className="flex-fill text-center py-2">
										<i className="fa fa-user text-primary me-2" />2 Persons
									</small>
								</div>
								<div className="text-center p-4">
									<h3 className="mb-0">PKR 138,920</h3>
									<div className="mb-3">
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
										<small className="fa fa-star text-primary" />
									</div>
									<p>
										Uncover the beauty of Indonesia’s islands. From breathtaking
										landscapes to cultural wonders, this package offers it all.
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
						<div
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay="0.5s">
							<div className="package-item">
								<div className="overflow-hidden">
									<img
										className="img-fluid"
										src="assets/img/package-3.jpg"
										alt=""
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
		</div>
	);
}

export default Packages;
