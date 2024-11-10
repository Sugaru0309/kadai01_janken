var pressed_num = "";
var result_num = "";


// var result_num = document.getElementById("fonts");
// result_num.style.fontSize = "50px";


$("#rock").on("click", function () {

    var pressed_num = 0;
    var result_num = Math.floor(Math.random() * 3);
    console.log(result_num, "じゃんけんの結果");
    

    if (result_num == 0) {
        console.log(result_num, pressed_num, "グー");
        $("#result").html("✊あいこ");
        $("#result").css("color", "green");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");
      
        var money = document.getElementById("money");
        //HTMLのimgタグの「文字列」
        var text = '<img src="./sumikko_neko_money.png">';
        //取得した要素のHTMLを書き換える
        money.innerHTML = text;
      
        // $("#result").html('<img id="money" src="./sumikko_neko_money.png">');
       
    } else if (result_num == 1) {
        console.log(result_num, pressed_num, "チョキ");
        $("#result").html("✌️勝ち！");
        $("#result").css("color", "red");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");   
      
        var riceball = document.getElementById("riceball");
        var text = '<img src="./sumikko_neko_onigiri.png">';
        riceball.innerHTML = text;


    } else if (result_num == 2) {
        console.log(result_num, pressed_num, "パー");
        $("#result").html("🖐️負け...");
        $("#result").css("color", "blue");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");
       
        var garigari = document.getElementById("garigari");
        var text = '<img src="./sumikko_neko_garigari.png">';
        garigari.innerHTML = text;
    }

});

    
   
$("#scissor").on("click", function () {

        var pressed_num = 1;
        var result_num = Math.floor(Math.random() * 3);
    console.log(result_num, "じゃんけんの結果");

    if (result_num == 0) {
            console.log(result_num, pressed_num, "グー");
            $("#result").html("✊負け...");
        $("#result").css("color", "blue");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var huh = document.getElementById("huh");
        var text = '<img src="./sumikko_neko_huh.png">';
        huh.innerHTML = text;


    } else if (result_num == 1) {
            console.log(result_num, pressed_num, "チョキ");
            $("#result").html("✌️あいこ");
        $("#result").css("color", "green");
        // $("#result").fontsize(100);
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var gyu = document.getElementById("gyu");
        var text = '<img src="./sumikko_neko_gyu.png">';
       gyu.innerHTML = text;
        
    } else if (result_num == 2) {
            console.log(result_num, pressed_num, "パー");
            $("#result").html("🖐️勝ち！");
        $("#result").css("color", "red");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var oiwai = document.getElementById("oiwai");
        var text = '<img src="./sumikko_neko_oiwai.jpeg">';
        oiwai.innerHTML = text;
        }

    });

  
   
$("#paper").on("click", function () {

    var pressed_num = 2;
    var result_num = Math.floor(Math.random() * 3);
    console.log(result_num, "じゃんけんの結果");

    if (result_num == 0) {
        console.log(result_num, pressed_num, "グー");
        $("#result").html("✊勝ち！");
        $("#result").css("color", "red");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var yusho = document.getElementById("yusho");
        var text = '<img src="./sumikko_neko_yusho.png">';
        yusho.innerHTML = text;


    } else if (result_num == 1) {
        console.log(result_num, pressed_num, "チョキ");
        $("#result").html("✌️負け...");
        $("#result").css("color", "blue");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var tabesugi = document.getElementById("tabesugi");
        var text = '<img src="./sumikko_neko_tabesugi.jpg">';
        tabesugi.innerHTML = text;

    } else if (result_num == 2) {
        console.log(result_num, pressed_num, "パー");
        $("#result").html("🖐️あいこ");
        $("#result").css("color", "green");
        $("#result").css("font-size", "35px");
        $("#result").css("margin-top", "10px");

        var mogumogu = document.getElementById("mogumogu");
        var text = '<img src="./sumikko_neko_mogumogu.png">';
        mogumogu.innerHTML = text;
    }

});















    
