var calculadora = {
  init: function(){
    this.operands = ["0"];
    this.currentIndex = 0;
    var self = this;
    this.keys = document.getElementsByClassName('tecla');
    for(var i = 0; i< this.keys.length ; i++){
      this.keys[i].addEventListener('mousedown', this.scaleDown.bind(this));
      this.keys[i].addEventListener('mouseup', this.scaleUp.bind(this));
      this.keys[i].addEventListener('click', this.handleClick.bind(this));
      this.keys[i].style.transition = "0.05s transform ease";
    }
  },
  scaleUp: function(e){
      setTimeout(function(){e.target.style.transform = "scale(1,1)"} , 200);
  },
  scaleDown: function(e){
      e.target.style.transform = "scale(0.95,0.95)";
  },
  handleClick:function(e){
    var newValue = String(this.operands[this.currentIndex])
    if(newValue==="0"){
      newValue = '';
    }
    switch(e.target.id){
      case "on":
        newValue = "0";
        this.currentIndex = 0;
        this.operands = ["0"];
        break;
      case "sign":
        if( (/\-/).test(newValue) ){
          newValue = newValue.substring(1);
        }else{
          newValue = '-' + newValue;
        }
        break;
      case "dividido":
        if(newValue = '') {
          this.operands[this.currentIndex] = "0";
        }
        this.operands.push("/")
        this.operands.push("");
        this.currentIndex += 2;
        break;
      case "por":
        if (newValue = '') {
          this.operands[this.currentIndex] = "0";
        }
        this.operands.push("*")
        this.operands.push("");
        this.currentIndex += 2;
        break;
      case "menos":
        if (newValue = '') {
          this.operands[this.currentIndex] = "0";
        }
        this.operands.push("-")
        this.operands.push("");
        this.currentIndex += 2;
        break;
      case "mas":
        if (newValue = '') {
          this.operands[this.currentIndex] = "0";
        }
        this.operands.push("+")
        this.operands.push("");
        this.currentIndex += 2;
        break;
      case "igual":
        if (newValue == '') {
          break;
        }
        this.calcular();
        return; //Nos Salimos de toda la funcion
      case "punto":
        if(!(/\./).test(newValue)){
          newValue += ".";
        }
        break;
      case "raiz":
        break;
      default:
        newValue += e.target.id;
    } // end switch
    newValue = newValue.substring(0, 8);
    if(!isNaN(parseFloat(newValue))){
      this.operands[this.currentIndex] = newValue;
    }
    if( (/\.$/).test(newValue) ){
      this.displayValue(newValue + '0');
    }else {
      this.displayValue(newValue);
    }
  },
  displayValue: function(value){
    document.getElementById('display').innerHTML = value;
  },
  calcular: function(){
    var operacion = this.operands.join(' ');
    var resultado = eval(operacion);
    this.operands = [String(resultado).substring(0,8)];
    this.currentIndex = 0;
    this.displayValue(String(resultado).substring(0, 8));
  }
}// end calculadora

calculadora.init();
