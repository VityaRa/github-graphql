export type PaginationCursor = string | null;
export interface IPaginationCursors {
  after: PaginationCursor;
  before: PaginationCursor;
}