import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {

  constructor(
    private campo: ElementRef
  ) { }

  ngOnInit(): void {
    const campo = this.campo.nativeElement;
    campo.setAttribute('placeholder',' ');
    campo.classList.add('mdl-textfield__input');
  } 


}
