function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}


function print_ingredients(){

    addJavascript('/js/칵테일추천.js');
                    var num;
                    var ingredient_temp = ['7Up','Apple_Juice','Beer','Black_Pepper','Butter','Chocolate','Coffee','Cola','Cranberry_Juice','Cream','Egg','Gin',
                    'Ginger_Ale','Ginger_Beer','Grapefruit_Juice','Ice','Ice_Cream','Lemon','Lemonade','Lime','Milk','Orange','Orange_Juice','Red_Bull','Salt',
                    'Soda','Sugar','Sugar_Syrup','Tabasco','Tomato_Juice','Tonic','Water'];

                    var image_ingredient = ["재료사진/7up.jpg", "재료사진/apple_juice.jpg","재료사진/Beer.jpeg", "재료사진/Black_pepper.jpeg", "재료사진/Butter.jpeg", "재료사진/Chocolate.jpeg", "재료사진/Coffee.jpeg",
                    "재료사진/Cola.jpeg", "재료사진/Cranberry_Juice.jpeg", "재료사진/Cream.jpeg" , "재료사진/Egg.jpeg", "재료사진/Gin.jpeg", "재료사진/Ginger_Ale.jpeg", "재료사진/Ginger_Beer.jpeg", 
                    "재료사진/Grapefruit_Juice.jpeg", "재료사진/ice.jpeg", "재료사진/ice_Cream.jpeg", "재료사진/lemon.jpeg", "재료사진/lemonade.jpeg", "재료사진/lime.jpeg", "재료사진/milk.jpeg", "재료사진/orange.jpeg", "재료사진/orange_juice.jpeg", 
                    "재료사진/red_bull.jpeg", "재료사진/salt.jpeg", "재료사진/soda.jpeg", "재료사진/sugar.jpeg", "재료사진/sugar_syrup.jpeg", "재료사진/tabasco.jpeg", "재료사진/tomato_juice.jpeg", 
                    "재료사진/tonic.jpeg", "재료사진/water.jpeg"];

                    for (var i = 0; i < image_ingredient.length; i++){
                        num = used_ingredients(ingredient_temp[i]); // 해당 재료가 몇개의 칵테일에 사용되는지 알아내는 함수

                        document.write("<li class='box'>");
                        document.write("<div class='products-img'><img src=\"" + image_ingredient[i] + "\"alt='' /></div>");
                        document.write("<div class='products-desc'>");
                        document.write("<h3><U>" + ingredient_temp[i]+ "</U></h3>");
                        document.write("<p>" + num + "개의 칵테일에 사용됩니다.</p>");
                        document.write("<input type='checkbox' name='Ingredients' value='" + ingredient_temp[i] + "'>");
                        document.write("</div>");
                        document.write("</li>");
                    };
                };