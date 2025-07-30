import React from 'react'
import NavBar from './NavBar/NavBar'
import Banner from './Banner/Banner';
import ListItems from './ListItems/ListItems';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../App.css'
import Footer from './Footer/Footer';
const IndexPage = () => {
  const user="vengadesh";
  const address="Kuthalam 609801";
  const country="EN";
  const srcImg="src/assets/indlogo.png";
  const BannerCollection=[
    'src/assets/banner1.jpg',
    'src/assets/banner2.jpg',
    'src/assets/banner3.jpg',
    'src/assets/banner4.jpg',
    'src/assets/banner5.jpg'
  ];
  const products = [
  { img: 'src/assets/product_images/i9_14th.jpg', name: 'Intel i9 14th Gen' },
  { img: 'src/assets/product_images/rtx_5090.jpeg', name: 'RTX 5090' },
  { img: 'src/assets/product_images/rog-1.png', name: 'ROG Motherboard' },
  {img: 'src/assets/product_images/panthom.jpeg', name:'cabinet'}
  // Add the rest...
];

<ListItems items={products} />


  return (
    <div className='b'>
        <NavBar username={user} address={address} country={country} srcImg={srcImg}/>
        <Banner></Banner>
        <ListItems items={products}/>
        <Footer/>
    </div>
  )
}

export default IndexPage