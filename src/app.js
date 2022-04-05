fetch("http://ddragon.leagueoflegends.com/cdn/12.5.1/data/fr_FR/champion.json")
  .then((response) => response.json())
  .then((data) => console.log(data.data))
  .catch((error) => console.log(error));
