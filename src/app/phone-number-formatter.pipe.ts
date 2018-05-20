import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPhoneNumber'
})

export class PhoneNumberFormatterPipe implements PipeTransform {
  transform(value: any) {
    return '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 11);
  }

}
