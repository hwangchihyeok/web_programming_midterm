function report() {

    var ingredient_temp = ['7Up','Apple_Juice','Beer','Black_Pepper','Butter','Chocolate','Coffee','Cola','Cranberry_Juice','Cream','Egg','Gin',
    'Ginger_Ale','Ginger_Beer','Grapefruit_Juice','Ice','Ice_Cream','Lemon','Lemonade','Lime','Milk','Orange','Orange_Juice','Red_Bull','Salt',
    'Soda','Sugar','Sugar_Syrup','Tabasco','Tomato_Juice','Tonic','Water'];

    var arr2 = new Array();
    var temp = new Array();

    arr2[0] = new Array();
    arr2[0][0] = "Gimlet"; // 칵테일명
    arr2[0][1] = "Gin"; // 칵테일 재료
    arr2[0][2] = "Lime";
    arr2[0][3] = "Sugar_Syrup";
    arr2[0][4] = "Ice";

    arr2[1] = new Array();
    arr2[1][0] = "Buck_cocktails"; // 칵테일명
    arr2[1][1] = "Gin"; // 칵테일 재료
    arr2[1][2] = "Lime";
    arr2[1][3] = "Ginger_Ale";
    arr2[1][4] = "Ice";

    arr2[2] = new Array();
    arr2[2][0] = "Gin_FIzz"; // 칵테일명
    arr2[2][1] = "Gin"; // 칵테일 재료
    arr2[2][2] = "Lemon";
    arr2[2][3] = "Sugar_Syrup";
    arr2[2][4] = "Soda";
    arr2[2][5] = "Ice";

    var cocktail_name = "다음 칵테일을 만들 수 있습니다.\n";
    var count = 0;
    var msg = "다음 재료를 선택하셨습니다.\n";
    var checkBoxes = document.getElementsByName("Ingredients");             // checkbox 값 받아오기

    // checkbox 값 받아와서 문자배열에 값 넣기
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            msg += ("- " + checkBoxes[i].value + "\n");
            temp[i] = checkBoxes[i].value;
        }
    }

    // checkbox중 비어 있는값 제외하고 받아오기
    var ingredients = temp.filter(element => element != null);
    // alert(ingredients);          // checkbox에서 null값 빼고 제대로 받아왔는지 확인

    // 만들 수 있는 칵테일 선택
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 1; j <= arr2[i].length; j++) {
            for (var k = 0; k < ingredients.length; k++){
                if (arr2[i][j] === ingredients[k]) {
                    count++;
                    continue;
                }
            }
        }
        // alert(count); //제대로 값 들어갔는지 확인
        if ((count+1) == arr2[i].length) {
            cocktail_name += ("- "  + arr2[i][0] + "\n");
        }
        count = 0;
    }

    alert(msg);
    alert(cocktail_name);
}