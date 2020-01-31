import React from 'react';
import { Card } from './card';
import _ from 'lodash';

export const Home = ({ list }) => {
  console.log(list);
  return (
    <div className='main'>
      <div className='card-group'>
        {list.map(i => (
          <Card item={i} key={_.uniqueId()} />
        ))}
      </div>
    </div>
  );
};
