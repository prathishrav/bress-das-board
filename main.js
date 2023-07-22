

 const xValues = [100,200,300,400,500,600,700,800,900,1000];

 new Chart("myChart", {
   type: "line",
   data: {
     labels: xValues,
     datasets: [{ 
       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
       borderColor: "red",
       fill: false
     }, { 
       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
       borderColor: "green",
       fill: false
     }, { 
       data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
       borderColor: "blue",
       fill: false
     }]
   },
   options: {
     legend: {display: false}
   }
 });

 
 function selectDiv(clickedDiv) {
 
  const allDivs = document.getElementsByClassName('box');
  for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].classList.remove('selected');
  }

 
  clickedDiv.classList.add('selected');
}

  function selectDivs(clickedDiv) {
    const allDivs = document.getElementsByClassName('tablesec3');
    for (let i = 0; i < allDivs.length; i++) {
      allDivs[i].classList.remove('selected');
    }

    clickedDiv.classList.add('selected');
  }


function toggleIcon() {
  const toggleIcon = document.getElementById("toggle-icon");
  toggleIcon.classList.toggle("fa-angle-down");
  toggleIcon.classList.toggle("fa-angle-up");

  if (toggleIcon.classList.contains("fa-down")) {

      plusBtn.style.height = "0"
  } else {
      plusBtn.style.height = "100%"
  }
}


document.addEventListener("DOMContentLoaded",function(clicked) {
  const selectHeader = document.getElementById("selectHeader");
  const arrowIcon = document.getElementById("arrowIcon");
  const optionsList = document.getElementById("optionsList");
  const options = optionsList.querySelectorAll(".option");

  selectHeader.addEventListener("click", function(click) {
    optionsList.style.display = optionsList.style.display === "none" ? "block" : "none";
    arrowIcon.classList.toggle("fa-caret-down");
    arrowIcon.classList.toggle("fa-caret-up");
    console.log(click);
  });

  options.forEach(function(option) {
    option.addEventListener("click", function() {
      selectHeader.querySelector("span").textContent = option.textContent;
      optionsList.style.display = "none";
      arrowIcon.classList.remove("fa-caret-up");
      arrowIcon.classList.add("fa-caret-down");
    });
  });
});
// hasbd
const selectElements = document.querySelectorAll("select");

  selectElements.forEach(function(select) {
    select.addEventListener("focus", function() {
      this.parentNode.classList.add("focus");
    });

    select.addEventListener("blur", function() {
      this.parentNode.classList.remove("focus");
    });

    select.addEventListener("change", function() {
      this.parentNode.classList.remove("focus");
    });
  });
