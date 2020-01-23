import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {
  textoDaLabel = '';
  idCampo = '';
  
  @Input() campo = new FormControl();

  constructor(private elemento: ElementRef) { }

  ngOnInit() {
    const element = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = element.name.replace(element.name[0], element.name[0].toUpperCase());
    this.idCampo = element.name;
  }
}
