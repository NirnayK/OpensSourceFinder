import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchService: SearchService = inject(SearchService);
  selectedOptions: string[] = [];
  searchTerm = '';
  values: string[] = this.searchService.values;

  selectOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      // Option is not selected, add it
      this.selectedOptions.push(option);
    } else {
      // Option is selected, remove it
      this.selectedOptions.splice(index, 1);
    }
    console.log(this.selectedOptions);
  }

  clear(): void {
    this.selectedOptions = [];
    this.searchTerm = '';
  }

  search(): void {
    if (this.searchTerm === '' && this.selectedOptions.length === 0) {
      return;
    }

    this.searchService.setValues({
      search: this.searchTerm,
      selectedTags: this.selectedOptions,
    });
    this.searchService.getResults();
    console.log('Performing search...');
    console.log('Selected options:', this.selectedOptions);
  }
}
