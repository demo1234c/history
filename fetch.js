function getData() {
  var date = document.getElementById('date').value,
      month = document.getElementById('month').value;
  
      console.log(date, month);
      
  fetch(`https://history.muffinlabs.com/date/${month}/${date}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        var events = document.getElementById("events");
        var births = document.getElementById("births");
        var deaths = document.getElementById("deaths");

        var eventsData = data.data.Events,
        birthsData = data.data.Births,
        deathsData = data.data.Deaths;

        eventsData.forEach(element => {
          var newEl = document.createElement("div");
          newEl.innerHTML= element.text;
          events.appendChild(newEl);
        });

        birthsData.forEach(element => {
          var newEl = document.createElement("div");
          newEl.innerHTML= element.text;
          births.appendChild(newEl);
        });

        deathsData.forEach(element => {
          var newEl = document.createElement("div");
          newEl.innerHTML= element.text;
          deaths.appendChild(newEl);
        });
                  });
              }
