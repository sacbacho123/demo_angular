import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phones',
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: number | any, country: string): any {
    try {
      const phoneNumber = parsePhoneNumber(
        phoneValue + '',
        country as CountryCode
      );
      return (
        `(+${phoneNumber.countryCallingCode})` +
        phoneNumber.nationalNumber.replace(/\s/g, '')
      );
    } catch (error) {
      return phoneValue;
    }
  }
}
