class Calculator {
  constructor(previousoperandTextElement, currentoperandTextElement) {
    this.clear();
    this.previousoperandTextElement = previousoperandTextElement;
    this.currentoperandTextElement = currentoperandTextElement;
  }

  clear() {
    this.previousoperand = "";
    this.currentoperand = "";
    this.operand = undefined;
  }

  delete() {}

  appendNumber(number) {
    if(number === "." && this.currentoperand.includes('.')) return
    this.currentoperand = this.currentoperand.toString() + number.toString();
    console.log('number=> ',number)
    console.log('currentoperand=> ',this.currentoperand);
  }

  chooseOperation(operator) {
      this.operator=operator
      this.previousoperand=this.currentoperand
      this.currentoperand=''
      
  }
    compute(){
     let computation
     const prev=parseFloat(this.previousoperand)
     const curr=parseFloat(this.currentoperand)
     if(isNaN(prev)|| isNaN(curr)) return
     switch(this.operator){
       case'+':
       computation=prev+curr
       break
       case'-':
       computation=prev-curr
       break
       case'&#215;':
       computation=prev*curr
       break
       case'&#247;':
       computation=prev/curr
       break
       default:
         return
     }
      this.currentoperand=computation
      this.operator=undefined
      this.previousoperand=""
     
    }

  updateDisplay() {
      if(this.currentoperand==="")return
      if(this.previousoperand!==""){
        
          
      }
    this.currentoperandTextElement.innerText = this.currentoperand;
    this.previousoperandTextElement.innerText=this.previousoperand
}
}

const currentoperandTextElement = document.querySelector(
  "[data-currentoperand]"
);
const previousoperandTextElement = document.querySelector(
  "[data-previousoperand]"
);
const calculator = new Calculator(
  previousoperandTextElement,
  currentoperandTextElement
);
const digit = document.querySelectorAll("[data-digit]");
digit.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });

});

  const operator = document.querySelectorAll("[data-operator]");
operator.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });

});
const equal=document.querySelector('[data-equal]')
equal.addEventListener("click",button=>{
  calculator.compute()
  calculator.updateDisplay()
})
const clear =document.querySelector('[data-clear]');

const back=document.querySelector('[data-back]')