import React from 'react';
import SingleProduct from '../products/singleProduct.js';
import Footer from './footer.js';
import Header from './header.js';
import SmileyPic from '../products/productPics/smilyBoots/NJKUocPkvbeuJQ8XJ4UoJj1T5x139Shd-33.jpg';
import SubMenu from './subMenu.js';
import SubMenuCata from './subMenuCata.js';
import './theme.css';
import { useState } from 'react';
import StorePage from '../products/storePage.js';
import AboutPage from '../about/about.js';
import HomePage from '../homepage/homePage.js';




function Layout(){
    const products = [{
        id: 1,
        name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
        price: "95",
        mainPicSrc: SmileyPic,
        description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
        brand: "Koi Footwear",
        collection: "Kurt",
        catagory: "Boots",
        rating: 5
      },
      {
        id: 2,
        name: "PURE GRAVEDIGGER BOOTS",
        price: "113",
        mainPicSrc: SmileyPic,
        description: "Demonia Pure Gravedigger Boots cuz you’re a total badazz. Look dope AF in these unisex combat boots that have treaded platform soles, metal toe caps, adjustable lace-ups, and back zip closures.",
        brand: "Demonia",
        collection: "Kurt",
        catagory: "Boots",
        rating: 5
      },{
        id: 3,
        name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
        price: "95",
        mainPicSrc: SmileyPic,
        description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
        brand: "Koi Footwear",
        collection: "Kurt",
        catagory: "Boots",
        rating: 5
      },{
        id: 4,
        name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
        price: "95",
        mainPicSrc: SmileyPic,
        description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
        brand: "Koi Footwear",
        collection: "Kurt",
        catagory: "Boots",
        rating: 5
      },{
        id: 5,
        name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
        price: "95",
        mainPicSrc: SmileyPic,
        description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
        brand: "Koi Footwear",
        collection: "Kurt",
        catagory: "Boots",
        rating: 5
      },]

    
  let [isVisibleCollection, setIsVisibleCollection] = useState(false);
  let [isVisibleCatagories, setIsVisibleCatagories] = useState(false);


  const toggleVisibleCollections = () => {
    if(isVisibleCatagories){
      toggleVisibleFalseCatagories();
    }
    setIsVisibleCollection(isVisibleCollection = true)
  }

  const toggleVisibleCatagories = () => {
    if (isVisibleCollection){
      toggleVisibleFalseCollection();
    }
    setIsVisibleCatagories(isVisibleCatagories = true)
  }

  const toggleVisibleFalseCollection = () => {
    setIsVisibleCollection(isVisibleCollection = false)
  }

  const toggleVisibleFalseCatagories = () => {
    setIsVisibleCatagories(isVisibleCatagories = false)
  }

    return <div>
        <div className="content" style={{position:"relative"}}>
        <Header onShowSubMenuCollection={() => toggleVisibleCollections()} onShowSubMenuCatagories={() => toggleVisibleCatagories()}/>
       {isVisibleCollection && <SubMenu onShowSubMenuOff={() => toggleVisibleFalseCollection()}/>}
       {isVisibleCatagories && <SubMenuCata onShowSubMenuOff={() => toggleVisibleFalseCatagories()}/>}
        {/* <StorePage products={products}/> */}
        {/* <AboutPage /> */}
        {/* <HomePage /> */}
      <SingleProduct product={products[0]}/>
      </div>
        <Footer />
    </div>
}

export default Layout;