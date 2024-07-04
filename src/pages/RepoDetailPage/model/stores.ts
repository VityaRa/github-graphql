import { IDetailedRepositoryDto } from "@/entities/repo/detailed";
import { createStore } from "effector";
import { fetchRepoById } from "./effects";

export const $detailedRepository = createStore<IDetailedRepositoryDto | null>(null)
  .on(fetchRepoById.doneData, (_, res) => res);

export const $detailedRepositoryLoading = fetchRepoById.pending;