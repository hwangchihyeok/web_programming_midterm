    var coktails_name = new Array();

    for (var i = 0; i < 10; i++){
        coktails_name[i] = new Array();
    }

    var image_coktails = ["칵테일사진/buck_cocktail.jpeg", "칵테일사진/gimlet.jpeg", "칵테일사진/jin_fizz.jpeg", "칵테일사진/gin_rickey.jpeg", "칵테일사진/gin_tonic.jpeg","칵테일사진/greyhound.jpeg",
    "칵테일사진/john_collins.jpeg","칵테일사진/monkey_gland.jpeg","칵테일사진/salty_dog.jpeg","칵테일사진/stay_sober.jpeg",]
    
    var Buck_cocktails = 
    ["Buck_cocktails",
    "50ml Gin",
    "1 Lime",
    "100ml Ginger Ale",
    "100gr Ice"
    ];

    var Gimlet = 
    ["Gimlet",
    "60ml Gin",
    "1half Lime",
    "15ml Sugar_Syrup",
    "50gr Ice"
    ];
        
    var Gin_Fizz = 
    ["Gin_Fizz",
    "45ml Gin",
    "1half Lemon",
    "10ml Sugar_Syrup",
    "80ml Soda",
    "100gr Ice"
    ];

    var Gin_Rickey = 
    ["Gin_Rickey",
    "50ml Gin",
    "1 Lime",
    "70ml Soda",
    "100gr Ice"
    ]; 

    var Gin_Tonic = 
    ["Gin_Tonic",
    "50ml Gin",
    "100ml Tonic",
    "100gr Ice",
    ]; 

    var Greyhound = 
    ["Greyhound",
    "50ml Gin",
    "200ml Grapefruit_Juic",
    "100gr Ice",
    ]; 

    var John_Collins= 
    ["John_Collins",
    "45ml Gin",
    "1 Lemon",
    "15ml Sugar_Syrup",
    "60ml Soda",
    "100gr Ice",
    ]; 

    var Monkey_Gland = 
    ["Monkey_Gland",
    "50ml Gin",
    "30ml Orange_Juice",
    "100gr Ice",
    ]; 

    var Salty_Dog = 
    ["Salty_Dog",
    "40ml Gin",
    "100ml Grapefruit_Juic",
    "10gr Salt",
    "100gr Ice",
    ]; 

    var Stay_Sober = 
    ["Stay_Sober",
    "30ml Apple Juice",
    "30ml Cranberry_Juic",
    "90ml Ginger Beer",
    "100gr Ice",
    ]; 

    coktails_name[0] = Buck_cocktails;
    coktails_name[1] = Gimlet;
    coktails_name[2] = Gin_Fizz;
    coktails_name[3] = Gin_Rickey;
    coktails_name[4] = Gin_Tonic;
    coktails_name[5] = Greyhound;
    coktails_name[6] = John_Collins;
    coktails_name[7] = Monkey_Gland;
    coktails_name[8] = Salty_Dog;
    coktails_name[9] = Stay_Sober;

    var num = coktails_name.length;

    function coktails_num(){
        return num;
    }

    function cocktail_info(i, j){
        return coktails_name[i][j];
    }

function print_coktail() {
        for (var i = 0; i < coktails_name.length; i++){
            document.write("<li class='box'>");
            document.write("<div class='products-img'><img src=\'" + image_coktails[i] + "\' alt='' /></div>");
            document.write("<div class='products-desc'>");
            document.write("<h3><a href='#'>" + coktails_name[i][0] + "</a></h3>");

            document.write("<p>Ingredients</p>");

            for (var j = 1; j < coktails_name[i].length; j++){
                document.write("<p>"+ coktails_name[i][j] +"</p>");
            }

            document.write("</div>");
            document.write("</li>");
    }
}

    
