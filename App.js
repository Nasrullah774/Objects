// ********Chap 1 : Alerts************//
// alert("Error! Please enter a valid password");
// alert("Welcome to js land... \n Happy coding");
// alert("Welcome to js land.......");
//  confirm("Prevent this page from creating additional dialogues");
//  console.log("Hello.... I can run js through my web browser's console");
// ********Chap 2: Variables for string************//
//var username;
// var myname;
// name="Nasrullah Hazrat Shah";
// alert(myname);
// var message;
// message= "Hello World";
// alert(message);
// var age= 15;
// alert(age);
// var course="Certified Mobile Application Development"
// alert(course);

// var pizza="PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(pizza);

// var email;
// email ="nasrullahalishah53@gmail.com";
// alert(email);

// var Book;
// Book = "I am trying to learn from BOOK A smarter \n way to learn javascript";
// alert(Book);

// document.writeln("<h2>Yah ! I can write html content through javascript</h2>");

// var design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(design);

// ********Chap 3: Variables for numbers************//

// var age;
// age=19;
// alert(age);

// var visit;
// visit= "You have visited this site 14 times";
// alert(visit);

// var birth_year;
// birth_year="<h3>My birth year is 2001 <br> Data type of my declared variable is number</h3>";
// document.writeln(birth_year);


// var name;
// var Product_title;
// var Quantity;
// name="<b>John Doe</b>";
// Product_title="<b>T-shirt(s)</b>"
// Quantity="<b>5</b>";
// document.writeln(name+" ordered " + Quantity + Product_title +" on XYZ clothing store");

// ********Chap 4: Variable Names : Legal and Illegal************//

// var name, age, city;

// var 1h,2k,3m,4g,5a;

// document.write("a) A heading stating 'Rules for naming JS variables' \n b) Variable names can only contain ______, ______, \n ______ and ______. \n For example <b>$my_1stVariable</b> \n c) Variables must begin with a ______, ______ or \n _____. For example <b>$name, _name or name</b> \n d) Variable names are case _________ \n e) Variable names should not be JS _________");

// ********Chap 5: Math Expressions************//
// var num1=3;
// var num2=5;
// var sum=num1+num2;
// document.write("Sum of 3 and 5 is " + sum);

// var num1=3;
// var num2=5;
// var mul=num1*num2;
// document.write("Multiplication of 3 and 5 is " + mul);

// var num1=3;
// var num2=5;
// var sub=num1-num2;
// document.write("Subtraction  of 3 and 5 is " + sub);

// var num1=3;
// var num2=5;
// var div=num1/num2;
// document.write("Division of 3 and 5 is " + div);


// var value;
// value=15;
// document.write("Value of variable is " + value);

// var number=16;
// document.write("The number is "+number);

// var value=5;
//  document.write("Value of variable is " + value);
// ++value;
// document.writeln("Value after increment is "+ value);
// var number=7;
// var total=value + number ;
// document.writeln("Value after increment is "+ total);

// total--;

// document.writeln("Value after deceament is "+ total);

// var divide=3;
// var remainder=divide / total;
// document.writeln("Value after division is "+ remainder);


// var movie_ticket= 600;
// var tickets=5;
// var total= movie_ticket*tickets;
// document.writeln("Total cost of buying 5 tickets is " + total);

// var table = 4;
// var length = 10;
// var i = 1;

// document.write("Multiplication table: "+ table);
// while(i <= length)
// { 
//  document.write("<br>"+table+" * "+i+" = " +(i * table));
//  i++;
// }
// var price=650;
// var qty=3;
// var price1=100;
// var qty2 =7;
// var shipping=100;

// document.writeln("Price of item 1 is " + price );
// document.write("<br>");
// document.writeln("Quantity of item 1 is " + qty );
// document.write("<br>");
// document.writeln("Price of item 2 is " + price1 );
// document.write("<br>");
// document.writeln("Quantity of item 2 is " + qty2 );
// document.write("<br>");
// var total= price*qty+price1*qty2+shipping;
// document.write("total is"+total);


// var marks=980;
// var obtained=804;
// var per=100*804/980;
// document.write("Percentage is " + per);

// var usd=104*10 ;
// var saud=25*28;

// var total=usd+saud;
// document.write("\n");
// document.write("Total PKR is " + total);

// var number= 10+5*10/2;
// document.write("Result is " + number);

// var current=2016;
// var birth=1992;
// var age= current-birth;
// document.write("Age " +age);

// var snack="chocolate";
// var currentage=19;
// var maxage=80;
// var amount=2;
// var total=maxage-currentage*amount;
// document.write("You will need "+total+"chocolate chip to last you until the ripe old age of "+maxage+"");

// ********Chap 6: Math Expressions************//

// var a=10;
// document.write("The value of  a is  " +a+"");
// document.write("<br>");
// ++a;
// document.write("The value of  ++ a is  " +a+"");
// document.write("<br>");
// a;
// document.write("The value of  a is  " +a+"");
// document.write("<br>");
// a++;
// document.write("The value of  a ++ is  " +a+"");
// document.write("<br>");
// --a;
// document.write("The value of  -- a is  " +a+"");
// document.write("<br>");
// document.write("Now the value of a  is  " +a+"");
// document.write("<br>");
// --a;
// document.write("The value of  -- a is  " +a+"");
// document.write("<br>");

// var a=prompt("Write your name");
// document.write("Welcome "+a+"");


// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;



//     // display the result
//     document.writeln(`${number} * ${i} = ${result}`);
//     document.write("<br>");
// }


