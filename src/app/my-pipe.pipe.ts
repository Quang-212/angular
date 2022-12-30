import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    return value + args.reduce((a, b) => a + b, 0);
  }
}
