export interface ApiResponse<T> {
  data: T;
}

export interface ApiPaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
}

export interface ApiError {
  status: number;
  type: string;
  message: string;
  error: string;
  report_url: string;
}
