import React from 'react';

export default class Render extends React.Component {
    constructor(props) {
        super(props);
    }

    removeItem(index) {
        this.props.deleteItem(index)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <div key={index} className="col-sm-3 itineraryItem">
                                    <p className="listItem"> {item.todos} </p>
                                    <button className="btn btn-outline-warning btn-sm removeButton" onClick={this.removeItem.bind(this, index)}> Remove </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

