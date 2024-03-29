import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    transform(value: string, fmt: string): string {

        let short, long;

        switch(value) {
            case 'Graz':
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
                break;
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Fulsbuettel Helmut Schmidt';
                break;
            case 'Wien':
                short = 'VIE';
                long = 'Flughafen Wien Schwechat';
                break;
            default:
                short = long = 'ROM';
        }

        if (fmt == 'short') return short;
        return long;

    }

}