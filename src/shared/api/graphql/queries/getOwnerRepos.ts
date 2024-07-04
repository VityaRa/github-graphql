import { gql } from '@apollo/client';

export const GET_OWNER_REPOS = gql`
  query GetOwnerRepos($after: String, $before: String) {
    viewer {
      repositories(first: 10, after: $after, before: $before) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
        edges {
          node {
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