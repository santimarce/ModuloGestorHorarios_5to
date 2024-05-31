import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formdocentes',
  templateUrl: './formdocentes.component.html',
  styleUrl: './formdocentes.component.css'
})
export class FormdocentesComponent {
 
docenteForm: FormGroup;

constructor(){
  this.docenteForm = new FormGroup({
    cedula: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    
  });
}

ngOninit(): void{

}
onSubmit(): void {
  
  }
}
