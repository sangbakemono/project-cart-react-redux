import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';

class ProductsContainer extends Component {
    render() {
        var { products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>    
        );
    }

    showProducts(products){
        var result = null;
        result = products.map((product, index) =>{
            return <Product key={index} product={product}/>
        });
        return result;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);





