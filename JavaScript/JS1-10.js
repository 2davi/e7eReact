//문제1
var nums = [100, 200, 300, 400, 500];

// nums.pop(4);
// nums.pop(3);
// console.log(nums);

nums = nums.filter(function(v, i) {
  if(v== 400 || v== 500) return false;
  else return true;
});
console.log(nums);

//--------------------------
//문제2
//데이터
let arr = [200, 100, 300];
//pass//
let newArr = []; 
arr.forEach(function(v, i) {
  //100과 300 사이에 위치하겠다.
  //->100 다음에 끼워넣겠다.
  newArr.push(v)
  if(v===100) { newArr.push(1000); }
});
console.log(newArr, arr);
//출력
// [200, 100, 10000, 300]


//문제8
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

//문제9
//데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result //빈칸을 채워주세요
      = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);
// 출력
// 2019/04/26 11:34:27

//문제10

function makeStar(lines) {
  let print = "";
  //각 줄에 들어가는 별의 개수: 2*line -1
  let maxStars = 2*lines -1;

  for(let y=1; y<=lines; y++) {
    for(let x=1; x<=maxStars; x++) {
      if(x<=lines-y || x>maxStars-(lines-y)) {
        print +=" ";
      } else {
        print += "*";
      }
    }
    print += "\n";
  }

  return print;
}
console.log("체킁: \n", makeStar(5));


//문제12
// 데이터
// <여기에 class를 작성하세요.>
function Wizard(health, mana, armor) {
  this.health = health;
  this.mana = mana;
  this.armor = armor;
  this.attack=  () => console.log('파이어볼');
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


// 출력
// 545 210 10
// 파이어볼