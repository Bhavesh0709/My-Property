import React from 'react';
import {Link} from 'react-router-dom';
function Footer() {
    return(
                <section className="section footer bg-dark text-white">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-4">
                                <h6><strong>Company Information</strong></h6>
                                <hr/>
                                <p className="text-white text-muted">
                                   Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem Lorem ipsum dorem 
                                </p>
                            </div>
                            <div className="col-md-4">
                            <h6><strong>Quick links</strong></h6>
                                <hr/>
                                <div><Link to="/" >Home</Link></div>
                                <div><Link to="/about">About</Link></div>
                                <div><Link to="/">Contact</Link></div>
                                <div><Link to="/">Dashboard</Link></div>
                            </div>
                            <div className="col-md-4">
                            <h6><strong>Contact Information</strong></h6>
                                <hr/>
                                <div><p className="text-white mb-1">CRPF campus nagpur </p></div>
                                <div><p className="text-white mb-1">9456724356 </p></div>
                                <div><p className="text-white mb-1">uyhgtjk </p></div>
                                <div><p className="text-white mb-1">786549 </p></div>

                            </div>
                        </div>

                    </div>
                </section>
    );
}

export default Footer;