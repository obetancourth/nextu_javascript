var calculadora = {
  init: function(){
    this.operands = ["0"];
    this.currentIndex = 0;
    var self = this;
    this.keys = document.getElementsByClassName('tecla');
    for(var i = 0; i< this.keys.length ; i++){
      this.keys[i].addEventListener('click', this.handleClick.bind(this));
    }
  },
  handleClick:function(e){
    var newValue = String(this.operands[this.currentIndex])
    if(newValue==="0"){
      newValue = '';
    }
    switch(e.target.id){
      case "on":
        break;
      case "sign":
        if( (/\-/).test(newValue) ){
          newValue = newValue.substring(1);
        }else{
          newValue = '-' + newValue;
        }
        break;
      case "dividido":
        break;
      case "por":
        break;
      case "menos":
        break;
      case "mas":
        break;
      case "igual":
        break;
      case "punto":
        if(!(/\./).test(newValue)){
          newValue += ".0";
        }
        break;
      case "raiz":
        break;
      default:
        if( (/\.0/).test(newValue) ){
          newValue = newValue.substring(0, newValue.length - 1);
        }
        newValue += e.target.id;
    } // end switch
    console.log(newValue);
    if(!isNaN(parseFloat(newValue))){
      this.operands[this.currentIndex] = newValue.substring(0,8);
    }
    this.displayValue(newValue);
  },
  displayValue: function(value){
    document.getElementById('display').innerHTML = value;
  }
}

calculadora.init();