// var English;
// var Math;
// var Physics;
// English=+prompt("Enter obtained marks in English");
// var eng=English;
// document.write("Total marks in english is "+eng);
// document.write("<br>");
// Math=+prompt("Enter obtained marks in Math");
// var mat=Math;
// document.write("Total marks in Math is "+mat);
// document.write("<br>");
// Physics=+prompt("Enter obtained marks in Physics");
// var phy=Physics;
// document.write("Total marks in Physics is "+phy);
// document.write("<br>");
// var obtain=mat+eng+phy;
// var total = 300;
// var cal=100*obtain/total;
// document.write("Total marks "+ cal );

// ********Chap 9-11: User Input and conditional statements************//

// var city=prompt("Enter city name");
// if (city=="Karachi" || city=="karchi") {
//     document.write("Welcome to the city of lights");
// }
// else{
// document.write("Your city name is " +city);
// }


// var gender=prompt("Enter gender ");
// if (gender=="Male" || gender=="male") {
//     document.write("Welcome sir");
// }
// else if (gender=="Female" || gender=="female"){
//     document.write("Welcome Mam");
// }

// var fuel=+prompt("Enter your car's fuel in litre");
// if (fuel<=0.25) {
//     document.write("Please refill the fuel in your car");
// }
// else{
// document.write("You are ready to go");
// }

// var total=300;
// var english=+prompt("Enter your English marks");
// var math=+prompt("Enter your Math marks");
// var phy=+prompt("Enter your Physics marks");
// var obtain=english+math+phy;
// var cent = 100*obtain/total;
// document.write(cent);
// if (cent>= "80") {
// document.write("<br>");
// document.write("A+");
// }
// else if (cent< 80 && cent> 70) {
//     document.write("<br>");
//     document.write("Good");
//     }
// else if (cent< 60  ) {
//     document.write("<br>");
//     document.write(" You need to improve ");
//     }

// else{
//    document.write(" Failed "); 
// }
//********/
// var num1=+prompt("Enter number");
// var num2=+prompt("Enter number 2 ");
// if (num1>num2) {
//     document.write("Num 1 is greater than Num 2");
// }
// else if (num2>num1) {
//     document.write("Num 2 is greater than Num 1");
// }
// else if (num2==num1) {
//     document.write("Num 1 is equal to Num 2");
// }
// else if (num2<num1) {
//     document.write("Num 2 is less than Num 1");
// }
// else if (num1<num2) {
//     document.write("Num 1 is less than Num 2");
// }
// else if (num1==num2) {
//     document.write("Num 1 is equal to Num 2");
// }


// var numcheck=+prompt("Enter a number:");
// if (numcheck<1) {
//     document.write(numcheck +" is negative ");
// }
// else if (numcheck>1){
//     document.write(numcheck +" is positive ");
// }
// else if(numcheck==1){
//     document.write(numcheck +" is equal to 1 ");
// }

// var character=prompt("Enter a character");
// if (character=="a" || character=="A") {
//     document.write("Vowel");
// }
// else if (character=="e" || character=="E") {
//     document.write("Vowel");
// }
// else if (character=="i" || character=="I") {
//     document.write("Vowel");
// }
// else if (character=="o" || character=="O") {
//     document.write("Vowel");
// }
// else if (character=="u" || character=="U") {
//     document.write("Vowel");
// }
// else{
// document.write("Not vowel");
// }

// var pass=123;
// var user=prompt("Enter password");
// if (pass==user) {
//     document.write("Correct");
// }
// else if(user===""){
// document.write("Please fill");
// }
// else{
// document.write("Wrong");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// document.write(greeting);

// var time=+prompt("Enter time");
// if (time==1900) {
//     document.write("7 o'clock");
// }
// else if (time>=0000 && time<1200) {
//     document.write("Good morning");
// }
// else if (time>= 1200 && time<1700) {
//     document.write("Good afternoon");
// }
// else if(time==1700 && time<2100){
// document.write("Good evening");
// }
// else if(time>=2100 && time<=2359){
// document.write("Good night");
// }


//*****Chapter 14-16 : Arrays */
// const myarra=[];

// var studentnames=[];

// var array=["abc","def"];
// document.write("The string is " + array);
// document.write("<br>");
// var number=[1,2,3,4,5,6,7,8,9];
// document.write("Numbers is Array"+number);
// document.write("<br>");
// var mixed=["abc",1,2,3,4,"def",5,6,7];
// document.write("Mixed array"+mixed);


// var edu=["BBA","BA","MSC","BSCS","BS"];
// document.write("<li>"+edu[0]+"</li>","<li>"+edu[1]+"</li>","<li>"+edu[2]+"</li>","<li>"+edu[3]+"</li>","<li>"+edu[4]+"</li>");

// var names=["Ali","Ahmed","Abid"]
// var toal =500;
// var score=[320,230,480];
// document.write("Score of Ali is "+ score[0] +" and percentage is"+100*score[0]/toal+"<br>"+"Score of Ahmed is "+ score[1] +" and percentage is "+100*score[1]/toal+"<br>"+"Score of Abid is "+ score[2] + " and percentage is "+100*score[2]/toal+"<br>");

// var colors=["Red","Blue","Green"]
// document.write(colors);

// var score=[320,230,480,20];
// var print=score.sort();
// document.write("Ordered score of students is "+print);

// var cities=["Kar","Lhr","Isb","Que","Pes"];
// var print=cities.slice(2,4);
// document.write(print);

// var arr=["This","is","my","cat"]
// var print=arr.join("\n");
// document.write(print);
