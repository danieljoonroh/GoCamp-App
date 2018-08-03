import React from "react";

export default class FireItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fireItems: ["Matches", "Firewood", "Fire Starter"],
            newFireItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.fireItems];
        newItem.push(this.state.newFireItem);
        this.setState({ fireItems: newItem });
        this.state.newFireItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist col-md-4">
                <div className="col-sm" id="category-item">
                    <h3> Fire Items </h3>
                    <details>
                        <summary>See All Fire Items: </summary>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={this.state.newFireItem}
                            onChange={(event) => { this.setState({ newFireItem: event.target.value }) }}
                        />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}>Add Item</button>
                        <ul className="striped-list">
                            {
                                this.state.fireItems.map((item, index) => {
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

