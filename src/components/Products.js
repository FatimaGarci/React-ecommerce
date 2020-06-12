import React from './node_modules/react';
// import './css/product.css';
// import Filters from './Filter';
//const items = require('./product.json');


class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="product">
                        <img className="product-image" alt="cameras"
                            src={this.props.item.img} />
                        <h3>{this.props.item.title}</h3>
                        <p className="product-description">{this.props.item.description}</p>
                        <p>{this.props.item.price}</p>
                    </div>
            </React.Fragment >
        )
    }
}

export default Products;