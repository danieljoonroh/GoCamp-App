import React from "react";

export default class SleepItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SleepItems: ["Sleeping Bag", "Pillow", "Cot"],
            newSleepItem: ""
        }
    }

    addItem() {
        let newItem = [...this.state.SleepItems];
        newItem.push(this.state.newSleepItem);
        this.setState({
            SleepItems: newItem
        });
        this.state.newSleepItem = "";
    }

    render() {
        return (
            <div className="row equipitemlist  col-md-4">
                <div className="col-sm" id="category-item">
                    <h3>Sleep Items</h3>
                    <details>
                        <summary>See All Sleep Items: </summary>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={this.state.newSleepItem}
                            onChange={(event) => { this.setState({ newSleepItem: event.target.value }) }}
                        />
                        <button className="btn btn-outline-success btn-block " onClick={this.addItem.bind(this)}>Add Item</button>
                        <ul className="striped-list">
                            {
                                this.state.SleepItems.map((item, index) => {
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




