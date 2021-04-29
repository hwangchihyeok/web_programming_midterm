function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}

function report() {
    var ingredient_temp = ['7Up','Apple_Juice','Beer','Black_Pepper','Butter','Chocolate','Coffee','Cola','Cranberry_Juice','Cream','Egg','Gin',
    'Ginger_Ale','Ginger_Beer','Grapefruit_Juice','Ice','Ice_Cream','Lemon','Lemonade','Lime','Milk','Orange','Orange_Juice','Red_Bull','Salt',
    'Soda','Sugar','Sugar_Syrup','Tabasco','Tomato_Juice','Tonic','Water'];

    addJavascript('/js/칵테일레시피모음.js');

    var arr2 = new Array();
    var temp = new Array();
    var coktail_temp = new Array();

    // 등록된 칵테일 수 받아오기
    var num = coktails_num();

    // 2차원 배열 생성
    for (var i = 0; i < num; i++){
        arr2[i] = new Array();
        coktail_temp = new Array();
    }

    // 등록된 칵테일 레시피 받아오기
    for (var i = 0; i < num; i++){
        for (var j = 0; j < 6; j++){
            arr2[i][j] = cocktail_info(i, j);
        }
    }

    // 칵테일 레시피 null값 제외
    for (var i = 0; i < num; i++){
        coktail_temp[i] = arr2[i].filter(element => element != null);
    }

    // for (var i = 0; i < num; i++){
    //     alert(coktail_temp[i]);
    // }

    // arr2[0] = new Array();
    // arr2[0][0] = "Gimlet"; // 칵테일명
    // arr2[0][1] = "Gin"; // 칵테일 재료
    // arr2[0][2] = "Lime";
    // arr2[0][3] = "Sugar_Syrup";
    // arr2[0][4] = "Ice";

    var cocktail_name = "다음 칵테일을 만들 수 있습니다.\n";
    var count = 0;
    var msg = "다음 재료를 선택하셨습니다.\n";
    var checkBoxes = document.getElementsByName("Ingredients"); // checkbox 값 받아오기

    // checkbox 값 받아와서 문자배열에 값 넣기
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            msg += ("- " + checkBoxes[i].value + "\n");
            temp[i] = checkBoxes[i].value;
        }
    }
    // checkbox중 비어 있는값 제외하고 받아오기
    var ingredients = temp.filter(element => element != null);
    // alert(ingredients);      // checkbox에서 null값 빼고 제대로 받아왔는지 확인

    // 만들 수 있는 칵테일 선택
    for (var i = 0; i < coktail_temp.length; i++) {
        for (var j = 1; j <= coktail_temp[i].length; j++) {
            for (var k = 0; k < ingredients.length; k++){
                var temp1 = coktail_temp[i][j];
                var temp2 = ingredients[k];

                if (temp1.indexOf(temp2)) {
                    count++;
                    continue;
                }
            }
        }
        // alert(count); //제대로 값 들어갔는지 확인
        if ((count+1) == coktail_temp[i].length) {
            cocktail_name += ("- "  + coktail_temp[i][0] + "\n");
        }
        count = 0;
    }

    alert(msg);
    alert(cocktail_name);
}