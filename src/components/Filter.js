import React from "react";
import items from "./product.json";
import Products from "./Products";
import './css/product.css';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "default",
            cost: "default"
        }
    }

    handlePriceDropdownSelect = (event) => {
        this.setState({
            cost: event.target.value,
            type: event.target.value
        })
    }


    render() {
        const { type, cost } = this.state;
        return (
            <React.Fragment>

                <div class="contentInfo">
                    <header class="Header">
                        <h1><span class="title">RG</span>Cameras</h1>
                    </header>
                </div>

                <div className="form-container">
                    <div className="gridfilter">
                        <label className="filters">
                            Type:
                         </label>
                        <select id="filterSelect" value={type} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value={this.props.type}>Best Selling</option>
                            <option value={this.props.type}>Most Popular</option>
                        </select>
                    </div>

                    <div className="gridpricefilter">
                        <label className="filters">
                            Price:
                         </label>
                        <select id="priceSelect" value={cost} onChange={this.handlePriceDropdownSelect}>
                            <option value="default">All</option>
                            <option value="low">$200 - $500</option>
                            <option value="medium">$500 - $700</option>
                            <option value="high">$700 - $1200</option>


                        </select>
                    </div>

                </div>
                <section id="container" >
                    <div className="filter">
                        {items.items.map(item => {
                            if (type === 'default' && cost === 'default') {
                                return <Products item={item} />
                            } else if (type === item.type && cost === item.cost) {
                                return <Products item={item} />
                            } else if (type === item.type || cost === item.cost) {
                                return <Products item={item} />
                            }
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}


export default Filter;
