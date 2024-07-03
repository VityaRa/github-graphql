import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query GetRepos($searchTerm: String!, $after: String) {
    search(query: $searchTerm, type: REPOSITORY, first: 10, after: $after) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            name
            stargazerCount
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
  }
`;
