
class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

  attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'RAINBOW BARF!!!!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("NONE SHALL PASS!!"));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Relaxing at the Spa."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Check out my moves~"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Chill out. Resting here."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }

}

  let rose = new Unicorn("RoseRose", "Princess")


  const eventArea = document.getElementById('event_area')
  const imageArea = document.getElementById('image_area')
  const restartButton = document.getElementById('restart').addEventListener("click",()=> rose.restart())
  const attackButton = document.getElementById('attack').addEventListener("click",()=> rose.attack())
  const defendButton = document.getElementById('defend').addEventListener("click",()=> rose.defend())
  const healButton = document.getElementById('heal').addEventListener("click",()=> rose.heal())
  const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> rose.breakdance())
  const eatButton = document.getElementById('eat').addEventListener("click",()=> rose.eatCronut())
