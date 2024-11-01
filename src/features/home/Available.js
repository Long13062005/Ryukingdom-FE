export function Available(){
    return(
      <>
          <section className="bg-light" id="portfolio">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="text-uppercase section-heading">Room</h2>
                          <h3 className="text-muted section-subheading" style={{margin: "0 0 20px"}}>"The best place is our Hotel"</h3>
                          <h3 className="text-muted section-subheading" style={{margin: "0px 0 35px",fontSize: "23px"}}>Promotion for first customer booking : 50% !!!</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal1" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/standard-room.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Standard Room</h4>
                              <p className="text-muted">A well-appointed room with modern amenities, offering comfort and convenience with a choice of king-size or twin beds. Ideal for business travelers or short stays.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal2" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/dex-room.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4><strong>Deluxe Room</strong></h4>
                              <p className="text-muted">Spacious rooms with enhanced décor and a touch of luxury. Includes a comfortable seating area, work desk, and stunning views of the city or sea.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal3" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/ex-room.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Executive Room</h4>
                              <p className="text-muted">Elegantly designed with additional space and premium services. Guests have access to executive lounges offering complimentary breakfast, snacks, and business facilities.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal4" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/suite.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Suite</h4>
                              <p className="text-muted">Expansive and luxurious suites with a separate bedroom and living room. Some suites may offer kitchenettes, dining areas, and additional guest services, ideal for longer stays or family trips.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal5" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/suite-big.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Presidential Suite</h4>
                              <p className="text-muted">The epitome of luxury, offering grand interiors, private dining areas, multiple rooms, and exclusive services like a personal butler. It’s designed for VIP guests seeking the highest level of comfort.</p>
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                          <div className="portfolio-hover">
                              <div className="portfolio-hover-content"><i className="fa fa-book fa-3x"></i></div>
                          </div><img className="img-fluid" src="assets/img/room/villa.jpg"/>
                      </a>
                          <div className="portfolio-caption">
                              <h4>Villa</h4>
                              <p className="text-muted">For those looking for seclusion, luxury villas provide private entrances, pools, gardens, and expansive living spaces. Perfect for guests desiring exclusivity and privacy.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
    );
}