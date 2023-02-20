import React, { useState } from 'react';
import '../Components/IconStyles.css';


function Icon({ image, listItems }) {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <div 
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}>
      <img src={image} alt="plogo" />
      {showList && (
        <div className='pop-up'>
          <h1 className='caption'>Projects Applied</h1>
          <ul className='list-box'>
            {listItems.map((item, index) => (
              <li className='list-item' key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}
export default Icon;
