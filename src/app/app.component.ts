import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    valor: Int32Array;
    resultado = Float64Array;
    A1 = Float32Array ;

    constructor() {
        this.title = "Calculadora do Gustavo";
    }

    ngOnInit(): void {
    }
    
    calcNum(num){
        var aux = this.valor;
        this.valor = aux+num;
    }
    
    limpar(){
        this.valor = null
    }
    calcSomar(){
        var aux = this.valor;
        this.valor = aux;
    }
    Resultado(){
        
    }
}
