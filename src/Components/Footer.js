import React from 'react';
import '../Components/FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='titles'>Designed & Built by Jian Mei</h1>
      <div className='tinyicons'>
        <a href='https://github.com/Nike159'>
          <i className='fa-brands fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/jianmei/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
      <div className='credits'>-Icons Provided By Icons8 and FontAwsome</div>
    </div>
  );
};

export default Footer;



