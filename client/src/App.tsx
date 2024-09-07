// App.tsx
import React from 'react';
import './App.css';

// Import the images
import botCatalogButton from './assets/bot_catalog_button.jpg';
import mainMenu from './assets/main_menu.jpg';
import ringsPic from './assets/rings_pic.jpg';
import order from './assets/order.jpg';
import shoppingCart from './assets/shopping_cart.jpg';
import coupon from './assets/coupon.jpg';
import payment from './assets/payment.jpg';
import orderConfirm from './assets/order_confirm.jpg';

// Create an array of image steps
const steps = [
  {
    image: botCatalogButton,
    description: 'Step 1: Click on the Catalog Button to start.'
  },
  {
    image: mainMenu,
    description: 'Step 2: You will be taken to the Main Menu.'
  },
  {
    image: ringsPic,
    description: 'Step 3: Select the Rings category.'
  },
  {
    image: order,
    description: 'Step 4: Place your order by selecting an item.'
  },
  {
    image: shoppingCart,
    description: 'Step 5: Check your Shopping Cart.'
  },
  {
    image: coupon,
    description: 'Step 6: Apply a Coupon if you have one.'
  },
  {
    image: payment,
    description: 'Step 7: Proceed to Payment.'
  },
  {
    image: orderConfirm,
    description: 'Step 8: Confirm your Order.'
  }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="guide-container">
        <h1>Shop Guide</h1>
        {steps.map((step, index) => (
          <div key={index} className="guide-step">
            <img src={step.image} alt={`Step ${index + 1}`} />
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;