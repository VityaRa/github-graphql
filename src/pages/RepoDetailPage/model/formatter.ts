import { IDetailedRepositoryDto, IDetailedRepositoryModel } from "@/entities/repo/detailed";

export const formatResponse = (response: IDetailedRepositoryModel): IDetailedRepositoryDto => {
  return {
    id: response.id,
    name: response.name,
    stargazerCount: response.stargazerCount,
    updatedAt: new Date(response.updatedAt),
    owner: response.owner,
  
    languages: response.languages.edges.map((edge) => edge.node.name),
    description: response.description,
  }
}