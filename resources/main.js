// 背景画像を配列でセット
const jumbotronImages = [
  './resources/images/mainBackGround4.jpg',
  './resources/images/mainBackGround2.jpg',
  './resources/images/mainBackGround3.jpg',  
];

// 表示エリアの要素の取得
const jumbotronBgArea = document.querySelector('#jumbotronBgArea');

let i = 0;
//背景画像を切り替える関数
const change_jumbotron_Image = () => {
  if(i===jumbotronImages.length){
    i=0;
  };
  jumbotronBgArea.style.backgroundImage = 'url(' + jumbotronImages[i]+')';
  i++;
};
//クリックで背景画像を変える
let btn = document.getElementById('button');
btn.addEventListener('click', change_jumbotron_Image);
/*const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)
*/