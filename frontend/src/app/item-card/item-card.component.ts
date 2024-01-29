import { Component } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  data: Card = {
    name: 'angular',
    avatar_url: 'https://avatars.githubusercontent.com/u/139426?v=4',
    html_url: 'https://github.com/angular/angular',
    stargazers_count: 93400,
    watchers_count: 3000,
    forks_count: 25123,
    language: 'TypeScript',
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
    },
    topics: ['angular', 'web', 'typescript', 'pwa'],
  };
}
