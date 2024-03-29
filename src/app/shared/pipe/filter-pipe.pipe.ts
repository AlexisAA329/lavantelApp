import { Pipe, PipeTransform } from '@angular/core';
import { SucursalesModel } from '@core/models/sucursales.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Array<any>, arg: string): any[] {
    const resultPosts = [];
    for(const post of value){
      console.log('🔴🔴', post)
      if (post.nombre.toLowerCase( ).indexOf(arg.toLowerCase( )) > -1 ){
        resultPosts.push(post);        
      }
    }
    return resultPosts;
  }

   
}
