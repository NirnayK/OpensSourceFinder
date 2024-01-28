import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode = new BehaviorSubject<boolean>(false);

  constructor() {}

  // Method to toggle between light and dark mode
  toggleDarkMode(): void {
    this._darkMode.next(!this._darkMode.value);
  }

  // Observable to subscribe to the current theme mode
  get darkMode$() {
    return this._darkMode.asObservable();
  }
}
