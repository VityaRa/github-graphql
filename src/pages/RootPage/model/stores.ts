import { createEvent, createStore } from 'effector';
import { fetchReposFx } from './effects';
import Repository from '../../../entities/repo/model/types';
import { IPaginationCursors } from '@/shared/api/graphql/types/cursor';
import persist from 'effector-localstorage';

export const $repos = createStore<Repository[]>([])
  .on(fetchReposFx.doneData, (_, res) => res.repos);


export const onPageChange = createEvent<number>();
export const $currentPage = createStore<number>(1).on(onPageChange, (_, payload) => payload);

export const $cursors = createStore<IPaginationCursors>({
  start: null,
  end: null,
}).on(fetchReposFx.doneData, (_, res) => ({start: res.cursor.start, end: res.cursor.end}));


// export const $afterCursor = $currentPage.map((p) => btoa(`cursor:${p}`));
export const $afterCursor = createStore(null);

// $afterCursor.watch((a, p) => {
//   fetchReposFx({searchTerm: '123', cursors: { end: a, start: null }});
// })

export const $totalCount = createStore<number>(0)
.on(fetchReposFx.doneData, (_, res) => res.totalCount);

export const $reposLoading = fetchReposFx.pending;

export const onQueryChange = createEvent<string>();
export const $searchQuery = createStore<string>("").on(onQueryChange, (_, payload) => payload);

persist({
  store: $currentPage,
  key: 'currentPage',
});


persist({
  store: $searchQuery,
  key: 'searchQuery',
});