import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private viewMode = 'table';//table, card
  private loading = false;
  constructor() { }

  setLoading(load: boolean): void {
    this.loading = load;
  }

  getLoading(): boolean {
    return this.loading;
  }

  setMode(load: string): void {
    this.viewMode = load;
  }

  getMode(): string {
    return this.viewMode;
  }
}
