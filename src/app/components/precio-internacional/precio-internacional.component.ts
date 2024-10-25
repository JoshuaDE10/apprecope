import { Component, OnInit } from '@angular/core';
import { PrecioInternacional } from '../../models/precio-internacional'; 
import { PrecioInternacionalService } from '../../services/precio-internacional.service'; 
@Component({
  selector: 'app-precio-internacional',
  templateUrl: './precio-internacional.component.html',
  styleUrl: './precio-internacional.component.css'
})
export class PrecioInternacionalComponent implements OnInit{
  public precioInternacional: PrecioInternacional;
  public tittle: string;
 constructor(private precioInternacionalService: PrecioInternacionalService){
  
  this.tittle='Precio Internacional';
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
ngOnIniti(){
  this.precioInternacionalService.getPrecioInternacional().subscribe(

    (response) =>{
      this.precioInternacional = response;
    },
    (error)=>{
      console.log(error);
    }
  )
  
  }
}
