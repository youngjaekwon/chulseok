// chulseok/lib/apolloClient.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';
import { createHttpLink } from '@apollo/client/link/http';

let apolloClient;

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'https://example.com/graphql',
    credentials: 'same-origin',
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}