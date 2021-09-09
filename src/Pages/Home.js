import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './incs/Vmc';

import Service2 from '../img/first.jpeg';

function Home(){
    return(
        <div>
              <Slider/>
       
      <section className="section company">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center">
                      <h3 className="main-heading"><strong>OUR COMPANY</strong></h3>
                      <div className="underline mx-auto"></div>
                        <p className="pt-2">
                        What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and
                        </p>
                        <Link to="/about" className="btn btn-warning shadow"> read more </Link>
                      
                  </div>
              </div>
          </div>
      </section>
      {/*                                vision  */}
      <VMC/>
      {                                                /* services */ }
      <section className="section py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-center pb-3">
                    <h3 className="main-heading"><strong>OUR SERVICES</strong></h3>
                    <div className="underline mx-auto"></div>
                </div>
                
                    <div className="col-md-4 px-3 py-3">
                        <div className="card shadow">
                        <img src={Service2} className="w-100 border-bottom" alt="services"/>
                            <div className="card-body">
                                   <h6><strong>House</strong></h6>
                                   <div className="underline"></div>
                                       <p>
                                       What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </p>
                                       <Link to="/services" className="btn btn-sm btn-outline-primary ">Read more</Link>
                                   </div>
                            </div>

                        </div>
                        <div className="col-md-4 px-3 py-3 ">
                        <div className="card shadow">
                        <img src={Service2} className="w-100 border-bottom" alt="services"/>
                            <div className="card-body">
                            <h6><strong>Appartment</strong></h6>
                                   <div className="underline"></div>
                                       <p>
                                       What is Lorem Ipsum?
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                       </p>
                                       <Link to="/services" className="btn btn-sm btn-outline-primary ">Read more</Link>
                                   </div>
                            </div>

                        </div>
                       
                    </div>
                  
                </div>
            
        
    </section>
       </div>
    );
}

export default Home;