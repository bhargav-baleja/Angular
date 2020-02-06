import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachPipe'
})
export class SerachPipePipe implements PipeTransform {

  
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.fullName.includes(args)) || (val.emailId.includes(args)) || (val.mobileNumber.includes(args)) || (val.department.includes(args));
      return rVal;
    })

  }
}
