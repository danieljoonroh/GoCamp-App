import React from "react";

export default class MiscItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            miscItems: ["Hat", "First Aid Kit", "Bug Spray"],
            newMiscItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.miscItems];
        newItem.push(this.state.newMiscItem);
        this.setState({
            miscItems: newItem
        });
        this.state.newMiscItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist  col-md-4">
                <div className="col-sm" id="category-item">
                    <h3>Misc Items</h3>
                    <details>
                        <summary>See All Miscellaneous Items: </summary>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={this.state.newMiscItem}
                            onChange={(event) => { this.setState({ newMiscItem: event.target.value }) }}
                        />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}> Add Item </button>
                        <ul className="striped-list">
                            {
                                this.state.miscItems.map((item, index) => {
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
