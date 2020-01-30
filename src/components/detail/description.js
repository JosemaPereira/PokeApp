import React from 'react';
import { useParams } from 'react-router-dom';

export const Description = () => {
  let { id } = useParams();
  return <p>Pokemon {id}</p>;
};
