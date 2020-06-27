import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) {  
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
  }
    
  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
