import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading = false;
  constructor() { }

  setLoading(load: boolean): void {
    this.loading = load;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
