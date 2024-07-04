import { IOwner } from "@/entities/owner/types";

export interface IDetailedRepositoryDto {
  id: string;
  
  name: string;
  stargazerCount: string;
  updatedAt: Date;

  owner: IOwner;

  languages: string[];

  description: string | null;
}