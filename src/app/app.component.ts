import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //properties
  password:string = ''
  length:number= 0
  includeLetters:boolean = false
  includeNumbers:boolean = false
  includeSymbols:boolean = false

  //methods
  onButtonClick() {
    const letters:string = 'abcdefghijklmnopqrstuvwxyz'
    const numbers:string = '1234567890'
    const symbols:string = '!@#$%^&*()'

    let validChars:string = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword:string = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword;
}

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value:string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue
    }
    
  }

}


// event binding, property binding, interpolation