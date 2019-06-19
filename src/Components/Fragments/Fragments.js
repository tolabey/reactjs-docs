import React, {Component, Fragment} from "react";


export default class Fragments extends Component {

    userInfoList = [
        {name: "Aaron", age: 27, city: "Çorum"},
        {name: "Cony", age: 15, city: "Kastamonu"},
        {name: "Siyvia", age: 35, city: "Çankırı"},
        {name: "Thean", age: 23, city: "Yozgat"},
        {name: "Kimmi", age: 65, city: "Sivas"},
        {name: "Aldous", age: 47, city: "Tokat"},
    ];

    listElems() {
        return this.userInfoList.map(each => {
            return(
                <Fragment>
                    <div className="name">{each.name}</div>
                    <div className="city">{each.city}</div>
                    <div>----------------------------</div>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div className="fragments">
                    {this.listElems()}
            </div>
        );
    }
}