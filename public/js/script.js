function openNav() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
  document.getElementById("topBar").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  document.getElementById("topBar").style.display = "block";
}
var formatted_data = "";
var workingData = [];
var response;
sessionStorage.setItem("actors", fetch("/actors").then(res => res.json()));
window.onload = function() {
    fetch("/actors").then(data => data.json()).then(data => {
      response = data;
      const cont7 = document.querySelector("#chart7");
        console.log(data);
        var chart7 = new CanvasJS.Chart(cont7, {
        backgroundColor: null,
        animationEnabled: true,
        title: {
          text: "Actor Test Chart"
        },
        axisX: {
          title: "person",
          interval: 1
        },
        axisY: {
          title: "Person ID",
          interval: 1
        },
        data: [
          {
            type: "bar",
            toolTipContent:
              'Actor ID: {x} <br>Role Type ID:  {y}',
            dataPoints: [
              { x: response["rows"][0].actor_id, y: response["rows"][0].role_type_id },
              { x: response["rows"][1].actor_id, y: response["rows"][1].role_type_id },
              { x: response["rows"][2].actor_id, y: response["rows"][2].role_type_id },
              { x: response["rows"][3].actor_id, y: response["rows"][3].role_type_id },
              { x: response["rows"][4].actor_id, y: response["rows"][4].role_type_id },
              { x: response["rows"][5].actor_id, y: response["rows"][5].role_type_id },
              { x: response["rows"][6].actor_id, y: response["rows"][6].role_type_id },
              { x: response["rows"][7].actor_id, y: response["rows"][7].role_type_id },
              { x: response["rows"][8].actor_id, y: response["rows"][8].role_type_id },
              { x: response["rows"][9].actor_id, y: response["rows"][9].role_type_id }
            ]
          }
        ]
      });
      //chart7.dataPoints = { x: response["rows"][0].comment, y: response["rows"][0].person_id}
      chart7.render();

    });
  }
    /*fetchActors().then( res => {
  var obj = JSON.stringify(res);
  var chart7 = new CanvasJS.Chart(cont7, {
    backgroundColor: null,
    animationEnabled: true,
    title: {
      text: "Actor Test Chart"
    },
    axisX: {
      title: "person",
      interval: 1
    },
    axisY: {
      title: "Person ID",
      interval: 1
    },
    data: [
      {
        type: "bar",
        toolTipContent:
          '<img src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/"{url}"" style="width:40px; height:20px;"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP',
        dataPoints: [
          { x: obj[0].comment, y: obj[0].person_id}
        ]
      }
    ]
  });
  chart7.render();
});*/
window.addEventListener("load", () => {
  const cont = document.querySelector("#chart");
  const cont2 = document.querySelector("#chart2");
  const checkbox = document.querySelector("#dark");
  //console.log(sessionStorage.getItem("actors"));
  async function actorFetch() {
    let response = fetch("/actors").then(res => res.json())
    .then(data => {
      //console.log(data);
      for(var i = 0; i<data.length - 1; i++) {
        workingData.push = data[i];
      }
    });
    /*let data;
    data = await response.json().then(async function() {
      for(var i = 0; i<data.length - 1; i++) {
        workingData.push = data[i];
      }
      console.log("not working data");
      console.log(workingData);
    });*/
    //sessionStorage.setItem("actors", data);
    //console.log(data);
  }
  /*actorFetch().then(data => {
    for(var i = 0; i<data.length - 1; i++) {
    workingData.push = data[i];
  }
  console.log("not working data");
  console.log(workingData);
});*/
  //ACTOR TEST CHART

  //END TEST CHART
  sessionStorage.setItem("groupings", fetch("/groupings"));
  sessionStorage.setItem("instances", fetch("/instances"));
  sessionStorage.setItem("messages", fetch("/messages"));
  sessionStorage.setItem("msgactions", fetch("/msgactions"));
  sessionStorage.setItem("people", fetch("/people"));
  sessionStorage.setItem("roles", fetch("/roles"));
  sessionStorage.setItem("versions", fetch("/versions"));

  //console.log(sessionStorage.getItem("actors"))

  if (sessionStorage.getItem("mode") == "dark") {
    darkmode();
  } else {
    nodark();
  }

  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      darkmode();
    } else {
      nodark();
    }
  });

  function darkmode() {
    document.body.classList.add("dark-mode");
    checkbox.checked = true;
    sessionStorage.setItem("mode", "dark");
    if (cont) {
      var chart = new CanvasJS.Chart(cont, {
        backgroundColor: null,
        animationEnabled: true,
        title: {
          text: "Test Chart 1",
          fontColor: "white"
        },
        axisX: {
          interval: 1
        },
        axisY: {
          title: "Expenses in Billion Dollars",
          scaleBreaks: {
            type: "wavy",
            customBreaks: [
              {
                startValue: 80,
                endValue: 210
              },
              {
                startValue: 230,
                endValue: 600
              }
            ]
          }
        },
        data: [
          {
            type: "bar",
            toolTipContent:
              '<img src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/"{url}"" style="width:40px; height:20px;"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP',
            dataPoints: [
              { label: "Israel", y: 17.8, gdp: 5.8, url: "israel.png" },
              {
                label: "United Arab Emirates",
                y: 22.8,
                gdp: 5.7,
                url: "uae.png"
              },
              { label: "Brazil", y: 22.8, gdp: 1.3, url: "brazil.png" },
              { label: "Australia", y: 24.3, gdp: 2.0, url: "australia.png" },
              { label: "South Korea", y: 36.8, gdp: 2.7, url: "skorea.png" },
              { label: "Germany", y: 41.1, gdp: 1.2, url: "germany.png" },
              { label: "Japan", y: 46.1, gdp: 1.0, url: "japan.png" },
              { label: "United Kingdom", y: 48.3, gdp: 1.9, url: "uk.png" },
              { label: "India", y: 55.9, gdp: 2.5, url: "india.png" },
              { label: "Russia", y: 69.2, gdp: 5.3, url: "russia.png" },
              { label: "China", y: 215.7, gdp: 1.9, url: "china.png" },
              { label: "United States", y: 611.2, gdp: 3.3, url: "us.png" }
            ]
          }
        ]
      });
      chart.render();

      var chart2 = new CanvasJS.Chart(cont2, {
        animationEnabled: true,
        backgroundColor: null,
        title: {
          text: "Test Chart 2",
          fontColor: "white"
        },
        axisX: {
          title: "Life Expectancy (in Years)"
        },
        axisY: {
          title: "Fertility Rate"
        },
        legend: {
          horizontalAlign: "left"
        },
        data: [
          {
            type: "bubble",
            showInLegend: true,
            legendText: "Size of Bubble Represents Population in Millions",
            legendMarkerType: "circle",
            legendMarkerColor: "grey",
            toolTipContent:
              "<b>{name}</b><br/>Life Exp: {x} yrs<br/> Fertility Rate: {y}<br/> Population: {z}mn",
            dataPoints: [
              //{ x: 68.3, y: 2.4, z: 1309.05 , name: "India"},
              //{ x: 76, y: 1.57, z:1371.22, name: "China"},
              { x: 78.7, y: 1.84, z: 320.896, name: "US" },
              { x: 69.1, y: 2.44, z: 258.162, name: "Indonesia" },
              { x: 74.7, y: 1.78, z: 225.962, name: "Brazil" },
              { x: 76.9, y: 2.21, z: 125.89, name: "Mexico" },
              { x: 53, y: 5.59, z: 181.181, name: "Nigeria" },
              { x: 70.9, y: 1.75, z: 144.096, name: "Russia" },
              { x: 83.8, y: 1.46, z: 127.141, name: "Japan" },
              { x: 82.5, y: 1.83, z: 23.789, name: "Australia" },
              { x: 71.3, y: 3.31, z: 93.778, name: "Egypt" },
              { x: 81.6, y: 1.81, z: 65.128, name: "UK" },
              { x: 62.1, y: 4.26, z: 47.236, name: "Kenya" },
              { x: 69.6, y: 4.51, z: 36.115, name: "Iraq" },
              { x: 60.7, y: 4.65, z: 33.736, name: "Afganistan" },
              { x: 52.7, y: 6, z: 27.859, name: "Angola" },
              { x: 68.4, y: 2.94, z: 101.716, name: "Philippines" },
              { x: 70, y: 2.17, z: 28.656, name: "Nepal" },
              { x: 71.2, y: 1.51, z: 45.154, name: "Ukrain" },
              { x: 83.4, y: 1.62, z: 46.447, name: "Spain" },
              { x: 64.6, y: 4.28, z: 99.873, name: "Ethiopia" },
              { x: 74.6, y: 1.5, z: 68.65, name: "Thailand" },
              { x: 74.2, y: 1.88, z: 48.228, name: "Colombia" },
              { x: 74.44, y: 2.34, z: 31.155, name: "Venezuela" },
              { x: 57.4, y: 2.34, z: 55, name: "South Africa" },
              { x: 59.2, y: 3.86, z: 15.77, name: "Zimbabwe" },
              { x: 55.9, y: 4.63, z: 22.834, name: "Cameroon" }
            ]
          }
        ]
      });
      chart2.render();
    }
  }

  function nodark() {
    document.body.classList.remove("dark-mode");
    checkbox.checked = false;
    sessionStorage.setItem("mode", "light");
    if (cont) {
      var chart = new CanvasJS.Chart(cont, {
        backgroundColor: null,
        animationEnabled: true,
        title: {
          text: "Test Chart 1"
        },
        axisX: {
          interval: 1
        },
        axisY: {
          title: "Expenses in Billion Dollars",
          scaleBreaks: {
            type: "wavy",
            customBreaks: [
              {
                startValue: 80,
                endValue: 210
              },
              {
                startValue: 230,
                endValue: 600
              }
            ]
          }
        },
        data: [
          {
            type: "bar",
            toolTipContent:
              '<img src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-column-bar-charts/"{url}"" style="width:40px; height:20px;"> <b>{label}</b><br>Budget: ${y}bn<br>{gdp}% of GDP',
            dataPoints: [
              { label: "Israel", y: 17.8, gdp: 5.8, url: "israel.png" },
              {
                label: "United Arab Emirates",
                y: 22.8,
                gdp: 5.7,
                url: "uae.png"
              },
              { label: "Brazil", y: 22.8, gdp: 1.3, url: "brazil.png" },
              { label: "Australia", y: 24.3, gdp: 2.0, url: "australia.png" },
              { label: "South Korea", y: 36.8, gdp: 2.7, url: "skorea.png" },
              { label: "Germany", y: 41.1, gdp: 1.2, url: "germany.png" },
              { label: "Japan", y: 46.1, gdp: 1.0, url: "japan.png" },
              { label: "United Kingdom", y: 48.3, gdp: 1.9, url: "uk.png" },
              { label: "India", y: 55.9, gdp: 2.5, url: "india.png" },
              { label: "Russia", y: 69.2, gdp: 5.3, url: "russia.png" },
              { label: "China", y: 215.7, gdp: 1.9, url: "china.png" },
              { label: "United States", y: 611.2, gdp: 3.3, url: "us.png" }
            ]
          }
        ]
      });
      chart.render();

      var chart2 = new CanvasJS.Chart(cont2, {
        animationEnabled: true,
        backgroundColor: null,
        title: {
          text: "Test Chart 2"
        },
        axisX: {
          title: "Life Expectancy (in Years)"
        },
        axisY: {
          title: "Fertility Rate"
        },
        legend: {
          horizontalAlign: "left"
        },
        data: [
          {
            type: "bubble",
            showInLegend: true,
            legendText: "Size of Bubble Represents Population in Millions",
            legendMarkerType: "circle",
            legendMarkerColor: "grey",
            toolTipContent:
              "<b>{name}</b><br/>Life Exp: {x} yrs<br/> Fertility Rate: {y}<br/> Population: {z}mn",
            dataPoints: [
              //{ x: 68.3, y: 2.4, z: 1309.05 , name: "India"},
              //{ x: 76, y: 1.57, z:1371.22, name: "China"},
              { x: 78.7, y: 1.84, z: 320.896, name: "US" },
              { x: 69.1, y: 2.44, z: 258.162, name: "Indonesia" },
              { x: 74.7, y: 1.78, z: 225.962, name: "Brazil" },
              { x: 76.9, y: 2.21, z: 125.89, name: "Mexico" },
              { x: 53, y: 5.59, z: 181.181, name: "Nigeria" },
              { x: 70.9, y: 1.75, z: 144.096, name: "Russia" },
              { x: 83.8, y: 1.46, z: 127.141, name: "Japan" },
              { x: 82.5, y: 1.83, z: 23.789, name: "Australia" },
              { x: 71.3, y: 3.31, z: 93.778, name: "Egypt" },
              { x: 81.6, y: 1.81, z: 65.128, name: "UK" },
              { x: 62.1, y: 4.26, z: 47.236, name: "Kenya" },
              { x: 69.6, y: 4.51, z: 36.115, name: "Iraq" },
              { x: 60.7, y: 4.65, z: 33.736, name: "Afganistan" },
              { x: 52.7, y: 6, z: 27.859, name: "Angola" },
              { x: 68.4, y: 2.94, z: 101.716, name: "Philippines" },
              { x: 70, y: 2.17, z: 28.656, name: "Nepal" },
              { x: 71.2, y: 1.51, z: 45.154, name: "Ukrain" },
              { x: 83.4, y: 1.62, z: 46.447, name: "Spain" },
              { x: 64.6, y: 4.28, z: 99.873, name: "Ethiopia" },
              { x: 74.6, y: 1.5, z: 68.65, name: "Thailand" },
              { x: 74.2, y: 1.88, z: 48.228, name: "Colombia" },
              { x: 74.44, y: 2.34, z: 31.155, name: "Venezuela" },
              { x: 57.4, y: 2.34, z: 55, name: "South Africa" },
              { x: 59.2, y: 3.86, z: 15.77, name: "Zimbabwe" },
              { x: 55.9, y: 4.63, z: 22.834, name: "Cameroon" }
            ]
          }
        ]
      });
      chart2.render();
    }
  }
});