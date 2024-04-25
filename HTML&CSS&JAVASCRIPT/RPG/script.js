// Variabile
let xp = 0; // Experiența jucătorului
let health = 100; // Punctele de viață ale jucătorului
let gold = 50; // Aurul jucătorului
let currentWeapon = 0; // Indexul armelor curente în array-ul de arme
let fighting; // Indexul monștrului cu care se luptă în prezent
let monsterHealth; // Viața monștrului cu care se luptă în prezent
let inventory = ["stick"]; // Inventarul jucătorului, inițializat cu un băț

// Selecția elementelor DOM
const button1 = document.querySelector("#button1"); // Butonul 1
const button2 = document.querySelector("#button2"); // Butonul 2
const button3 = document.querySelector("#button3"); // Butonul 3
const text = document.querySelector("#text"); // Aria text
const xpText = document.querySelector("#xpText"); // Afișajul pentru XP
const healthText = document.querySelector("#healthText"); // Afișajul pentru viață
const goldText = document.querySelector("#goldText"); // Afișajul pentru aur
const monsterStats = document.querySelector("#monsterStats"); // Aria pentru statistici despre monștri
const monsterName = document.querySelector("#monsterName"); // Afișajul pentru numele monștrului
const monsterHealthText = document.querySelector("#monsterHealth"); // Afișajul pentru viața monștrului

// Array-uri de arme, monștri și locații
// Array de arme cu numele și puterea lor
const weapons = [
	{
		name: "stick",
		power: 5
	},
	{
		name: "dagger",
		power: 30
	},
	{
		name: "claw hammer",
		power: 50
	},
	{
		name: "sword",
		power: 100
	}
];

// Array de monștri cu numele, nivelul și viața lor
const monsters = [
	{
		name: "Slime",
		level: 2,
		health: 15
	},
	{
		name: "Fanged beast",
		level: 8,
		health: 60
	},
	{
		name: "Dragon",
		level: 20,
		health: 300
	}
];

// Array de locații cu numele, textul butoanelor, funcțiile butoanelor și textul
const locations = [
    {
    	name: "town square",
    	"button text": ["Go to store", "Go to cave", "Fight dragon"],
    	"button functions": [goStore, goCave, fightDragon],
    	text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
	{
		name: "cave",
		"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You enter the cave. You see some monsters." 
	},
	{
		name: "fight",
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You are fighting a monster."
	},
	{
		name: "kill monster",
		"button text": ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, easterEgg],
		text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
	},
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;" 
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// Initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

// Funcție pentru a merge în oraș
function goTown() {
    update(locations[0]);
}

// Funcție pentru a merge la magazin
function goStore() {
	update(locations[1]);
}

// Funcție pentru a merge în peșteră
function goCave() {
	update(locations[2]);
}

// Funcție pentru a cumpăra viață
function buyHealth() {
  // Verifică dacă jucătorul are suficient aur
	if (gold >= 10) {
		gold -= 10;
		health += 10;
		goldText.innerText = gold;
		healthText.innerText = health;
	} else {
		text.innerText = "You do not have enough gold to buy health."
	}
}

// Funcție pentru a cumpăra o armă
function buyWeapon() {
  // Verifică dacă jucătorul poate cumpăra o armă
	if (currentWeapon < weapons.length - 1){
		if (gold >= 30) {
			gold -= 30;
			currentWeapon++;
			goldText.innerText = gold;
			let newWeapon = weapons[currentWeapon].name;
			text.innerText = "You now have a " + newWeapon + ".";
			inventory.push(newWeapon);
			text.innerText += " In your inventory you have: " + inventory;
		} else {
			text.innerText = "You do not have enough gold to buy a weapon.";
		} 
	} else {
		text.innerText = "You already have the most powerful weapon!";
		button2.innerText = "Sell weapon for 15 gold";
		button2.onclick = sellWeapon;
	}
}

// Funcție pentru a vinde o armă
function sellWeapon() {
	if (inventory.length > 1){
		gold += 15;
		goldText.innerText = gold;
		let currentWeapon;
		currentWeapon = inventory.shift();
		text.innerText = "You sold a " + currentWeapon + ".";
		text.innerText += " In your inventory you have: " + inventory;
	} else {
		text.innerText = "Don't sell your only weapon!";
	}
}

// Funcție pentru a începe lupta
function goFight() {
	update(locations[3]);
	monsterHealth = monsters[fighting].health;
	monsterStats.style.display = "block";
	monsterName.innerText = monsters[fighting].name;
	monsterHealthText.innerText = monsters[fighting].health;
}

// Funcții pentru a iniția lupte cu diferiți monștri
function fightSlime() {
	fighting = 0;
	goFight()
}

function fightBeast() {
	fighting = 1;
	goFight()
}

function fightDragon() {
	fighting = 2;
	goFight()
}

// Funcția pentru a ataca monștrii
function attack() {
	text.innerText = "The " + monsters[fighting].name + " attacks.";
	text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
	health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()){
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss.";
  }
	healthText.innerText = health;
	monsterHealthText.innerText = monsterHealth;
	if (health <= 0) {
		lose();
	} else if (monsterHealth <= 0) {
		if (fighting === 2) {
			winGame();
		  } else {
			defeatMonster();
		  }
	}

  

  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

// Funcția pentru a obține puterea atacului monștrilor
function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0; 
}

// Funcția pentru a verifica dacă jucătorul lovește monștrii
function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

// Funcția pentru a evita atacurile monștrilor
function dodge() {
	text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

// Funcția pentru a trata înfrângerea monștrilor
function defeatMonster() {
	gold += Math.floor(monsters[fighting].level * 6.7);
	xp += monsters[fighting].level;
	goldText.innerText = gold;
	xpText.innerText = xp;
	update(locations[4]);
}

// Funcția pentru a trata pierderea jocului
function lose() {
  update(locations[5]);
}

// Funcția pentru a trata victoria în joc
function winGame() {
  update(locations[6]);
}

// Funcția pentru a reseta jocul
function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown()
}

// Funcția pentru a afișa easter egg-ul
function easterEgg() {
  update(locations[7]);
}

// Funcția pentru a selecta un număr în cadrul easter egg-ului
function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + "." + " Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!"
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
  }

  if (health <= 0 ) {
    lose();
  }
}

// Funcții pentru a selecta numărul 2 sau 8 în cadrul easter egg-ului
function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}
