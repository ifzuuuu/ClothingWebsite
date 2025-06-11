import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Brands from '../components/Brands';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ShoppingCart from "../components/ShoppingCart";

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
};

function Home() {
  return (
    <div style={styles.container}>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Brands />
      <Services />
      <Testimonials />
      <Footer />
      
    <ShoppingCart cartItems={[]} />

    </div>
  );
}

export default Home;
