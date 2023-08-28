import { Component } from "react";
import Button from './Button'

const styles = {
    product: {
        border: "solid 1px #eee",
        boxShadow: '0 5px rgb(0,0,0,0.1)',
        width: "30%",
        padding: "10px 15px",
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

class Product extends Component{
    render(){
        const {product, addToCar} = this.props
        console.log(this.props)
        return(
            <div style={styles.product}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <img style={styles.img} alt={product.name} src={product.img}/>
                <Button onClick={()=> addToCar(product)}>
                    Add Item
                </Button>
            </div>
        )
    }
}

export default Product