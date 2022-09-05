import '../styles/App.css';
import Banner from './Banner.js';
import Cart from './Cart.js';
import Footer from './Footer.js';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';


function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

  return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} setCart={setCart} />
				<ShoppingList cart={cart} setCart={setCart} />
			</div>
			<Footer />
		</div>
  );
}

export default App;
