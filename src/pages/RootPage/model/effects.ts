import client from '@/app/providers/apollo/apollo-client';
import Repository from '@/entities/repo/model/types';
import { GET_OWNER_REPOS, GET_REPOS } from '@/shared/api/graphql/queries';
import { IPaginationCursors } from '@/shared/api/graphql/types/cursor';
import { createEffect } from 'effector';

export const fetchReposFx = createEffect(async ({ searchTerm, cursors }: { searchTerm: string; cursors: IPaginationCursors }) => {
  let data;

  if (searchTerm) {
    const response = await client.query({
      query: GET_REPOS,
      variables: { searchTerm, after: cursors.end, before: cursors.start },
    });
    data = response.data.search;
  } else {
    const response = await client.query({
      query: GET_OWNER_REPOS,
      variables: { after: cursors.end, before: cursors.start },
    });
    data = response.data.viewer.repositories;
  };

  //TODO: Typings
  const repos = data.edges.map((edge: any) => ({
    name: edge.node.name,
    stargazerCount: edge.node.stargazerCount,
    url: edge.node.url,
    committedDate: edge.node.defaultBranchRef.target.committedDate,
    id: edge.node.id
  })) as Repository[];

  return {
    repos,
    cursor: {
      start: data.pageInfo.startCursor as IPaginationCursors['start'],
      end: data.pageInfo.endCursor as IPaginationCursors['end'],
    },
    totalCount: data.totalCount as number,
  }
});