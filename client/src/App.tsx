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
import thank_you from './assets/thank_you.jpg';

// Create an array of image steps
const steps = [
  {
    image: botCatalogButton,
    description: 'Шаг 1: Нажмите на кнопку каталога, чтобы начать.'
  },
  {
    image: mainMenu,
    description: 'Шаг 2: Вы будете перенаправлены в Главное меню.'
  },
  {
    image: ringsPic,
    description: 'Шаг 3: Выберите понравившийся товар в каталоге.'
  },
  {
    image: shoppingCart,
    description: 'Шаг 4: Перейдите в корзину покупок.'
  },
  {
    image: order,
    description: 'Шаг 5: Разместите заказ на свое имя и номер телефона. Для доставки пожалуйста введите слово "Доставка" и желаемый адрес'
  },
  {
    image: coupon,
    description: 'Шаг 6: Примените купон, если он у вас есть.'
  },
  {
    image: payment,
    description: 'Шаг 7: Перейдите к оплате.'
  },
  {
    image: orderConfirm,
    description: 'Шаг 8: Получите подтверждение заказа.'
  },
  {
    image: thank_you,
    description: 'Шаг 9: 💖Вы восхитительны!💖<br />Ожидайте ответа по доставке или забирайте заказ в нашем магазине уже сегодня!'
  }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="guide-container">
        <h1>Гайд по нашему магазину💖</h1>
        {steps.map((step, index) => (
          <div key={index} className="guide-step">
            <img src={step.image} alt={`Шаг ${index + 1}`} />
            <p dangerouslySetInnerHTML={{ __html: step.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;