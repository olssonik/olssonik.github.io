function chooseConversion() {
  document.getElementById("column1").value = null
  document.getElementById("column2").value = null
  document.getElementById("sum1").innerHTML = null
  document.getElementById("sum2").innerHTML = null

  conversionUnits = document.getElementById("conversionOption").value
  console.log(conversionUnits)
  if (conversionUnits == 0) {
    document.getElementById("unitsName1").innerHTML = " "
    document.getElementById("unitsName2").innerHTML = " "
  }else if (conversionUnits == "mtfD"){
    document.getElementById("unitsName1").innerHTML = "Meters"
    document.getElementById("unitsName2").innerHTML = "Feet"
  }else if (conversionUnits == "ktmD") {
    document.getElementById("unitsName1").innerHTML = "Kilometers"
    document.getElementById("unitsName2").innerHTML = "Miles"
  }else if (conversionUnits == "itcD") {
    document.getElementById("unitsName1").innerHTML = "Inches"
    document.getElementById("unitsName2").innerHTML = "Centimeters"
  }else if (conversionUnits == "dteC") {
    document.getElementById("unitsName1").innerHTML = "Dollars"
    document.getElementById("unitsName2").innerHTML = "Euros"
  }else if (conversionUnits == "etpC") {
    document.getElementById("unitsName1").innerHTML = "Euros"
    document.getElementById("unitsName2").innerHTML = "Pounds"
  }else if (conversionUnits == "ytdC") {
    document.getElementById("unitsName1").innerHTML = "Yens"
    document.getElementById("unitsName2").innerHTML = "Dollars"
  }else if (conversionUnits == "stmT") {
    document.getElementById("unitsName1").innerHTML = "Seconds"
    document.getElementById("unitsName2").innerHTML = "Minutes"
  }else if (conversionUnits == "mthT") {
    document.getElementById("unitsName1").innerHTML = "Minutes"
    document.getElementById("unitsName2").innerHTML = "Hours"
  }else if (conversionUnits == "htdT") {
    document.getElementById("unitsName1").innerHTML = "Hours"
    document.getElementById("unitsName2").innerHTML = "Days"
  }else if (conversionUnits == "ltgV") {
    document.getElementById("unitsName1").innerHTML = "Gallons"
    document.getElementById("unitsName2").innerHTML = "Liters"
  }else if (conversionUnits == "mtfoV") {
    document.getElementById("unitsName1").innerHTML = "Fluid ounces"
    document.getElementById("unitsName2").innerHTML = "Mililiters"
  }else if (conversionUnits == "cmtcfV") {
    document.getElementById("unitsName1").innerHTML = "Cubic meters"
    document.getElementById("unitsName2").innerHTML = "Cubic feet"
  }else if (conversionUnits == "ktpW") {
    document.getElementById("unitsName1").innerHTML = "Kilograms"
    document.getElementById("unitsName2").innerHTML = "Pounds"
  }else if (conversionUnits == "gtoW") {
    document.getElementById("unitsName1").innerHTML = "Grams"
    document.getElementById("unitsName2").innerHTML = "Ounces"
  }
}



function convertUnits(column1, column2) {
  if (conversionUnits == "0") {
    return 0;
  } else if (conversionUnits == "mtfD") {
    
    sum1 = parseInt(column1) * 3.28084
    sum2 = parseInt(column2) / 3.28084
    fixedSum1 = parseFloat(sum1).toFixed(3)
    fixedSum2 = parseFloat(sum2).toFixed(3)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "ft"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "m"
  }else if (conversionUnits == "ktmD") {
    
    sum1 = parseInt(column1) * 1.609
    sum2 = parseInt(column2) / 1.609
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "mi"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "Km"
  }else if (conversionUnits == "itcD") {
    
    sum1 = parseInt(column1) * 2.54
    sum2 = parseInt(column2) / 2.54
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + 'cm'
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + '"'
  }else if (conversionUnits == "dteC") {
    
    sum1 = parseInt(column1) * 1.08
    sum2 = parseInt(column2) / 1.08
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "€"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "$"
  }else if (conversionUnits == "etpC") {
    
    sum1 = parseInt(column1) * 1.15
    sum2 = parseInt(column2) / 1.15
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "£"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "€"
  }else if (conversionUnits == "ytdC") {
    
    sum1 = parseInt(column1) / 137.96
    sum2 = parseInt(column2) * 137.96
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "$"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "¥"
  }else if (conversionUnits == "stmT") {
    
    sum1 = parseInt(column1) / 60
    sum2 = parseInt(column2) * 60
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "min"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "sec"
  }else if (conversionUnits == "mthT") {
    
    sum1 = parseInt(column1) / 60
    sum2 = parseInt(column2) * 60
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "hours"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "minutes"
  }else if (conversionUnits == "htdT") {
    
    sum1 = parseInt(column1) / 24
    sum2 = parseInt(column2) * 24
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "days"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "hours"
  }else if (conversionUnits == "ltgV") {
    
    sum1 = parseInt(column1) / 4.54609
    sum2 = parseInt(column2) * 4.54609
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "gallons"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "liters"
  }else if (conversionUnits == "mtfoV") {
    
    sum1 = parseInt(column1) / 29.5735
    sum2 = parseInt(column2) * 29.5735
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "fluid ounces"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "mililiters"
  }else if (conversionUnits == "cmtcfV") {
    
    sum1 = parseInt(column1) * 35.3147
    sum2 = parseInt(column2) / 35.3147
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "cubic feet"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "cubic meters"
  }else if (conversionUnits == "ktpW") {
    
    sum1 = parseInt(column1) * 2.20462
    sum2 = parseInt(column2) / 2.20462
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "Pounds"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "Kilograms"
  }else if (conversionUnits == "gtoW") {
    
    sum1 = parseInt(column1) / 28.3495
    sum2 = parseInt(column2) * 28.3495
    fixedSum1 = parseFloat(sum1).toFixed(2)
    fixedSum2 = parseFloat(sum2).toFixed(2)

    document.getElementById("sum1").innerHTML = " = " + fixedSum1 + "Ounces"
    document.getElementById("sum2").innerHTML = " = " + fixedSum2 + "Grams"
  }
}