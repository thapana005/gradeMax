export default class BMI {
  bmiCalculate(weight, height){
    return weight/height**2;
  }

  regionCalculate(bmi, region){
    let ms;
    switch(region){
      case 'asia': if(bmi <= 18.5){
                      return ms='Under weight';
                    }else if(bmi > 18.5 || bmi <= 24.9){
                      return ms='Normal weight';
                    }else if(bmi > 24.9 || bmi <= 29.9){
                      return ms='Overweight';
                    }else if(bmi > 29.9){
                      return ms='Obesity';
                    }
        break;
      case 'western': if(bmi <= 28.5){
                      return ms='Under weight';
                    }else if(bmi > 28.5 || bmi <= 34.9){
                      return ms='Normal weight';
                    }else if(bmi > 34.9 || bmi <= 39.9){
                      return ms='Overweight';
                    }else if(bmi > 39.9){
                      return ms='Obesity';
                    }
        break;

    }
  }

}