/* add your functions here */

function Job(company, title, location, time, description) {
    this.company = company,
    this.title = title,
    this.location = location,
    this.time = time,
    this.description = description 
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

function Class(title, description) {
    this.title = title,
    this.description = description 
}

Class.prototype.outputClass = function () {
  document.write("<div class='class-item'>");
  document.write("<div class='class-title'><h5>" + this.title + "</h4></div>");
  //document.write("<div class='class-description'><ul>" + this.description + "</ul></div>");
  document.write("</div>");
};

function printClass(classes, class_name) {
  document.write("<h2>" + class_name + " Year</h2>");
  for (let i = 0; i < classes.length; i++) {
    classes[i].outputClass();
  }
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

