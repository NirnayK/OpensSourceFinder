import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  languages = ['C++', 'C#', 'Java', 'Python', 'JavaScript'];
  licenses = ['MIT', 'GPL', 'Apache', 'BSD', 'None'];
  selectedLicenses: { [key: string]: boolean } = {};
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
