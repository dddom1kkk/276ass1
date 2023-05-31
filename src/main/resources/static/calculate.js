var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var boundaries = [100.00, 95.00, 90.00, 85.00, 80.00, 75.00, 70.00, 65.00, 60.00, 55.00, 50.00, 0.00];

function calculateHistogramValues() {
    var histogramValues = new Array(boundaries.length).fill(0); // Adjust the length
  
    grades.forEach(function(grade) {
      for (var i = 0; i < boundaries.length; i++) { // Adjust the loop condition
        if (grade >= boundaries[i]) {
          histogramValues[i]++;
          break;
        }
      }
    });
  
    return histogramValues;
  }

function updateHistogram() {
    var histogramCells = document.querySelectorAll(".hist td.num");
    var histogramValues = calculateHistogramValues();
  
    // Update the histogram cells with the histogram values
    histogramCells.forEach(function(cell, index) {
      var numZeros = histogramValues[index + 1]; // Adjust the index by adding 1
      cell.textContent = "0".repeat(numZeros);
    });
  }

// function updateGradeBoundaries() {
//   var gradeInputs = document.querySelectorAll(".bnd input[name='name']");
//   var newBoundaries = Array.from(gradeInputs).map(function(input) {
//     return parseFloat(input.value);
//   });

//   boundaries = newBoundaries;
//   updateHistogram();
// }
function updateGradeBoundaries() {
    var gradeInputs = document.querySelectorAll(".bnd input[name='name']");
    var newBoundaries = Array.from(gradeInputs).map(function(input) {
      return parseFloat(input.value);
    });
  
    boundaries = newBoundaries;
    updateHistogram();
  }

  var submitButton = document.querySelector(".grade button");
  var newGradeInput = document.getElementById("ingr");

  submitButton.addEventListener("click", function() {
    var newGrade = parseFloat(newGradeInput.value);
    if (!isNaN(newGrade)) {
      grades.push(newGrade);
      newGradeInput.value = "";
      updateHistogram();
    } else {
      alert("Invalid input. Please enter a valid grade.");
    }
  });

// Add event listeners to the grade input fields
var gradeInputs = document.querySelectorAll(".bnd input[name='name']");
gradeInputs.forEach(function(input) {
  input.addEventListener("input", updateGradeBoundaries);
});

// Initial calculation and rendering of the histogram
updateHistogram();
