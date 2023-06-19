import { GraphQLClient, gpl } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API)

const category =