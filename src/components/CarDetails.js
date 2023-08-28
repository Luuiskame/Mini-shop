import { Component } from "react";

const styles = {
    carDetails:{
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin: "0",
        padding: '0'
    }, 
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    }
}

class CarDetails extends Component {
    render(){
        const {car} = this.props
        console.log(car)
        return(
            <div style={styles.carDetails}>
                <ul style={styles.ul}>
                    {car.map(item=> 
                    <li style={styles.product} key={item.name}>
                        <img alt={item.name} src={item.img} width='50' height='32'/>{item.name} <span>{item.quantity}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default CarDetails