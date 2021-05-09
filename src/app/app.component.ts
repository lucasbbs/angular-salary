import { Input, Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { calculateSalaryFrom } from '../help.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  amount: number = 0.0;
  dependentes: number = 0;
  formattedAmount: string = '';
  baseINSS: string = '0';
  discountINSS = '0';
  dependentesDiscount = '0';
  baseIRPF = '0';
  discountIRPF = '0';
  netSalary = '0';

  transformAmount(element: HTMLElement, dependentes: number) {
    // ({
    //   baseINSS: this.baseINSS,
    //   baseIRPF: this.baseIRPF,
    //   discountINSS: this.discountINSS,
    //   dependentesDiscount: this.dependentesDiscount,
    //   discountIRPF: this.discountIRPF,
    //   netSalary: this.netSalary,
    // } = calculateSalaryFrom(element.target.value, Number(dependentes)));
    let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    this.formattedAmount = currencyPipe.transform(this.amount, 'BRL');
    // element.target.value = this.formattedAmount;
    this.baseINSS = currencyPipe.transform(this.baseINSS, 'BRL');
    this.baseIRPF = currencyPipe.transform(this.baseIRPF, 'BRL');
    this.dependentesDiscount = currencyPipe.transform(
      this.dependentesDiscount,
      'BRL'
    );
    this.discountINSS = currencyPipe.transform(this.discountINSS, 'BRL');

    this.discountIRPF = currencyPipe.transform(this.discountIRPF, 'BRL');
    this.netSalary = currencyPipe.transform(this.netSalary, 'BRL');
  }
  ngOnInit(): void {
    console.log('Init');
    let dependentes = '0';
  }

  setValue = () => {
    this.amount = 0;
  };
}
