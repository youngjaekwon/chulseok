import React from 'react';
import { useQuery } from '@apollo/client';
import { exampleQuery } from '../graphql/queries/exampleQuery';

const IndexPage = () => {
  const { loading, error, data } = useQuery(exampleQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>{data.example}</p>
    </div>
  );
};

export default IndexPage;