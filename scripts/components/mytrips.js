import React from "react";

import pastPhoto1 from "../images/backgroundImages/beachCamping.jpg";
import pastPhoto2 from "../images/backgroundImages/background2.png";
import pastPhoto3 from "../images/logos/camping2.jpg";
import pastPhoto4 from "../images/pastphotos/photo1.jpg";
import pastPhoto5 from "../images/pastphotos/photo7.jpg";
import pastPhoto6 from "../images/pastphotos/photo8.jpg";
import pastPhoto7 from "../images/pastphotos/photo4.jpg";
import pastPhoto8 from "../images/pastphotos/photo6.jpg";

export default class MyTrips extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteTrip(index) {
        this.props.deletetrip(index)
    }

    render() {
        return (
            <div id="my-trips">
                <hr />
                <div id="wish-list">
                    <h1 className="text-center"> My Trips: </h1>
                    <br />
                    <h3> My Planned Trips: </h3>
                    <br />
                    <div className="row text-center">
                        {
                            this.props.data.map((trips, index) => {
                                return (
                                    <div key={index} className="col-md-3 my-trips-list">
                                        <h5><b><u> {trips.location} </u></b></h5>
                                        <br />
                                        <p><b> Planned Departure: </b> {trips.departure} </p>
                                        <p><b> Returning Home: </b> {trips.returning} </p>
                                        <button className="btn btn-sm btn-outline-warning" onClick={this.deleteTrip.bind(this, index)}> Remove </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br />
                <hr />

                <div id="past-trips">
                    <h3> Past Trips: </h3>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-2 past-trips-list">
                            <h6>Big Bear</h6>
                            <p>May 2017</p>
                        </div>
                        <div className="col-md-2 past-trips-list">
                            <h6>Redwood National Forest</h6>
                            <p>May 2015</p>
                        </div>
                        <div className="col-md-2 past-trips-list">
                            <h6>Banff National Park</h6>
                            <p>August 2016</p>
                        </div>
                        <div className="col-md-2 past-trips-list">
                            <h6>Grand Canyon National Park</h6>
                            <p>June 2013</p>
                        </div>
                    </div>
                    <details>
                        <summary> See More Past Trips: </summary>
                        <div className="row text-center justify-content-center">
                            <div className="col-md-2 past-trips-list">
                                <h6>Bryce Canyon</h6>
                                <p>July 2015</p>
                            </div>
                            <div className="col-md-2 past-trips-list">
                                <h6>Sequioa National Park</h6>
                                <p>September 2016</p>
                            </div>
                            <div className="col-md-2 past-trips-list">
                                <h6>Na Pali Coast</h6>
                                <p>March 2016</p>
                            </div>
                            <div className="col-md-2 past-trips-list">
                                <h6>Acadia National Park</h6>
                                <p>August 2015</p>
                            </div>
                            <div className="col-md-2 past-trips-list">
                                <h6>King's Canyon National Park</h6>
                                <p>September 2016</p>
                            </div>
                        </div>
                    </details>
                    <div className="pastTripPhotosDiv row">
                        <div className="col-md-3">
                            <img src={pastPhoto1} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto2} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto3} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto4} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto5} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto6} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto7} className="pastTripPhotos" />
                        </div>
                        <div className="col-md-3">
                            <img src={pastPhoto8} className="pastTripPhotos" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

