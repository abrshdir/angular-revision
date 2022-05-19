import {Movies} from './movie';

export interface MoviesOut {
  status?: string;
  status_message?: string;
  data?: {
    movie_count?: number;
    limit?: number;
    page_number?: 1;
    movies?: Array<Movies>;
  };
  meta: {
    server_time: number;
    server_timezone: string;
    api_version: number;
    execution_time: string;
  };
}
