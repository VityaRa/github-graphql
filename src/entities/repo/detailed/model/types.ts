import { IOwner } from "@/entities/owner/types";

export interface IDetailedRepositoryModel {
  id: string;
  description: string | null;
  languages: {
    edges: Array<{node: {name: string}}>;
  };

  name: string;
  stargazerCount: string;
  updatedAt: string;

  owner: IOwner;
}