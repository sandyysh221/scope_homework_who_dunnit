// Episode 1:
const scenario = {
  murderer: "Miss Scarlet",
  room: "Library",
  weapon: "Rope",
};

const declareMurderer = function () {
  return `The murderer is ${scenario.murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);
// The murderer is Miss Scarlet because the murderer is a key in the const scenario

// Episode 2:
const murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mrs. Peacock";
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// This will show an error because we have a const variable but trying to change it to someone else which doesn't work

// Episode 3:
let murderer = "Professor Plum";

const declareMurderer = function () {
  let murderer = "Mrs. Peacock";
  return `The murderer is ${murderer}.`;
};

const firstVerdict = declareMurderer();
console.log("First Verdict: ", firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log("Second Verdict: ", secondVerdict);
// The murderer in the first verdict is Mrs. Peacock because it calls on the function declareMurderer where Mrs. Peacock was assigned the murderer variable. THe second verdict murderer would be Mr Plum because he's the global variable

// Episode 4:
let suspectOne = "Miss Scarlet";
let suspectTwo = "Professor Plum";
let suspectThree = "Mrs. Peacock";

const declareAllSuspects = function () {
  let suspectThree = "Colonel Mustard";
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
};

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// The suspects are Miss Scarlet and Professor Plum because they're let global variables which haven't changed + Colonel Mustard as suspect 3 was changed to him instead of Mrs. Peacock. Suspect 3 is Mrs Peacock though as Colonel Mustard only exists as suspect three in the declareAllSuspects function

// Episode 5:
const scenario = {
  murderer: "Miss Scarlet",
  room: "Kitchen",
  weapon: "Candle Stick",
};

const changeWeapon = function (newWeapon) {
  scenario.weapon = newWeapon;
};

const declareWeapon = function () {
  return `The weapon is the ${scenario.weapon}.`;
};

changeWeapon("Revolver");
const verdict = declareWeapon();
console.log(verdict);
// Weapon is the revolver because the function changeWeapon is called to update the weapon to revolver before the verdict

// // Episode 6:
let murderer = "Colonel Mustard";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    murderer = "Mrs. White";
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer is Mrs. White because within the changeMurderer function, she is the final one to be declared

// Episode 7:
let murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    let murderer = "Colonel Mustard";

    const unexpectedOutcome = function () {
      murderer = "Miss Scarlet";
    };

    unexpectedOutcome();
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murder is Mr. Green because in function changeMurderer, it's Mr Green and the functions within it aren't invoked.

// Episode 8:
const scenario = {
  murderer: "Mrs. Peacock",
  room: "Conservatory",
  weapon: "Lead Pipe",
};

const changeScenario = function () {
  scenario.murderer = "Mrs. Peacock";
  scenario.room = "Dining Room";

  const plotTwist = function (room) {
    if (scenario.room === room) {
      scenario.murderer = "Colonel Mustard";
    }

    const unexpectedOutcome = function (murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = "Candle Stick";
      }
    };

    unexpectedOutcome("Colonel Mustard");
  };

  plotTwist("Dining Room");
};

const declareWeapon = function () {
  return `The weapon is ${scenario.weapon}.`;
};

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// The weapon is candle stick because when changeScenario is called, it passed in Mrs. Peacock whose weapon is candle sick

// // Episode 9:
let murderer = "Professor Plum";

if (murderer === "Professor Plum") {
  let murderer = "Mrs. Peacock";
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

const verdict = declareMurderer();
console.log(verdict);
// The murderer is Prof Plum because it's the global variable whereas Mrs. Peacock is only the murderer within the if block

// // Extension Episode:
const scenario = {
  murderer: "Sandy",
  room: "Garage",
  weapon: "Machete",
};

const changeMurderer = function () {
  scenario.murderer = "Elsa";
};

const declareMurderer = function () {
  return `The murderer is ${scenario.murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
