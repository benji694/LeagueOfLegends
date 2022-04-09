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
      let championName = api[property].name;

      
      function fixName(e){
        
        let pos = e.indexOf("'");
        let t;
        if(pos == -1){
          t = e;
        }
        else{
          t = e.substring(0, pos) + e[pos + 1].toLowerCase() + e.substring(pos + 2);
        }

//indexof recherche '
//substr jusqu indexof + lowercase + suc

        t = t.replace(" ", "").replace("'", "");
        return t;
      }
      console.log(fixName(championName));

      img.src = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + fixName(championName) + "_0.jpg";
      // console.log(img.src);
      name.textContent = api[property].name;
      element.appendChild(img);
      element.appendChild(name);
      champions.appendChild(element);
      // console.log(`${property}: ${api[property]}`);
    }
  })
  .catch((error) => console.log(error));

