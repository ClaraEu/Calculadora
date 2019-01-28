import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: number


  constructor() {
    this.resultado = ""
  }

  ngOnInit() {
  }

  handleClick(numero){
    this.resultado += numero
    if(numero === 0){
      this.resultado = 0
    }
  }

  resolver(){
    this.resultado = eval(this.resultado)
  }



}
