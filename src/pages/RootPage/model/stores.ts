import { createEvent, createStore } from "effector";
import { fetchReposFx } from "./effects";
import Repository from "../../../entities/repo/model/types";
import persist from "effector-localstorage";
import { PageInfo } from "@/shared/api/graphql/types/pageInfo";

export const $repos = createStore<Repository[]>([]).on(
  fetchReposFx.doneData,
  (_, res) => res.repos
);

export const onPageChange = createEvent<number>();
export const $currentPage = createStore<number>(1).on(
  onPageChange,
  (_, payload) => payload
);

export const $pageInfo = createStore<PageInfo & { prevState?: PageInfo }>({
  after: null,
  before: null,

  hasNextPage: false,
  hasPreviousPage: false,
}).on(fetchReposFx.doneData, (_, res) => {
  return ({
    after: res.pageInfo.endCursor,
    before: res.pageInfo.startCursor,
    hasNextPage: res.pageInfo.hasNextPage,
    hasPreviousPage: res.pageInfo.hasPreviousPage,
    prevState: res.requestInfo,
  })
});

export const $totalCount = createStore<number>(0).on(
  fetchReposFx.doneData,
  (_, res) => res.totalCount
);

export const $reposLoading = fetchReposFx.pending;

export const onQueryChange = createEvent<string>();
export const $searchQuery = createStore<string>("").on(
  onQueryChange,
  (_, payload) => payload
);

persist({
  store: $currentPage,
  key: "currentPage",
});

persist({
  store: $searchQuery,
  key: "searchQuery",
});

persist({
  store: $pageInfo,
  key: "pageInfo",
  sync: false,
});
