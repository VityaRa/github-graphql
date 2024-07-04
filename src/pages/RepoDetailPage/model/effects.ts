import client from "@/app/providers/apollo/apollo-client";
import { IDetailedRepositoryDto } from "@/entities/repo/detailed";
import { IDetailedRepositoryModel, } from "@/entities/repo/detailed/model/types";
import { GET_REPO_DETAIL_BY_ID } from "@/shared/api/graphql/queries";
import { ApolloQueryResult } from "@apollo/client";
import { createEffect } from "effector";
import { formatResponse } from "./formatter";

export const fetchRepoById = createEffect(async (id: string): Promise<IDetailedRepositoryDto> => {
  const response = await client.query({
    query: GET_REPO_DETAIL_BY_ID,
    variables: { id },
  }) as ApolloQueryResult<{node: IDetailedRepositoryModel}>;

  const { data } = response;
  return formatResponse(data.node);
});
