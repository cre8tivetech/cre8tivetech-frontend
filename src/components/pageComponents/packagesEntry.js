import React from 'react';

const packagesEntry = ({ _package, title }) => {
  const { basic, standard, premium } = _package;
  return (
    <div id={title} className="row packages-row">
      <div className="col-4 packages_card">
        <h3 className="packages__head">Basic</h3>
        <hr />
        <ul className="packages__items">
          {basic.services.map(item => (
            <li key={item.name}><i className="zmdi zmdi-check"></i> <p className={item.cancelled && "canceled"}>{item.name}</p></li>
          ))}
        </ul>
        <div className="packages__price">{basic.price}</div>
        <div className="packages__btn-container">
          <button className="packages__btn">Select</button>
        </div>
      </div>
      <div className="col-4 packages_card">
        <h3 className="packages__head">Standard</h3>
        <hr />
        <ul className="packages__items">
          {standard.services.map(item => (
            <li key={item.name}><i className="zmdi zmdi-check"></i> <p className={item.cancelled && "canceled"}>{item.name}</p></li>
          ))}
        </ul>
        <div className="packages__price">{standard.price}</div>
        <div className="packages__btn-container">
          <button className="packages__btn">Select</button>
        </div>
      </div>
      <div className="col-4 packages_card">
        <h3 className="packages__head">Premium</h3>
        <hr />
        <ul className="packages__items">
          {premium.services.map(item => (
            <li key={item.name}><i className="zmdi zmdi-check"></i> <p className={item.cancelled && "canceled"}>{item.name}</p></li>
          ))}
        </ul>
        <div className="packages__price">{premium.price}</div>
        <div className="packages__btn-container">
          <button className="packages__btn">Select</button>
        </div>
      </div>
    </div>
  )
}

export default packagesEntry;
