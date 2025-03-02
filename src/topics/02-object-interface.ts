const skills: string[] = ["Sword", "Bow", "Axe"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Sword", "Bow"],
};

strider.hometown = "Rivendell";

console.table(strider);
