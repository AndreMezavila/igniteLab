import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
   // uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r3abxc0kge01z1h0tmahpl/master',
   uri:'https://api-sa-east-1.graphcms.com/v2/cl4sv3qo12mgr01z361sbaw3x/master',
   cache: new InMemoryCache()
})
