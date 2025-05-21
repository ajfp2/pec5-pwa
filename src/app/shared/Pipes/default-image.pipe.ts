import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  
  transform(value: string, ...args: unknown[]): string {
    const defaultImage = '../../../assets/images/default.avif';

    return !!value ? value : defaultImage;
  }

}
