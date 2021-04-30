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
    var temp1 = new Array();

    // 등록된 칵테일 수 받아오기
    var num = coktails_num();

    // 2차원 배열 생성
    for (var i = 0; i < num; i++){
        arr2[i] = new Array();
        coktail_temp = new Array();
        temp1[i] = new Array();
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

    // 3차원 배열 만들기
    for (var i = 0; i < num; i++){
        for (var j = 0; j < coktail_temp[i].length; j++){
            temp1[i][j] = new Array();
        }
    }

    // 3차원 배열에 용량과 재료명 분리
    for (var i = 0; i < num; i++){
        for (var j = 0; j < coktail_temp[i].length; j++){
            temp1[i][j]= coktail_temp[i][j].split(" ");
        }
    }

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

    // 선택한 재료 null값 제외
    var ingredients = temp.filter(element => element != null);

    // 만들 수 있는 칵테일 선택
    for (var i = 0; i < coktail_temp.length; i++) {
        for (var j = 1; j < coktail_temp[i].length; j++) {
            for (var k = 0; k < ingredients.length; k++){
                if (temp1[i][j][1] == ingredients[k]) {
                    count++;
                    continue;
                }
            }
        }
        if ((count+1) == coktail_temp[i].length) {
            cocktail_name += ("- "  + coktail_temp[i][0] + "\n");
        }
        count = 0;
    }

    alert(msg);                     // 선택한 재료 출력
    alert(cocktail_name);           // 선택한 재료로 만들 수 있는 칵테일
}

// 몇개의 칵테일에 이용되는지 확인 함수
function used_ingredients(a){
    addJavascript('/js/칵테일레시피모음.js');
    
    var arr2 = new Array();
    var temp = new Array();
    var coktail_temp = new Array();
    var temp1 = new Array();

    // 등록된 칵테일 수 받아오기
    var num = coktails_num();

    // 2차원 배열 생성
    for (var i = 0; i < num; i++){
        arr2[i] = new Array();
        coktail_temp = new Array();
        temp1[i] = new Array();
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

    // 3차원 배열 만들기
    for (var i = 0; i < num; i++){
        for (var j = 0; j < coktail_temp[i].length; j++){
            temp1[i][j] = new Array();
        }
    }

    // 3차원 배열에 용량과 재료명 분리
    for (var i = 0; i < num; i++){
        for (var j = 0; j < coktail_temp[i].length; j++){
            temp1[i][j]= coktail_temp[i][j].split(" ");
        }
    }

    var count = 0;

    for (var i = 0; i < coktail_temp.length; i++) {
        for (var j = 1; j < coktail_temp[i].length; j++) {
                if (temp1[i][j][1] == a) {
                    count++;
                    continue;
                }
            }
        };

    return count;
};