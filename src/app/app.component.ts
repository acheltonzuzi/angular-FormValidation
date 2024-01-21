import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
  builder=inject(FormBuilder)
  forms=this.builder.group({
    nome:['',Validators.required],
    email:['',[Validators.required,Validators.email]]
  })
  isSubmited=false
  validar(campo:string){
    return this.forms.get(campo)?.invalid &&(this.forms.get(campo)?.dirty || this.forms.get(campo)?.touched||this.isSubmited) 
  }
  errorMessage(type:string,campo:string){
    return this.forms.get(campo)?.hasError(type) &&(this.forms.get(campo)?.dirty || this.forms.get(campo)?.touched||this.isSubmited)
  }
  submit(){
    this.isSubmited=true
    if (this.forms.valid) {
      console.log(this.forms.value);
    }
    
  }
  
  
}
