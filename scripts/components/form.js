import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ""
        }
    }

    addItem() {
        this.props.addItem({ todos: this.state.todos })
        this.setState({
            todos:  ""
        })
    }

    render() {
        return (
            <div className="container text-center" id="itinerary">
                <h2 className="itineraryTitle"> Itinerary </h2>
                <form className="checklist">
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={this.state.todos} onChange={(event) => { this.setState({ todos: event.target.value }) }} />
                        </div>
                    </div>
                </form>
                <div className="addButton">
                    <button type="button" className="btn btn-success" onClick={this.addItem.bind(this)}> Add Itinerary </button>
                </div>
            </div>
        )
    }
}
