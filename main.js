function print(n) {
    for (var a = 1; a <= n; a++) {
        var no = "";
        for (var b = 1; b <= n - a; b++) {
            no = no + " ";
        }
        for (var c = 1; c <= 2 * a - 1; c++) {
            var gold = "*";
            no = no + gold;
        }
        console.log(no);
    }
}
var num = process.argv[2];
print(num);
