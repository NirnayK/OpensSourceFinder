import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Search } from './search';
import { SharedService } from './shared.service';
import { BaseData } from './base-data';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchForm: FormGroup;
  tags: BaseData[] = [];
  licenses: BaseData[] = [];
  languages: BaseData[] = [];
  private tagsSubscription: Subscription;
  private licensesSubscription: Subscription;
  private languagesSubscription: Subscription;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.searchForm = this.fb.group({
      search: '',
      selectedTags: this.fb.array([]),
    });

    this.tagsSubscription = this.sharedService
      .getTags()
      .subscribe((tags: BaseData[]) => {
        console.log('Tags:', tags);
        this.tags = tags;
      });

    this.licensesSubscription = this.sharedService
      .getLicenses()
      .subscribe((licenses: BaseData[]) => {
        this.licenses = licenses;
      });

    this.languagesSubscription = this.sharedService
      .getLanguages()
      .subscribe((languages: BaseData[]) => {
        this.languages = languages;
      });
  }

  ngOnDestroy() {
    if (this.tagsSubscription) {
      this.tagsSubscription.unsubscribe();
    }
    if (this.licensesSubscription) {
      this.licensesSubscription.unsubscribe();
    }
    if (this.languagesSubscription) {
      this.languagesSubscription.unsubscribe();
    }
  }

  setValues(search: Search): void {
    this.searchForm.setValue(search);
  }

  getResults(): void {}
}
