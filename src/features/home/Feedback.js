export function Feedback() {
    return (
      <>
          <section className="py-5">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                          <h2 className="text-uppercase" style={{textAlign: "center"}}>Thanks for investing</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-6 col-md-6 col-xl-6 col-xxl-6"><a href="https://www.airasia.com/en/gb"><img alt={"c"} className="img-fluid d-block align-items-center mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/ai-template-air-asia-full-1.webp?alt=media&token=ccf9ff10-1688-4cf7-871d-ef8a67fde09d" width="186" height="93" style={{margin: "50px"}}/></a></div>
                      <div className="col-sm-6 col-md-6 col-xl-6 col-xxl-6"><a href="https://www.ikea.com/us/en/"><img alt={"Hi"} className="img-fluid d-block mx-auto" src="https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/ikea-logo-0.webp?alt=media&token=40dc6369-fe91-482b-8d00-d599412a8dfe" width="195" height="195"/></a></div>
                  </div>
              </div>
          </section>
          <section id="contact" style={{backgroundImage:"url('https://firebasestorage.googleapis.com/v0/b/ryukingdom-48b31.appspot.com/o/map-image.png?alt=media&token=e6b48205-8297-4a6a-bf05-12928a94494f')"}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="text-uppercase section-heading">Feedback us</h2>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <form id="contactForm" name="contactForm">
                              <div className="row">
                                  <div className="col-md-6">
                                      <div className="form-group mb-3"><input className="form-control" type="text" id="name" placeholder="Your Name *" required=""/><small className="form-text text-danger flex-grow-1 lead"></small></div>
                                      <div className="form-group mb-3"><input className="form-control" type="email" id="email" placeholder="Your Email *" required=""/><small className="form-text text-danger lead"></small></div>
                                      <div className="form-group mb-3"><input className="form-control" type="tel" placeholder="Your Phone *" required=""/><small className="form-text text-danger lead"></small></div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group mb-3"><textarea className="form-control" id="message" placeholder="Your Message *" required=""></textarea><small className="form-text text-danger lead"></small></div>
                                  </div>
                                  <div className="w-100"></div>
                                  <div className="col-lg-12 text-center">
                                      <div id="success"></div><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </>
    );
}