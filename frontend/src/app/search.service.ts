import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from './search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchForm: FormGroup;
  values = ['Angular', 'React', 'Vue.js', 'Java', 'Python'];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: '',
      selectedTags: this.fb.array([]),
    });
  }

  setValues(search: Search): void {
    this.searchForm.setValue(search);
  }

  getResults(): void {}
}
