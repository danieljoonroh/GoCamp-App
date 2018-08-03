import React from "react";

export default class CampItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campItems: ["Tent", "Rope", "Tarp"],
            newCampItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.campItems];
        newItem.push(this.state.newCampItem);
        this.setState({
            campItems: newItem
        });
        this.state.newCampItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist col-md-4">
                <div className="col-sm" id="category-item">
                    <h3>Camp Items</h3>
                    <details>
                        <summary>See All Camp Items: </summary>
                        <input type="text" className="form-control" placeholder="..." value={this.state.newCampItem} onChange={(event) => { this.setState({ newCampItem: event.target.value }) }} />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}>Add Item</button>
                        <ul className="striped-list">
                            {
                                this.state.campItems.map((item, index) => {
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

