import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'change' })
export class Change implements PipeTransform {
    transform(mobileNumber: string) {
        if (mobileNumber.length !== 10) {
            return 'Invalid Number!';
        }
        else {
            return '('+mobileNumber.substr(0,3)+')-'+mobileNumber.substr(3,3)+'-'+mobileNumber.substr(6,4);
        }
    }
}