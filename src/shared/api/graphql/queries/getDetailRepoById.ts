import { gql } from "@apollo/client";

export const GET_REPO_DETAIL_BY_ID = gql`
  query getRepositoryById($id: ID!) {
    node(id: $id) {
      ... on Repository {
        id
        name
        stargazerCount
        updatedAt
        owner {
          login
          avatarUrl
          url
        }
        languages(first: 10) {
          edges {
            node {
              name
            }
          }
        }
        description
      }
    }
  }
`;
