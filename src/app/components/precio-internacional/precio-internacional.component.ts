import { Component, OnInit } from '@angular/core';
import { PrecioInternacional } from '../../models/precio-internacional';
import { PrecioInternacionalService } from '../../services/precio-internacional.service';

@Component({
  selector: 'app-precio-internacional',
  templateUrl: './precio-internacional.component.html',
  styleUrls: ['./precio-internacional.component.css']
})
export class PrecioInternacionalComponent implements OnInit {
  public precioInternacional: PrecioInternacional = {
    periodos: [],
    materiales: []
  }; // Inicializa aquí
  public title: string;

  constructor(private precioInternacionalService: PrecioInternacionalService) {
    this.title = 'Precio Internacional';
  }

  ngOnInit(): void {
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
