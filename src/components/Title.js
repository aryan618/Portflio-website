import React from "react";
import aryan from "../assests/pics1.jpg"
function Title(props){
    // const name="Aryan Kumar Singh"
    // const leadtext="I am freelancer developer"
    const{name,leadtext}=props;
    return (
        <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={aryan}
            alt="name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadtext}</h4>
        </div>
      </div>
    </div>
    );
}

export default Title;