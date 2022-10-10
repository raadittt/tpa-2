function hitung() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let ket = "";

  let bmi = weight / (height / 100) ** 2;

  if (bmi < 18.5) {
    ket = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    ket = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    ket = "Overweight";
  } else if (bmi >= 30) {
    ket = "Obesity";
  }
  
  document.getElementById("output").innerHTML = "Your BMI is " + bmi.toFixed(1) + " which means You are " + ket;
}
