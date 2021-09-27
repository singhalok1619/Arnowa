import React from 'react';


class Signup extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      firstname : "",
      email : "",
      passwrod: ""
    }
    this.validateForm = this.validateForm.bind(this);

  }
  validateForm(){
    console.log('=.......');
  }

    render(){
        return(<>
        <div className="border"><div className="heading"><h2>ARNOWA</h2></div></div>
      
          
          
          <div className="container register">
                          <div className="row">
                              <div className="col-md-3 register-left">
                                  <h3>Welcome to</h3>
                                  <h5>Arnowa</h5>
                                                  <div className="form-group">
                                                      <input type="email" className="form-control" placeholder="E-mail Address *" value="" />
                                                  </div>
                                  <div className="form-group">
                                                      <input type="password" className="form-control" placeholder="Password *" value="" />
                                                  </div>
                                  <input type="submit" name="" value="Login"/><br/>
                              </div>
                                <div className="col-md-9 register-right">
                                    
                                  <div className="tab-content" id="myTabContent">
                                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                          <h3 className="register-heading">New User ?</h3>
                                          <div className="row register-form">
                                              <div className="col-md-6">
                                                  <div className="form-group">
                                                      <input type="text" className="form-control" name="firstname" placeholder="Name *" value="" />
                                                  </div>
                                                  
                                                  <div className="form-group">
                                                      <input type="password" className="form-control" name="password" placeholder="Password *" value="" />
                                                  </div>
                                                  <div className="form-group">
                                                      <input type="password" className="form-control"  placeholder="Confirm Password *" value="" />
                                                  </div>
                                                  <div className="form-group">
                                                      <div className="maxl">
                                                          
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-md-6">
                                                  <div className="form-group">
                                                      <input type="email" className="form-control" name="email" placeholder="Your Email *" value="" />
                                                  </div>
                                                  
                                                  <div className="form-group">
                                                  
                                                  </div>
                                                  <input type="submit" className="btnRegister"  value="Sign Up"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                          {/* <h3  className="register-heading">Apply as a Hirer</h3> */}
                                          {/* <div className="row register-form">
                                              <div className="col-md-6">
                                                  <div className="form-group">
                                                      <input type="text" className="form-control" placeholder="Name *" value="" />
                                                  </div>
                                                  
                                                  <div className="form-group">
                                                      <input type="email" className="form-control" placeholder="Email *" value="" />
                                                  </div>
                                              </div> */}
                                              {/* <div className="col-md-6">
                                                  <div className="form-group">
                                                      <input type="password" className="form-control" placeholder="Password *" value="" />
                                                  </div>
                                                  <div className="form-group">
                                                      <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                                  </div>
                                                  <div className="form-group">
                                                      
                                                  </div> */}
                                                  <input type="submit" className="btnRegister"  value="Sign Up" onClick={this.validateForm}/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          {/* </div> */}
          
                      {/* </div> */}
                      </>
        )
    }

}

export default Signup;