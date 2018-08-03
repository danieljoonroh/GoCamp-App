import React from "react";
import Scrollchor from 'react-scrollchor';
import backgroundImage1 from "../images/backgroundImages/background4.png"

// this is the style that sets the background image ^
var suggestedStyle = {
    width: "100%",
    backgroundImage: "url(" + backgroundImage1 + ")",
    height: "650px",
}

class FindTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            departure: "",
            returning: "",
        }
    }

    addTrip() {
        this.props.createTrip(this.state);
        this.setState({
            location: "",
            departure: "",
            returning: ""
        })
    }

    addSuggestedTrip(index) {
        let newLocation = this.props.trips[index].location
        this.setState({
            location: newLocation
        })

    }

    render() {
        return (
            <div>
                <div id="suggested-trips">
                    <h1 className="text-center"> Suggested Trips: </h1>
                    <div className="row">
                        {
                            this.props.trips.map((suggestedTrip, index) => {
                                return (
                                    <div key={index} className="suggested-trips col-md-4">
                                        <img src={suggestedTrip.image} className="img-fluid images"/>
                                        <h3 id="sugtripstitle">{suggestedTrip.location}</h3>
                                        <Scrollchor to="#create-your-own-trip" className="nav-link">
                                            <button className="btn btn-outline-success float-right" onClick={this.addSuggestedTrip.bind(this, index)}> Add Trip </button>
                                        </Scrollchor>
                                        <details>
                                            <summary> More Info </summary>
                                            <p> {suggestedTrip.description} </p>
                                        </details>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br/>

                <div className="row" id="create-your-own-trip">
                    <div className="col-md-8 offset-md-2 planTrip" style={suggestedStyle}>
                        <h1> Plan Your Own Trip: </h1>
                        <div className="form-group">
                            <label> Location: </label>
                            <input type="text" className="form-control" id="location-input" placeholder="Redwood National Park" value={this.state.location} onChange={(event) => { this.setState({ location: event.target.value }) }}/>
                            <div className="row">
                                <div className="col-md-6">
                                    <label> Journey Begins: </label>
                                    <input type="date" className="form-control" value={this.state.departure} onChange={(event) => { this.setState({ departure: event.target.value }) }}/>
                                </div>
                                <div className="col-md-6">
                                    <label> Returning Home: </label>
                                    <input type="date" className="form-control" value={this.state.returning} onChange={(event) => { this.setState({ returning: event.target.value }) }}/>
                                </div>
                            </div>
                        </div>
                        <Scrollchor to="#wish-list" className="nav-link">
                            <button className="btn btn-outline-warning float-right" onClick={this.addTrip.bind(this)}> Add to My Trips </button>
                        </Scrollchor>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default FindTrip;