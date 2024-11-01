export function Services() {
    return (
        <>
            <section id="services">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="text-uppercase section-heading">Services</h2>
                            <h3 className="text-muted section-subheading">Our happiness is customer happiness</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-music fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Music Concert</h4>
                            <p className="text-muted">Enjoy live performances with our customizable music concert venues. Perfect for bands, solo artists, and music events of any scale.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-glass fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Pub and Party</h4>
                            <p className="text-muted">Experience an unforgettable night at our pub and party venues. Ideal for celebrations, corporate events, or casual get-togethers.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                <i className="fa fa-bullhorn fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="section-heading">Presentation</h4>
                            <p className="text-muted">Host professional presentations or seminars in our well-equipped conference rooms. Perfect for corporate meetings, workshops, and lectures.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}