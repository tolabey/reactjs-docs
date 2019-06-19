import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {


    render(){
        return(
          <div className="menu">
              <Link to="/fragments"><button>{"Fragment example Here"}</button></Link>
              <Link to="/refs"><button>{"Ref example Here"}</button></Link>
          </div>
        );
    }
}