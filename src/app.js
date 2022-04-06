const champions = document.querySelector("#champions");

fetch("http://ddragon.leagueoflegends.com/cdn/12.5.1/data/fr_FR/champion.json")
  .then((response) => response.json())
  .then((data) => {
    let api = data.data;
    console.log(api);
    for (const property in api) {
      let element = document.createElement("li");
      let img = new Image();
      let name = document.createElement("p");
      img.src =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
        api[property].name +
        "_0.jpg";
      name.textContent = api[property].name;
      element.appendChild(img);
      element.appendChild(name);
      champions.appendChild(element);
      console.log(`${property}: ${api[property]}`);
    }
  })
  .catch((error) => console.log(error));
