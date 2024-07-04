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

const a = [
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkyODgxNDA4ODc=",
      "name": "tutorial",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/tutorial",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2020-08-17T10:27:04Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkyODgxNjE5ODQ=",
      "name": "VityaRa.github.io",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/VityaRa.github.io",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-06-01T17:41:48Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzMDcwOTk4NDY=",
      "name": "tictactoe",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/tictactoe",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2020-10-25T13:03:31Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzMDcxMDM4MjY=",
      "name": "Bulls-and-cows",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/Bulls-and-cows",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2020-10-25T13:23:48Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzMTU1ODI0MTE=",
      "name": "wpf_21.11.2020",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/wpf_21.11.2020",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2020-11-24T09:35:16Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzMzAxNDExNTA=",
      "name": "blitz_task",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/blitz_task",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-05-14T17:48:24Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzMzYxOTkwNzE=",
      "name": "kina",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/kina",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-05-14T17:51:20Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDA0NjM0MDU=",
      "name": "krayt-proj",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/krayt-proj",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-02-23T20:23:00Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDI5NjMzMjk=",
      "name": "allUnCutFractions",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/allUnCutFractions",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-02-27T21:35:52Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDI5NjM2NzQ=",
      "name": "isRighBracketsFunction",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/isRighBracketsFunction",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-02-27T21:38:51Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDMxMTMxMTE=",
      "name": "rsschool-cv",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/rsschool-cv",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-07T13:26:58Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDQ3OTUzNDE=",
      "name": "WS_Champ",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/WS_Champ",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-09T16:06:32Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDc4NzcwMTY=",
      "name": "human-readable-number",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/human-readable-number",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2020-02-19T15:05:52Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDgwNzc4NzA=",
      "name": "reverse-int",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/reverse-int",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-15T18:23:28Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDgwNzgyNjg=",
      "name": "typical-arrays-problems",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/typical-arrays-problems",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-15T18:36:31Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDgwODAxNTA=",
      "name": "towel-sort",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/towel-sort",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-15T18:31:30Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDg0ODY0NDM=",
      "name": "Programming-basics",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/Programming-basics",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-18T08:59:06Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNDk0OTA1NzI=",
      "name": "online-paint",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/online-paint",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-19T16:40:08Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNTI1NzMxNjM=",
      "name": "clean-code-s1e1",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/clean-code-s1e1",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-24T11:10:23Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNTI1ODYwMDI=",
      "name": "basic-js",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/basic-js",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-03-29T11:25:09Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNTUwOTE5NDg=",
      "name": "OP_laba2",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/OP_laba2",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-04-06T07:05:48Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNTY2NjkxMjk=",
      "name": "rs-school-short-track-2021",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/rs-school-short-track-2021",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-04-12T07:18:18Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNjA2OTY3MzA=",
      "name": "app-velox",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/app-velox",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-04-26T16:04:21Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNjMzOTg3MTE=",
      "name": "OP_Lab3",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/OP_Lab3",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-05-02T06:40:34Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNjc2NDgwNjA=",
      "name": "guap-api",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/guap-api",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-05-14T20:55:56Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNjg5OTQwMjc=",
      "name": "match-match-game--ts--webpack",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/match-match-game--ts--webpack",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-05-19T19:04:01Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzNzUwNjE2OTc=",
      "name": "test-task-ecwid",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/test-task-ecwid",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-06-11T11:00:27Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzOTA2MzQ4OTk=",
      "name": "react-landing",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/react-landing",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-08-10T20:07:32Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzOTQ2NzgzMjY=",
      "name": "RSSchool-projects",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/RSSchool-projects",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-08-10T15:05:52Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzOTYzODU5OTY=",
      "name": "expo-react-native",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/expo-react-native",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-09-02T18:17:25Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnkzOTcyMzQ5Mzg=",
      "name": "to-do-list",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/to-do-list",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-09-02T22:02:11Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnk0MDI1MjYxMDA=",
      "name": "pwa-learn",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/pwa-learn",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-09-01T04:50:14Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "MDEwOlJlcG9zaXRvcnk0MDM1MDM2MjQ=",
      "name": "spotify-effect",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/spotify-effect",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-09-06T07:28:00Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOGPSXxg",
      "name": "OP_5",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/OP_5",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-10-18T22:04:57Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOGTRVRw",
      "name": "CHAT",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/CHAT",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-10-30T11:23:32Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOGZmaKQ",
      "name": "LR6",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/LR6",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2021-11-18T16:30:49Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOG88vgQ",
      "name": "PYTHON",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/PYTHON",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2022-03-25T23:07:23Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOIpTN7g",
      "name": "docker-app",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/docker-app",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2022-12-19T22:55:23Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOJLTIhA",
      "name": "alias",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/alias",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2023-08-12T10:37:19Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOJLTmHQ",
      "name": "pandas",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/pandas",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2023-03-18T20:01:21Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOKzkqPg",
      "name": "MusicSchoolProject",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/MusicSchoolProject",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2023-12-12T21:57:46Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOK1vWAw",
      "name": "rent-parser",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/rent-parser",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2024-02-12T12:45:52Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOK1vYvQ",
      "name": "rento-parser",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/rento-parser",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2023-12-04T21:41:52Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  },
  {
    "node": {
      "id": "R_kgDOLRYgDg",
      "name": "cenix-parser",
      "stargazerCount": 0,
      "url": "https://github.com/VityaRa/cenix-parser",
      "defaultBranchRef": {
        "target": {
          "committedDate": "2024-02-12T16:32:16Z",
          "__typename": "Commit"
        },
        "__typename": "Ref"
      },
      "__typename": "Repository"
    },
    "__typename": "RepositoryEdge"
  }
]