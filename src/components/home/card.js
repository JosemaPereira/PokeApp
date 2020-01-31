import React from 'react';
import _ from 'lodash';

export const Card = ({ item: { front_default, name, id, types } }) => (
  <div className='card'>
    <img className='card-img-top' src={front_default} alt='Card' />
    <div className='card-body'>
      <h5 className='card-title'>
        #{id} {name}
      </h5>
      <div className='row'>
        {types.map(t => (
          <div key={_.uniqueId()} className='col-sm'>
            <p className='card-text'>{t.type.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
