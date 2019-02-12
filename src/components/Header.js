import React from 'react';

const Header = (props) => (

  <div className="header">

    <div className="container">

      <h1 className="header__title">Indecis<span>{'{'}</span>app<span>{'}'}</span></h1>

      {props.subtitle &&
        <h2 className="header__subtitle">{props.subtitle}</h2>
      }

    </div>

  </div>

);


Header.defaultProps = {
  title: 'Indecis{app}'
};

export default Header;