import { gql } from '@apollo/client';

export const GET_OWNER_REPOS = gql`
  query GetOwnerRepos($after: String) {
    viewer {
      repositories(first: 10, after: $after) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
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
