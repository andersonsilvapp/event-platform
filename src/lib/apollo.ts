import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otzzm3151o01xk4zdr6y50/master',
  cache: new InMemoryCache()
})