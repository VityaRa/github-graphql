import { gql } from '@apollo/client';

export const GET_REPOS = gql`
  query GetRepos($searchTerm: String!, $after: String, $before: String) {
    search(query: $searchTerm, type: REPOSITORY, first: 10, after: $after, before: $before) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            id
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
