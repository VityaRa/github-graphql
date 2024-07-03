import { createStore } from 'effector';
import { fetchReposFx } from './effects';
import Repository from '../../../entities/repo/model/types';

export const $repos = createStore<Repository[]>([])
  .on(fetchReposFx.doneData, (_, repos) => repos);

export const $reposLoading = fetchReposFx.pending;