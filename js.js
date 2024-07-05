
function addDepartment() {
  var departmentInput = document.getElementById("departmentName");
  var departmentName = departmentInput.value.trim();

  if (departmentName === "") {
    alert("Name of department");
    return;
  }

  var paragraph = document.createElement("p");
  paragraph.textContent = departmentName;

  var departmentList = document.getElementById("departmentList");
  departmentList.appendChild(paragraph);

  departmentInput.value = "";
}


function toggleVisibility(paragraphNumber) {
  var paragraphs = document.querySelectorAll('.paragraph');
  var index = paragraphNumber - 1;

  
  paragraphs[index].style.display = (paragraphs[index].style.display === 'none') ? 'block' : 'none';
}


function changeText() {
  var button = document.getElementById('myButton');
  button.textContent = 'Clicked!';
  button.disabled = true;
}
