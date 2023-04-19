import React from 'react'
import './item.css';
import Image1 from '../images/whooper.png'

export default function Item() {
  return (
    <div className='Item_1'>
          <h2 className='products'>Whooper</h2>
           <div className='container_section1'>

           <div className='con_sec_1'>
              <img alt='' className="item_image1" src={Image1}></img>
              
            </div>

            <div className='item_sec_2'>
              <h4 className='redclass'>Price: Rs.300</h4>
              <h5>370 g</h5>
              <div className="item_2">
                <h5>Nutritional Information</h5>
                <div class="nutritional-info">
  <ul>
    <li>Calories: 660</li>
    <li>Total Fat: 40g</li>
    <ul>
      <li>Saturated Fat: 12g</li>
      <li>Trans Fat: 1.5g</li>
    </ul>
    <li>Cholesterol: 90mg</li>
    <li>Sodium: 980mg</li>
    <li>Total Carbohydrates: 49g</li>
    <ul>
      <li>Dietary Fiber: 2g</li>
      <li>Sugars: 11g</li>
    </ul>
    <li>Protein: 28g</li>
  </ul>
  <h5>Vitamins and Minerals</h5>
  <ul>
    <li>Vitamin A: 8%</li>
    <li>Vitamin C: 4%</li>
    <li>Calcium: 20%</li>
    <li>Iron: 30%</li>
  </ul>
  <p>Please note that nutritional information may vary depending on the specific ingredients used and any customizations made to the burger. Additionally, individuals with certain health conditions may need to limit their intake of certain nutrients such as sodium and cholesterol. It is always recommended to consult with a healthcare professional before making any major changes to your diet.</p>
</div>

              </div>
                
            </div>

           </div>
        </div>
  )
}
