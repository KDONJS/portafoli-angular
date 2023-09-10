import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  texto = "YORLIN QY";
  textoMostrado = '';
  i = 0;
  ngOnInit(){
    this.iniciarEfectoEscritura();
  }

  iniciarEfectoEscritura() {
    this.escribirTexto();
    setInterval(() => {
      this.textoMostrado = '';
      this.i = 0;
      this.escribirTexto();
    }, 10000); 
  }

  escribirTexto() {
    if (this.i < this.texto.length) {
      this.textoMostrado += this.texto.charAt(this.i);
      this.i++;
      setTimeout(() => {
        this.escribirTexto();
      }, 200);
    }
  }
}
