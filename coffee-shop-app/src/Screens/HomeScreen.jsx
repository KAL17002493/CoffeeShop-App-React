import React from 'react';
import CoffeeCup from '../img/CoffeeCup.png';
import Award from '../img/Award.png'

function HomeScreen() {
  return (

    <div className="bg-banner">
      <div className="backgroundColour-1">
        <div className="customFont-1 text-center mt-5 m-3">
            <p>Independently run & charmingly characteristic - Bristol’s Cloakroom Café is here to offer everyone a unique & creative space to enjoy specialty coffee, freshly made juices, smoothies & pastries.</p>
            <p>Our cakes are all homemade & our soups, sandwiches & breakfast treats are created in house - using healthy, honest ingredients.</p>
            <p>We’re proud to be Bristolian & excited to share an open door to our unique space for the city to explore.</p>
        </div>
      </div>
      
      <div className="backgroundColour-2">
        <div className="customFont-1 text-center mt-5 m-3">
          <div>
              <img src={CoffeeCup} alt="Coffee Cup" width={100}/>
              <p>We offer a large variety of very delicious drinks and pastries such as coffee, freshly squeezed juice, smoothies, cakes, cupcakes, strudels and much more. Check out our menu to find the perfect drink and little cake for you.</p>
            </div>

            <div className="largeMargin">
              <img src={Award} alt="Award" width={100}/>
              <p>By making online orders you will earn loyalty points which can be used for discounts and even a free cup of coffee</p>
            </div>

        </div>
      </div>
    </div>

  )
}

export default HomeScreen