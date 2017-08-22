import { Component, OnInit } from '@angular/core';

import '../assets/css/style.css';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    tela: string;
    valor: number;
    sinal : string;
    total : number;
    aux: string;
    resultado: number;

    constructor() {
        this.title = "Calculadora do Gustavo";
        this.tela = "";
        this.total = 0;
        this.aux="";
    }

    ngOnInit(): void {
    }
    
    calcNum(num){
        this.tela = this.tela + num;
        if (this.sinal=="+" || this.sinal=="-"){
            this.aux = this.aux+num;
        }
    }
    limpar(){
        this.tela = "";
        this.valor= 0;
        this.sinal="";
        this.aux="";
        this.resultado = 0;
    }
    calcSomar(){
        if (this.resultado > 0){
            this.valor = this.resultado
            this.sinal = "+";
            this.tela = this.valor+"+";
            this.aux ="";
        }
        else{
            this.valor = parseInt(this.tela);
            this.sinal = "+";
            this.tela = this.valor+"+";
            this.aux ="";
        }
    }
    calcSubtrair(){
        if (this.resultado > 0){
            this.valor = this.resultado
            this.sinal = "-";
            this.tela = this.valor+"-";
            this.aux ="";
        }
        else{
            this.valor = parseInt(this.tela);
            this.sinal = "-";
            this.tela = this.valor+"-";
            this.aux ="";
        }
    }
    Resultado(){
        if (this.sinal == "+"){
            this.resultado = (this.valor) + (parseInt(this.aux));
            this.valor = 0;
            this.sinal="";
            this.tela = this.resultado+"";          
        }
        else if(this.sinal == "-"){
            this.resultado = (this.valor) - (parseInt(this.aux));
            this.valor = 0;
            this.sinal="";  
            this.tela = this.resultado+"";
        }
        this.sinal="";     
    }
}
