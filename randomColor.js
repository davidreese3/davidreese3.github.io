function generateGitHubGraph(){
    const graphContainer = document.getElementById('graphContainer');
    const colorArray = ["ff6f61", "7a2f2f", "e58e26", "c49b0b", "1b4d3e", "15616d", "1c3f60", "512d6d", ""];
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    let selectedColor = colorArray[randomIndex];

    const img = document.createElement('img');
    img.src = "http://ghchart.rshah.org/" + selectedColor + "/davidreese3"; 
    img.alt = "davidreese3's Github graph";
    img.className = 'gitHub';
    graphContainer.appendChild(img); 

    const span = document.getElementById('selectedColor');
    if(selectedColor == ""){
        span.textContent = "GitHub's default contribution color";
    }
    else{
        const hexColor = "#" + selectedColor;
        span.style.color = hexColor;
        span.textContent = hexColor;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    generateGitHubGraph();
});