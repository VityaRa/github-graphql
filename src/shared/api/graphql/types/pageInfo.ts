export interface PageInfoResponse {
  endCursor: string | null;
  hasNextPage: boolean;
  startCursor: string | null;
  hasPreviousPage: boolean
}

export interface PageInfo {
  after: string | null;
  hasNextPage: boolean;
  before: string | null;
  hasPreviousPage: boolean
}
