import "../../assets/css/footer.css";
export function Footer() {
    return (<>
        <footer>
            <div className="container text-md-left">
                <div className="row text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">RYUKingdom company</h5>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">Products</h5>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Product 1</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Product 1</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Product 1</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Product 1</a></p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">Useful Links</h5>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Your Account</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Your Account</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Your Account</a></p>
                        <p><a href={"/alo"} className="text-light" style={{textDecoration : "none"}}>Your Account</a></p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase text-warning mb-4 font-weight-bold">Contact</h5>
                        <p><i className="fas fa-home mr-3"></i> 123 Street, City, State</p>
                        <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
                <hr/>
                <div className="mb-4">
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p className="text-md-left">© 2024 Company Name. All rights reserved.</p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"}
                                                                        className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href={"/alo"} className="btn-floating btn-sm text-light"
                                                                        style={{fontSize:"23px"}}><i
                                        className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
        );
        }