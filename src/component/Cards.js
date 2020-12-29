// import React from 'react';
// import CardItem from './CardItem';
// import './Cards.css';

// function Cards() {
// 	return(
//         <div classNmae='cards'>
//          <h1>Check out these EPIC Destinations!</h1>
//          <div className='cards__container'>
//           <div className='cards__wrapper'>
//           <ul className='cards__items'>
//           <CardItem 
//           />
//           </ul>

//           </div>
//          </div>         

//         </div>

// 		);
// }

// export default Cards;
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
             src='https://media-cdn.tripadvisor.com/media/photo-s/0e/5e/c0/46/drone-shot-of-the-valley.jpg'
              text='Explore the dazzling Patratu Valley.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://tripinfi.com/wp-content/uploads/2020/01/jonha-falls-jharkhand-tripinfi.png'
              text='Travel the hidden waterfall deep inside the Jharkhand.'
              label='Thrilling'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4yOWwun9z16-Iuoa4EFCC_44_M6Q2_ZNxw&usqp=CAU.jpg'
              text='Enjoy the Alluring hill station referred as the"Queen of Chotanagpur".'
              label='Alluring'
              path='/services'
            />
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJAS7J_mAjEzACpvsNswkta8oOTllP1i4HA&usqp=CAU.jpg'

              text='Experience the perfect lake located in the Outskirts of the city "Ranchi".'
              label='Lovely'
              path='/products'
            />
            <CardItem
              src='https://media-cdn.tripadvisor.com/media/photo-s/13/40/03/f8/hudru-a-falls-to-visit.jpg'
              text='Explore Hundru Fall the highest waterfall of the state.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;