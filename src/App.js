import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './products/singleProduct.js';
import Footer from './theme/footer.js';
import Header from './theme/header.js';
import SmileyPic from './products/productPics/smilyBoots/NJKUocPkvbeuJQ8XJ4UoJj1T5x139Shd-33.jpg';
import SubMenu from './theme/subMenu.js';
import SubMenuCata from './theme/subMenuCata.js';
import './theme/theme.css';
import { useState } from 'react';
import StorePage from './products/storePage.js';
import AboutPage from './about/about.js';
import HomePage from './homepage/homePage.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Contact from './contact/contact';
import Login from './login_signup/login';
import SignUp from './login_signup/signup';
import Cart from './cart/cart';
import Checkout from './checkout/checkout';
import ShowFeed from './instagram/instagram';
import AdminPage from './admin/admin';

function App() {

  const order=[{
    orderId: 1,
    numOfProducts: 2,
    productsNames: ["BASSIANI SMILEY FACE PLATFORM BOOTS", "PURE GRAVEDIGGER BOOTS"],
    productsId:[1,2],
    orderDate: new Date(),
    customerId: 1
  },
  {
    orderId: 2,
    numOfProducts: 1,
    productsNames: ["BASSIANI SMILEY FACE PLATFORM BOOTS"],
    productsId:[2],
    orderDate: new Date(),
    customerId: 1
  }]


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
    collection: "Elvira",
    catagory: "Heels",
    rating: 2
  },{
    id: 3,
    name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
    price: "95",
    mainPicSrc: SmileyPic,
    description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
    brand: "Koi Footwear",
    collection: "Janis",
    catagory: "Sneakers",
    rating: 1
  },{
    id: 4,
    name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
    price: "95",
    mainPicSrc: SmileyPic,
    description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
    brand: "Koi Footwear",
    collection: "Billy",
    catagory: "Flats",
    rating: 4
  },{
    id: 5,
    name: "BASSIANI SMILEY FACE PLATFORM BOOTS",
    price: "95",
    mainPicSrc: SmileyPic,
    description: "Koi Footwear Bassiani Smiley Face Platform Boots cuz you’re the highlight of their lives! These lace-up platform boots have contrast yellow detailing, zipper hardware with smiley face charms, and chunky cleated soles.",
    brand: "Koi Footwear",
    collection: "Crystal",
    catagory: "Platforms",
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
  return (
    <div className="App">
      <div className="content" style={{position:"relative"}}>
        <Header onShowSubMenuCollection={() => toggleVisibleCollections()} onShowSubMenuCatagories={() => toggleVisibleCatagories()}/>
       {isVisibleCollection && <SubMenu onShowSubMenuOff={() => toggleVisibleFalseCollection()}/>}
       {isVisibleCatagories && <SubMenuCata onShowSubMenuOff={() => toggleVisibleFalseCatagories()}/>}
      </div>
      {/* ROUTING */}
      <Router>
    <div id="compo">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/store" component={() => <StorePage products={products} />} />
      <Route exact path="/product" component={() => <SingleProduct product={products[0]} />} />
      <Route exact path="/contactUs" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/cart" component={() => <Cart products={products} />} />
      <Route exact path="/checkout" component={() => <Checkout products={products} />} />
      <Route exact path="/feed" component={ShowFeed} />
      <Route exact path="/admin" component={() => <AdminPage order={order} />} />

    </div>
  </Router>
        <Footer />
    </div>
  );
}

export default App;
