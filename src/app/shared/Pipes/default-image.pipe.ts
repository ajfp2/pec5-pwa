import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  
  transform(value: string, ...args: unknown[]): string {
    const defaultImage = 'assets/images/default.avif';
    const allowedImages = ['jpeg', 'jpg', 'gif', 'png', 'avif', 'webp'];
    const fileExtension = value.split('.').pop();
    const found = allowedImages.find(ex => fileExtension == ex);

    if(found){
      return value;
    } else return defaultImage;

  }

}
