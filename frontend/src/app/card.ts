import { License } from './license';

export interface Card {
  name: string;
  avatar_url: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  license: License;
  topics: string[];
}
