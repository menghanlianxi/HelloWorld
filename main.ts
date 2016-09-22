function print(n : number) : void{
for (var a = 1; a <= n; a++) {
    var no : string = "";

    for (var b = 1; b <= n - a; b++) {
         no = no + " ";     
    }
    
    for (var c = 1; c <= 2 * a - 1; c++) {
         var gold : string = "*";
         no = no + gold;
    }
    console.log(no); 
  }

}

 var num:number = process.argv[2];
 print(num);
