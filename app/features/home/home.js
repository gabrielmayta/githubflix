/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React            from "react";
import { Link }         from "react-router";


class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello GFT!</h1>
                <Link to="/detail">Detail</Link>
            </div>
        );
    }

}

export default Home;

