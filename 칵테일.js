var arr2 = new Array();
var element = null;

row = Number(5); // 칵테일 종류
col = Number(5); // 칵테일 재료 수

for (var i = 0; i < row; i++) { // 행 할당
    element = new Array(); // 임시 배열을 선언
    for (var j = 0; j < col; j++) { // 열 할당 (i 행의 열을 j만큼 할당함)
        element.push(0); // push 함수를 통해 임시 배열에 0을 넣음 (초기값)
    }
    arr2.push(element); // 임시 배열을 동적으로 할당할 배열에 push
}
arr2[0][0] = "Gimlet"; // 칵테일명
arr2[0][1] = "Gin"; // 칵테일 재료
arr2[0][2] = "Lime";
arr2[0][3] = "Sugar_Syrup";
arr2[0][4] = "Ice";


function report() {
    var cocktail_name = "";
    var count = 0;
    var name = "";
    var msg = "다음 재료를 선택하셨습니다.\n";
    var checkBoxes = document.getElementsByName("Ingredients");

    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            msg += ("- " + checkBoxes[i].value + "\n");
            name += " " + checkBoxes[i].value;
        }
    }

    for (var i = 0; i < row; i++){
        for (var j = 1; j <= col; j++){
            if (checkBoxes[j - 1].checked && arr[i][j] === checkBoxes[i].value){
                count++;
            }
        }

        if (count === checkBoxes.length){
            cocktail_name += " " + arr[i][0];
        }

        count = 0;
    }

    alert(msg);
    alert(name);
    alert(cocktail_name);
}

var Buck_cocktails = ["Gin", "Lime", 'Ginger_Ale', 'Ice'];
var Gimlet = ['Gin', 'Lime', 'Sugar_Syrup', 'Ice'];
var Gin_Fizz = ['Gin', 'Lemon', 'Sugar_Syrup', 'Soda', 'Ice'];
var Gin_Rickey = ['Gin', 'Lime', 'Soda', 'Ice'];
var Gin_Tonic = [Gin, Tonic, Lime, Ice]
