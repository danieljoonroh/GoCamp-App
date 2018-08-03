import React from "react";

export default class KitchenItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kitchenItems: ["Ice Chest", "Hotdog Skewers", "Pots n' Pans"],
            newKitchenItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.kitchenItems];
        newItem.push(this.state.newKitchenItem);
        this.setState({
            kitchenItems: newItem
        });
        this.state.newKitchenItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist  col-md-4">
                <div className="col-sm" id="category-item">
                    <h3>Kitchen Items</h3>
                    <details>
                        <summary>See All Kitchen Items: </summary>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={this.state.newKitchenItem}
                            onChange={(event) => { this.setState({ newKitchenItem: event.target.value }) }}
                        />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}> Add Item </button>
                        <ul className="striped-list">
                            {
                                this.state.kitchenItems.map((item, index) => {
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

