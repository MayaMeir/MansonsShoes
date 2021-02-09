import React from 'react';
import SingleProduct from '../products/singleProduct.js';
import Footer from './footer.js';
import Header from './header.js';
import pic from './pictures/NJKUocPkvbeuJQ8XJ4UoJj1T5x139Shd-33.jpg';
import SubMenu from './subMenu.js';
import './theme.css';



function Layout(){
    const product = {
        name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
        price: "95",
        mainPicSrc: pic,
        description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
        brand: "Koi Footwear",
        rating: 5 
      }

    return <div>
        <div className="content">
        <Header />
        <SubMenu />
      <SingleProduct product={product}/>
      </div>
        <Footer />
    </div>
}

export default Layout;