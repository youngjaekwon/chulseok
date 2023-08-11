import { ApolloClient, InMemoryCache } from '@apollo/client';
import { exampleQuery } from '../graphql/queries/exampleQuery.graphql';
import { exampleMutation } from '../graphql/mutations/exampleMutation.graphql';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://example.com/graphql',
  cache,
});

export const queryExample = async () => {
  const { data } = await client.query({
    query: exampleQuery,
  });
  return data;
};

export const mutateExample = async (variables: any) => {
  const { data } = await client.mutate({
    mutation: exampleMutation,
    variables,
  });
  return data;
};