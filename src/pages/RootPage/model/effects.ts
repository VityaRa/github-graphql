import client from '@/app/providers/apollo/apollo-client';
import Repository from '@/entities/repo/model/types';
import { GET_OWNER_REPOS, GET_REPOS } from '@/shared/api/graphql/queries';
import { createEffect } from 'effector';

export const fetchReposFx = createEffect(async ({ searchTerm, after }: { searchTerm: string; after?: string }) => {
  let data;

  if (searchTerm) {
    const response = await client.query({
      query: GET_REPOS,
      variables: { searchTerm, after },
    });
    data = response.data.search;
    console.log(response.data)
  } else {
    const response = await client.query({
      query: GET_OWNER_REPOS,
      variables: { after },
    });
    data = response.data.viewer.repositories;
    console.log(response.data)
  };


  return data.edges.map((edge: any) => ({
    name: edge.node.name,
    stargazerCount: edge.node.stargazerCount,
    url: edge.node.url,
    committedDate: edge.node.defaultBranchRef.target.committedDate,
  })) as Repository[];
});