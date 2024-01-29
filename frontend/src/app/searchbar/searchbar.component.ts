import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { BaseData } from '../base-data';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchService: SearchService = inject(SearchService);
  selectedOptions: BaseData[] = [];
  searchTerm = '';
  values: BaseData[] = this.searchService.tags;

  selectOption(option: BaseData): void {
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

  // search(): void {
  //   if (this.searchTerm === '' && this.selectedOptions.length === 0) {
  //     return;
  //   }

  //   this.searchService.setValues({
  //     search: this.searchTerm,
  //     selectedTags: this.selectedOptions,
  //   });
  //   this.searchService.getResults();
  //   console.log('Performing search...');
  //   console.log('Selected options:', this.selectedOptions);
  // }
}
