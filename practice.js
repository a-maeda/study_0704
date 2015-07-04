String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, '')
}

str = "  I wanna fuck her   "
len1 = str.length
len2 = str.trim().length

document.write(len1 + '<br />')
document.write(len2)

//break

arrayname = []

arrayname[0] = "Element 1"
arrayname[1] = "Element 2"

numbers = []
numbers.push('One')
numbers.push('Two')
numbers.push('Three')

for (j = 0 ; j < numbers.length ; ++j)
	document.write('Element ' + j + ' = ' + numbers[j] + '<br />');


numbers = Array('One', 'Two', 'Three');

for (j = 0 ; j < numbers.length ; ++j)
	document.write('Element ' + j + ' = ' + numbers[j] + '<br />');

// here 2015/1/6

balls = {
	"golf" : "Golf balls, 6",
	"tennis" : "Tennis balls, 3",
	"soccer" : "Soccer balls, 1",
	"ping" : "Ping pong balls, 1 doz"
}

for (ball in balls)
	document.write(ball + " = " + balls[ball] + "<br />")

//break

var checkboard = Array(
	Array(' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'),
	Array('o', ' ', 'o', ' ', 'o', ' ', 'o', ' '),
	Array(' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'),
	Array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
	Array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '),
	Array('O', ' ', 'O', ' ', 'O', ' ', 'O', ' '),
	Array(' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O'),
	Array('O', ' ', 'O', ' ', 'O', ' ', 'O', ' ')
	)

document.write('<pre>')
for (j = 0 ; j < 8 ; ++j)
{
	for (k = 0 ; k < 8 ; ++k)
		document.write(checkboard[j][k] + ' ')
		document.write('<br />')
}
document.write('</pre>')

//break

fruit = ['Banana', 'Grape']
veg = ['Carrot', 'Cabbege']

document.write(fruit.concat(veg))

//break

pets = ['Cat', 'Dog', 'Fish']
more_pets = pets.concat('Rabbit', 'Hamster')
document.write(more_pets)

//break

pets = ['Cats', 'Dog', 'Rabbit', 'Hamster']
for (j = 0 ; j < pets.length ; ++j) output(pets[j], j)

function output(element, index, array)
{
	document.write('インデックス ' + element + 'にある配列は ' + index + '<br />')
}

//break

pets = ['Cat', 'Dog', 'Rabbit', 'Hamster']
document.write(pets.join()		+ '<br />')
document.write(pets.join(' ')	+ '<br />')
document.write(pets.join(' : ')	+ '<br />')

//break

sports = ['Football', 'Tennis', 'Baseball']
document.write('始め = '		+ sports + '<br />')
sports.push('Hockey');
document.write('push後 = '	+ sports + '<br />')
removed = sports.pop()
document.write('pop後 = '	+ sports + '<br />')
document.write('削除されたエレメント = '	+ removed + '<br />')

//break

numbers = []

for (var j = 0 ; j < 3; ++j) {
	numbers.push(j)
	document.write("Pushed " + j + '<br />')
};

document.write('<br />')

document.write('Popped' + numbers.pop() + '<br />')
document.write('Popped' + numbers.pop() + '<br />')
document.write('Popped' + numbers.pop() + '<br />')


// 2015/1/7

sports = ['Football', 'Tennis', 'Baseball', 'Hockey']
sports.reverse()
document.write(sports)

// break

sports = ['Football', 'Tennis', 'Baseball', 'Hockey']
sports.sort()
document.write(sports)

// break

sports = ['Football', 'Tennis', 'Baseball', 'Hockey']
sports.sort().reverse()
document.write(sports)

// break

numbers = [7, 23, 5, 87, 126]
numbers.sort(function(a,b){return a - b})
document.write(numbers)

// break

numbers = [7, 23, 5, 87, 126]
numbers.sort(function(x,y){return y - x})
document.write(numbers)

// break

numbers = [7, 23, 5, 87]
numbers.sort(
	function(a,b){
		document.write("a: " + a + "<br />")
		document.write("b: " + b + "<br />")
		document.write("a - b = " + (a - b) + "<br />")
		return a - b
	}
	)
document.write(numbers)

//2015/1/8

a = 5;
if (a == 3){
	alert("tennis")
}

function aaa(){
	a = 3;
	alert(a)
}

a = 5;
alert(a);
aaa();
alert(a);

function aaa(){
	return "abc";
	a = 'test';
	alert(a)
}

aaa();

//break

var members = ["鳩山由紀夫", "麻生太郎", "福田康夫", "安倍晋三", "小泉純一郎", "森喜朗"];

var i = 0;	//カウンタ
while(i < members.length){
    document.write(members[i] + '<br />');
    i++;
}

var cups = ['Ecup', 'Fcup', 'Gcup', 'Hcup', 'Icup', 'Jcup']

for(var j = 0 ; j < cups.length ; ++j){
	document.write(cups[j] +', ' + '<br />')
}


a = {}
a.aaa = 5;

document.write(a.aaa + '<br />');
document.write(b.aaa + '<br />');


function copyArray(arr){
  var newarr = [];
  for(var i = 0 ; i < arr.length ; i++){
    newarr[i] = arr[i];
  }
  return newarr;
}
var a = [0,1,2,3,4];
document.write(a + '<br />');
var b = copyArray(a);
document.write(b + '<br />');

a[5]=5;
document.write(b);

function copyArray(arr){
	var newarr = [];
		for(var i = 0;i<arr.length;i++){
	newarr[i] = arr[i];
	}
	return newarr;
}
var a = [0,1,2,3,4];
	document.write(a + '<br />');
var b = a;
	document.write(b + '<br />');

a[5]=5;
document.write(a);

//2015/1/10

function copyArray(arr){
	var newarr = [];
		for(var i = 0 ; i < arr.length ; i++){
			if(Array.isArray(arr[i])){
				newarr[i] = copyArray(arr[i]);
			}else{
				newarr[i] = arr[i];
			}
		}
		return newarr;
	}
var a = [ [0,1,2] , [3,4,5] ];
	document.write(a[0] + '<br />');
var b = copyArray(a);
	document.write(b[0] + '<br />');

a[0][3]=3;
	document.write(b[0] + '<br />');
	document.write(a[0]);

//break

var a = {aaa : 5};
var b = a;

b.aaa = 10;

document.write(a.aaa + '<br />');
document.write(b.aaa + '<br />');

//break

function aaa(){
	document.write('test'+ '<br />');
}
aaa();

document.write(document.write());

//break

var a = {};
a.abc=test;
a.abc();

function test(){
    document.write("test");
}

var aaa = function(){
	document.write('test')
}

aaa();

//break

var a = {}
	a.abc = function(){
		document.write('test');
	};

//break

var a = {
	abc : function(){document.write('test1' + '<br />')},
	def : function(){document.write('test2')},
}

a.abc();
a.def();

var result = 0;
	
	result = (function(){
		var a = 1
			b = 2;

		return a + b;
	}());

console.log(result);