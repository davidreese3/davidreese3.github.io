/* add your functions here */

function Job(company, title, location, time, description) {
    this.company = company,
    this.title = title,
    this.location = location,
    this.time = time,
    this.description = description //array of each bullet
}

Job.prototype.outputJob = function () {
    document.write("<div class=\"job\">")

    document.write("<table id=\"resumeTable\">")
    document.write("<tr>")
    document.write("<td id=\"leftSide\"><strong>"+this.company+"</strong></td>")
    document.write("<td id=\"rightSide\">"+this.location+"</td>")
    document.write("</tr>")
    
    document.write("<tr>")
    document.write("<td id=\"leftSide\"><em>"+this.title+"</em></td>")
    document.write("<td id=\"rightSide\"><em>"+this.time+"</em></td>")
    document.write("</tr>")

    document.write("</table>")

    document.write("<ul>")
    for(i=0;i<(this.description).length;i++){
        document.write("<li>"+this.description[i]+"</li>")
    }
    document.write("</ul>")
    document.write("</div>")
    document.write("<br>")
}

function Class(title, description, lang) {
    this.title = title,
    this.description = description 
    this.lang = lang;
}

Class.prototype.outputClass = function (count,length) {
    document.write("<details>")
    document.write("<summary><strong>"+this.title+"</strong></summary>")
    document.write("<ul><li>"+this.description+"</li></ul>");
    if(this.lang!=null){
      if((this.lang).includes(",")){
        document.write("<ul><li>Skills: "+this.lang+"</li></ul>");

      }
      else{
        document.write("<ul><li>Skill: "+this.lang+"</li></ul>");
      }
    }
    if(count!=length-1){
        document.write("<br>");
    }
    document.write("</details>")
}

function printClass(classes,year){
    document.write("<details><summary class=\"year\">"+year+" Year</summary>")
    document.write("<ul class=\"yearContent\">");
    (function () {
        for(j=0;j<classes.length;j++){
            classes[j].outputClass(j,classes.length);
        }
    })();
    document.write("</ul>")
    document.write("</details>")
}

function closeAllSummaries() {
    const summaries = document.querySelectorAll("details");
    summaries.forEach((summary) => {
    summary.open = false;
    });
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("darkMode");
  
  // sustain dark mode
  if (element.classList.contains("darkMode")) {
    document.cookie = "darkMode-enabled=true; path=/;";
  } else {
    document.cookie = "darkMode-enabled=; path=/;";
  }
}

window.onload = function() {
  var element = document.body;
  var darkModeEnabled = false;
  
  // check if dark mode is sustained
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === "darkMode-enabled" && cookie[1] === "true") {
      darkModeEnabled = true;
      break;
    }
  }
  
  if (darkModeEnabled) {
    element.classList.add("darkMode");
  } else {
    element.classList.remove("darkMode"); // Remove the darkMode class if it's not enabled
  }
};

