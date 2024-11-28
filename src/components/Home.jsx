import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Button, MantineProvider } from '@mantine/core';
import { Link } from 'react-router-dom';
import '@mantine/carousel/styles.css';
import { useState } from 'react';

const Home = () => {
  // Carousel items with image URLs from a website
  const carouselItems = [
    {
      id: 1,
      title: "Trendy Men's Wear",
      image: 'https://images.pexels.com/photos/15647643/pexels-photo-15647643.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/mens-fashion',
    },
    {
      id: 2,
      title: "Elegant Women's Wear",
      image: 'https://images.pexels.com/photos/15645024/pexels-photo-15645024.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/womens-fashion',
    },
    {
      id: 3,
      title: 'Stylish Accessories',
      image: 'https://images.pexels.com/photos/15647232/pexels-photo-15647232.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/accessories',
    },
  ];

  return (
    <MantineProvider>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">M and R Glam</h1>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-pink-500">Shop</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-500">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-8">
          <Carousel
            slideSize="100%"
            loop
            withIndicators
            height={500}
            slideGap="sm"
            align="start"
            withAutoplay
            autoplayInterval={3000} // Autoplay every 3 seconds
          >
            {carouselItems.map((item) => (
              <Carousel.Slide key={item.id}>
                <div
                  className="relative h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-white mb-4">{item.title}</h2>
                      <Link to={item.link}>
                        <Button size="lg" color="pink">
                          Shop Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </section>

        {/* Featured Products */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Featured Products
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {/* Example product cards */}
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full sm:w-[48%] md:w-[30%] lg:w-[22%] border rounded-lg p-4 shadow-sm hover:shadow-lg"
                >
                  <img
                    src={`https://images.pexels.com/photos/${17244623 + index}/pexels-photo-${17244623 + index}.jpeg?auto=compress&cs=tinysrgb&w=600
`}
                    alt={`Product ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />


                  <h3 className="text-lg font-semibold text-gray-700">Product {index + 1}</h3>
                  <p className="text-gray-500 mt-1">$99.99</p>
                  <Button color="pink" fullWidth className="mt-4">
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2024 M and R Glam. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </MantineProvider>
  );
};

export default Home;
