import { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    products: [
      {name: "tomate", price: 1500, img: '/products-img/tomate.jpg'},
      {name: "arbejas", price: 2500, img: '/products-img/arbejas.jpg'},
      {name: "lechuga", price: 500, img: '/products-img/lechuga.jpg'},
    ],
    car: [
      // {name: "tomate", price: 1500, img: '/products-img/tomate.jpg', quantity: 1},

    ],
    isTheCarVisible: false
  }
  addToCar = (product)=>{
    const {car} = this.state
    if(car.find(x=> x.name === product.name)){
      const newCar = car.map(x=> x.name === product.name 
        ?({
          ...x,
          quantity: x.quantity +1
      }) :x)
      return  this.setState({car: newCar})
    }

    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity: 1
      })
    })
  }

  showCar = ()=>{
    if(!this.state.car.length) return console.log("You havent added anything yet")
    this.setState({isTheCarVisible: !this.state.isTheCarVisible})
  }
  render(){
    const {isTheCarVisible} = this.state
    return (
      <div className="App">
        <Navbar 
        isTheCarVisible={isTheCarVisible} 
        showCar={this.showCar} 
        car={this.state.car}/>
        <Layout>
          <Title/>
        <Products
          addToCar={this.addToCar}
          products = {this.state.products}
        />
        </Layout>
      </div>
    );
  }

}

export default App;
