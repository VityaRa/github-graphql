import client from '@/app/providers/apollo/apollo-client';
import Repository from '@/entities/repo/model/types';
import { GET_OWNER_REPOS, GET_REPOS } from '@/shared/api/graphql/queries';
import { PaginationCursor } from '@/shared/api/graphql/types/cursor';
import { PageInfo, PageInfoResponse } from '@/shared/api/graphql/types/pageInfo';
import { createEffect } from 'effector';

export const fetchReposFx = createEffect(async ({ searchTerm, after, before }: { searchTerm: string; after: PaginationCursor, before: PaginationCursor }): Promise<{
  repos: Repository[],
  pageInfo: PageInfoResponse,
  requestInfo: PageInfo,
  totalCount: number
}> => {
  let data;

  if (searchTerm) {
    const response = await client.query({
      query: GET_REPOS,
      variables: { searchTerm, after, before},
    });
    data = response.data.search;
  } else {
    const response = await client.query({
      query: GET_OWNER_REPOS,
      variables: { after, before },
    });
    data = response.data.viewer.repositories;
  };

  const repos = data.edges.map((edge: any) => ({
    name: edge.node.name,
    stargazerCount: edge.node.stargazerCount,
    url: edge.node.url,
    committedDate: edge.node.defaultBranchRef.target.committedDate,
    id: edge.node.id
  })) as Repository[];

  return {
    repos,
    pageInfo: data.pageInfo as PageInfoResponse,
    requestInfo: {
      hasNextPage: data.pageInfo.hasNextPage,
      hasPreviousPage: data.pageInfo.hasPreviousPage,
      after: after,
      before: before,
    },
    totalCount: data.totalCount as number,
  }
});