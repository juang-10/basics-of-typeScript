interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

// const { audioVolume, songDuration, song, details } = audioPlayer;
// const { author, year } = details;

// console.log({ audioVolume, songDuration, song, author, year });

const [p1, p2, trunks, p4, p5, p6 = "not found"]: string[] = ["Goku", "Vegeta", "Gohan", "Trunks", "Piccolo"];
console.log('Personaje 3: ', p6);