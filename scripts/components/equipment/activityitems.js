import React from "react";

export default class ActivityItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityItems: ["Guitar", " Fishing Pole", "Kayak"],
            newActivityItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.activityItems];
        newItem.push(this.state.newActivityItem);
        this.setState({
            activityItems: newItem
        });
        this.state.newActivityItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist col-md-4">
                <div className="col-sm" id="category-item">
                    <h3> Activity Items </h3>
                    <details>
                        <summary>See All Activity Items: </summary>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={this.state.newActivityItem}
                            onChange={(event) => { this.setState({ newActivityItem: event.target.value }) }}
                        />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}>Add Item</button>
                        <ul className="striped-list">
                            {
                                this.state.activityItems.map((item, index) => {
                                    return (
                                        <li className="list-group-item" key={index}>
                                            {item} <input type="checkbox" className="float-right" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </details>
                </div>
            </div>
        )
    }
}

