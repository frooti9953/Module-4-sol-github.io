var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jen";
names[3]="Jason";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="Jim";


for (var i = names.length - 1; i >= 0; i--) {
  if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='J'){
  	console.log("Goodby "+ names[i])
 }
 else{
 	console.log("Hello "+ names[i])
 }
}
