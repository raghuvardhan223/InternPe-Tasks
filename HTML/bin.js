const addToCartButtons = document.getElementsByClassName('add-to-cart');
const cartItemsList = document.getElementsByClassName('cart-items');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentNode;
    const productTitle = product.querySelector('h3').textContent;
    const productPrice = product.querySelector('p').textContent;

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productTitle} - ${productPrice}`;
    cartItemsList.appendChild(cartItem);
  });
});
switch(fromUnit){
  case "inches": switch (toUnit) {
      case "inches": document.getElementById("result").value = lengtInput;break;
      case "centimeter": document.getElementById("result").value = lengthInput *2.54;break;
      case "feet" : document.getElementById("result").value = lengthInput*0.0833333;break;
      case "meter" : document.getElementById("result").value = lengthInput*0.0254;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*25.4;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*25400000;break;
      case "yard" : document.getElementById("result").value = lengthInput *0.0278;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput * 0.0000137149;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.0000254;break;
  
  }
  break;
  case "centimeter":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*0.0393701;break;
      case "centimeter":document.getElementById("result").value = lengthInput;break;
      case "feet" : document.getElementById("result").value = lengthInput*0.0394;break;
      case "meter" : document.getElementById("result").value = lengthInput*0.01;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*10;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*10000000;break;
      case "yard" : document.getElementById("result").value = lengthInput *0.0109361;
      case "nautical mile" : document.getElementById("result").value = lengthInput * 0.0000053996;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.00001;break;

  }
  break;
  case "feet":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*12;break;
      case "centimeter":document.getElementById("result").value = lengthInput*30.48;break;
      case "feet" : document.getElementById("result").value = lengthInput;break;
      case "meter" : document.getElementById("result").value = lengthInput*0.3048;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*304.8;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*304800000;break;
      case "yard" : document.getElementById("result").value = lengthInput *0.333333;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput * 0.000164579;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.0003048;break;


  }
  break;
  case "meter":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*39.3701;break;
      case "centimeter":document.getElementById("result").value = lengthInput*100;break;
      case "feet" : document.getElementById("result").value = lengthInput*3.28;break;
      case "meter" : document.getElementById("result").value = lengthInput;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*1000;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*1000000000;break;
      case "yard" : document.getElementById("result").value = lengthInput *1.09361;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput * 0.000539957;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.001;break;

  }
  break;
  case "millimeter":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*0.0393701;break;
      case "centimeter":document.getElementById("result").value = lengthInput*0.1;break;
      case "feet" : document.getElementById("result").value = lengthInput*0.00328;break;
      case "meter" : document.getElementById("result").value = lengthInput*3.28;break;
      case "millimeter" : document.getElementById("result").value = lengthInput;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*1000000;break;
      case "yard" : document.getElementById("result").value = lengthInput *0.00109361;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput *5.4*0.0000001;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.000001;break;
}   break;

case "nanometer":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*3.937*0.000001;break;
      case "centimeter":document.getElementById("result").value = lengthInput*0.0000001;break;
      case "feet" : document.getElementById("result").value = lengthInput*3.2808*0.00001;break;
      case "meter" : document.getElementById("result").value = lengthInput*0.000000001;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*0.000001;break;
      case "nanometer" : document.getElementById("result").value = lengthInput;break;
      case "yard" : document.getElementById("result").value = lengthInput *1.0936*0.00001;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput *5.3996*0.000000001;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.000000000001;break;
}
break;
case "yard":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*36;break;
      case "centimeter":document.getElementById("result").value = lengthInput*91.44;break;
      case "feet" : document.getElementById("result").value = lengthInput*3;break;
      case "meter" : document.getElementById("result").value = lengthInput*0.9144;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*914.4;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*9.144*0.00001;break;
      case "yard" : document.getElementById("result").value = lengthInput;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput *0.000493737;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*0.0009144;break;
}break;

case "nautical mile":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*72913.4;break;
      case "centimeter":document.getElementById("result").value = lengthInput*185200;break;
      case "feet" : document.getElementById("result").value = lengthInput*6076.12;break;
      case "meter" : document.getElementById("result").value = lengthInput*1852;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*1.852*100;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*1.852*100000000;break;
      case "yard" : document.getElementById("result").value = lengthInput*2025.37;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput;break;
      case "kilometer" : document.getElementById("result").value = lengthInput*1.852;break;
}break;
case "kilometer":
  switch(toUnit){
      case "inches": document.getElementById("result").value = lengthInput*39370.1;break;
      case "centimeter":document.getElementById("result").value = lengthInput*100000;break;
      case "feet" : document.getElementById("result").value = lengthInput*3280.84;break;
      case "meter" : document.getElementById("result").value = lengthInput*1000;break;
      case "millimeter" : document.getElementById("result").value = lengthInput*1000000;break;
      case "nanometer" : document.getElementById("result").value = lengthInput*100000000000;break;
      case "yard" : document.getElementById("result").value = lengthInput*1093.61;break;
      case "nautical mile" : document.getElementById("result").value = lengthInput*0.5339957;break;
      case "kilometer" : document.getElementById("result").value = lengthInput;
      break;
}
}