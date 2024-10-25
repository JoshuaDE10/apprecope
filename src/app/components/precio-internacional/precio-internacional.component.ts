import { Component, OnInit } from '@angular/core';
import { PrecioInternacional } from '../../models/precio-internacional'; 
import { PrecioInternacionalService } from '../../services/precio-internacional.service'; 

@Component({
  selector: 'app-precio-internacional',
  templateUrl: './precio-internacional.component.html',
  styleUrls: ['./precio-internacional.component.css']  // Corregido aquí
})
export class PrecioInternacionalComponent implements OnInit {
  public precioInternacional: PrecioInternacional;
  public title: string;  // Corrección de 'tittle' a 'title'
  
  constructor(private precioInternacionalService: PrecioInternacionalService) {
    this.title = 'Precio Internacional';  // Corrección de 'tittle' a 'title'
  }

  ngOnInit(): void {  // Método corregido
    this.precioInternacionalService.getPrecioInternacional().subscribe(
      (response) => {
        this.precioInternacional = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
