/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";

import React                                 from "react";
import Reflux                                from "reflux";
import { Link }                              from "react-router";
import { Actions, Store }                    from "./config";
import { Spinner }                           from "widgets";


let Followers = React.createClass({

    mixins: [Reflux.connect(Store)],

    componentDidMount() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    componentWillReceiveProps() {
        Actions.LOAD_INITIAL_DATA(this.props.params);
    },

    componentDidUpdate() {

        if (this.state.followersResponse.length > 1) {
            var swiper = new Swiper("#swiper-followers", {
                slidesPerView: "auto",
                spaceBetween: 5
            });
        }
    },

    render() {
        var self = this;
        let items = function (item) {
            return (
                <Link to={`/user/${item.login}`} key={item.id} className="swiper-slide slider-container">
                    <div style={{backgroundImage: `url(${item.avatar_url})`}} className="image-secondary-center"></div>
                    <div className="text-botton-center">{item.login}</div>
                </Link>
            );
        };

        return (
            <div>
                <h2>Followers</h2>
                <Spinner status={this.state.spinnerStatus}/>
                <div id="swiper-followers" className="swiper-container slider-main-container" data-snap-ignore="true">
                    <div className="swiper-wrapper">
                        {this.state.followersResponse.map(items)}
                    </div>
                </div>
            </div>
        );

    }

});

module.exports = Followers;

