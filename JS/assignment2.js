var imgRotation = 0;
var CurrentPhoneMenu = 0; //Different states of the phone (Temporary)
var BookFlip = 0;
var CurrentlyFlipping = false;
var FlipBack = false;

var currTitle = document.getElementById("MainTopic");
var Button1 = document.getElementById("SubTopicOne");
var Button2 = document.getElementById("SubTopicTwo");
var Button3 = document.getElementById("SubTopicThree");
var Button4 = document.getElementById("StoryDev");
var Button5 = document.getElementById("FavouriteStory1");
var Button6 = document.getElementById("OnlineStory");
var Button7 = document.getElementById("StoryDev2")
var Button8 = document.getElementById("FavouriteStory2");
var Button9 = document.getElementById("Salary");

var ButtonLast = document.getElementById("BackButton");
var ContentLeft = document.getElementById("LightNovelImg");
var ContentRight = document.getElementById("WhatIsLN");

Button1Child = Button1.children;
Button2Child = Button2.children;
Button3Child = Button3.children;
Button4Child = Button4.children;
Button5Child = Button5.children;
Button6Child = Button6.children;
Button7Child = Button7.children;
Button8Child = Button8.children;
Button9Child = Button9.children;
ButtonLastChild = ButtonLast.children;

const BookPages = ["Book_Img1.png", "Book_Img2.png", "Book_Img3.png", "Book_Img4.png"
                , "Book_Img5.png", "Book_Img6.png", "Book_Img7.png"]; // images

var MainImage = document.getElementById("BookAndPhone"); //Book And Phone Image
MainImage.src = "Img/" + BookPages[0]; 

function MouseHover(obj){
    switch(obj.parentElement.id){
        case "SubTopicOne":
            Button1Child[0].style.border = "4px inset #b1abab";
            break;
        case "SubTopicTwo":
            Button2Child[0].style.border = "4px inset #b1abab";
            break;
        case "SubTopicThree":
            Button3Child[0].style.border = "4px inset #b1abab";
            break;
        case "StoryDev":
            Button4Child[0].style.border = "4px inset #b1abab";
            break;
        case "FavouriteStory1":
            Button5Child[0].style.border = "4px inset #b1abab";
            break;
        case "OnlineStory":
            Button6Child[0].style.border = "4px inset #b1abab";
            break;
        case "BackButton":
            ButtonLastChild[0].style.border = "4px inset #b1abab";
            break;
        case "StoryDev2":
            Button7Child[0].style.border = "4px inset #b1abab";
            break;
        case "FavouriteStory2":
            Button8Child[0].style.border = "4px inset #b1abab";
            break;
        case "Salary":
            Button9Child[0].style.border = "4px inset #b1abab";
            break;
    }
}

function MouseExit(obj){
    switch(obj.parentElement.id){
        case "SubTopicOne":
            Button1Child[0].style.border = "4px outset #b1abab";
            break;
        case "SubTopicTwo":
            Button2Child[0].style.border = "4px outset #b1abab";
            break;
        case "SubTopicThree":
            Button3Child[0].style.border = "4px outset #b1abab";
            break;
        case "StoryDev":
            Button4Child[0].style.border = "4px outset #b1abab";
            break;
        case "FavouriteStory1":
            Button5Child[0].style.border = "4px outset #b1abab";
            break;
        case "OnlineStory":
            Button6Child[0].style.border = "4px outset #b1abab";
            break;
        case "BackButton":
            ButtonLastChild[0].style.border = "4px outset #b1abab";
            break;
        case "StoryDev2":
            Button7Child[0].style.border = "4px outset #b1abab";
            break;
        case "FavouriteStory2":
            Button8Child[0].style.border = "4px outset #b1abab";
            break;
        case "Salary":
            Button9Child[0].style.border = "4px outset #b1abab";
            break;
    }
}

function ButtonClick(obj){
    switch(obj.parentElement.id){
        case "SubTopicOne":
            Button1Child[0].style.backgroundColor = "gray";
            break;
        case "SubTopicTwo":
            Button2Child[0].style.backgroundColor = "gray";
            break;
        case "SubTopicThree":
            Button3Child[0].style.backgroundColor = "gray";
            break;
        case "StoryDev":
            Button4Child[0].style.backgroundColor = "gray";
            break;
        case "FavouriteStory1":
            Button5Child[0].style.backgroundColor = "gray";
            break;
        case "OnlineStory":
            Button6Child[0].style.backgroundColor = "gray";
            break;
        case "BackButton":
            ButtonLastChild[0].style.backgroundColor = "gray";
            break;
        case "StoryDev2":
            Button7Child[0].style.backgroundColor = "gray";
            break;
        case "FavouriteStory2":
            Button8Child[0].style.backgroundColor = "gray";
            break;
        case "Salary":
            Button9Child[0].style.backgroundColor = "gray";
            break;
    }
}

setInterval(function BookPageFlip(obj){ //Flip book animation
    if(CurrentlyFlipping == true)
    {
        if(FlipBack == true) {
            if(BookFlip > 0) {  //Change to get object element
                MainImage.src = "Img/" + BookPages[BookFlip];
                BookFlip -= 1;
            }
            else if(BookFlip <= 0) {
                CurrentlyFlipping = false;
                BookFlip = 0;
                MainImage.src = "Img/" + BookPages[BookFlip];

                switch(CurrentPhoneMenu){ //Note: Button Last will always be Go Back
                    case 0: //Start Screen, User chooses which sub topic they want to go to
                        currTitle.style.display = "block";
                        Button1.style.display = "block";
                        Button2.style.display = "block";
                        Button3.style.display = "block";
                        Button4.style.display = "none";
                        Button5.style.display = "none";
                        Button6.style.display = "none";
                        Button7.style.display = "none";
                        Button8.style.display = "none";
                        Button9.style.display = "none";
                        ButtonLast.style.display = "none";
                
                        imgRotation = 0;
                        break;
                    case 1: //User chose sub topic 1 a.k.a Light Novels vs Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button4.style.display = "block";
                        Button7.style.display = "block";
                        ButtonLast.style.display = "block";
                
                        imgRotation = 90;
                        break;
            
                    case 2: //User chose sub topic 2 a.k.a Favourite Light Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button5.style.display = "block";
                        Button8.style.display = "block";
                        ButtonLast.style.display = "block";
            
                        imgRotation = 90;
                        break;
                    
                    case 3: //User chose sub topic 3 a.k.a Web Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button6.style.display = "block";
                        Button9.style.display = "block"
                        ButtonLast.style.display = "block";
            
                        imgRotation = 90;
                        break;
                }
            }
        }

        else {
            if(BookFlip < 7) {  //Change to get object element
                MainImage.src = "Img/" + BookPages[BookFlip];
                BookFlip += 1;
            }
            else if(BookFlip >= 7) {
                CurrentlyFlipping = false;
                BookFlip = 0;
                MainImage.src = "Img/" + BookPages[BookFlip];

                switch(CurrentPhoneMenu){ //Note: Button Last will always be Go Back
                    case 0: //Start Screen, User chooses which sub topic they want to go to
                    currTitle.style.display = "block";
                        Button1.style.display = "block";
                        Button2.style.display = "block";
                        Button3.style.display = "block";
                        Button4.style.display = "none";
                        Button5.style.display = "none";
                        Button6.style.display = "none";
                        Button7.style.display = "none";
                        Button8.style.display = "none";
                        ButtonLast.style.display = "none";
                
                        imgRotation = 0;
                        break;
                    case 1: //User chose sub topic 1 a.k.a Light Novels vs Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button4.style.display = "block";
                        Button7.style.display = "block";
                        ButtonLast.style.display = "block";
                        imgRotation = 90;
                        break;
            
                    case 2: //User chose sub topic 2 a.k.a Favourite Light Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button5.style.display = "block";
                        Button8.style.display = "block";
                        ButtonLast.style.display = "block";
                        imgRotation = 90;
                        break;
                    
                    case 3: //User chose sub topic 3 a.k.a Web Novels
                        Button1.style.display = "none";
                        Button2.style.display = "none";
                        Button3.style.display = "none";
                        Button6.style.display = "block";
                        Button9.style.display = "block";
                        ButtonLast.style.display = "block";
                        imgRotation = 90;
                        break;

                    case 4: //Chose What Makes a Light Novel in Sub Topic 1
                        ContentLeft = document.getElementById("LightNovelImg");
                        ContentRight = document.getElementById("WhatIsLN");

                        Button4.style.display = "none";
                        Button7.style.display = "none";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        ButtonLast.style.display = "block";
                        break;
                    
                    case 5: //Chose Mushoku Tensei in Sub Topic 2
                        ContentLeft = document.getElementById("MushokuTenseiStory1");
                        ContentRight = document.getElementById("MushokuTenseiStory2");

                        Button5.style.display = "none";
                        Button8.style.display = "none";
                        ButtonLast.style.display = "block";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        break;

                    case 6: //Chose Web Novel in Sub Topic 3
                        ContentLeft = document.getElementById("WebNovel1");
                        ContentRight = document.getElementById("WebNovel2");

                        Button6.style.display = "none";
                        Button9.style.display = "none";
                        ButtonLast.style.display = "block";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        break;
                                            
                    case 7:
                        ContentLeft = document.getElementById("WhatIsNovel1");
                        ContentRight = document.getElementById("WhatIsNovel2");

                        Button4.style.display = "none";
                        Button7.style.display = "none";
                        ButtonLast.style.display = "block";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        break;

                    case 8: // Chose Re:Monster
                        ContentLeft = document.getElementById("ReMonsterStory1");
                        ContentRight = document.getElementById("ReMonsterStory2");

                        Button5.style.display = "none";
                        Button8.style.display = "none";
                        ButtonLast.style.display = "block";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        break;

                    case 9: // Chose Salary
                        ContentLeft = document.getElementById("MoneyEarned1");
                        ContentRight = document.getElementById("MoneyEarned2");

                        Button6.style.display = "none";
                        Button9.style.display = "none";
                        ButtonLast.style.display = "block";
                        ContentLeft.style.display = "block";
                        ContentRight.style.display = "block";
                        break;
                }
            }
        }
    }
  }, 100);

function ButtonRelease(obj){
    switch(obj.parentElement.id){
        case "SubTopicOne": //Chose SubTopic1
            Button1Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 1;
            FlipBack = false;
            break;
        case "SubTopicTwo": //Chose SubTopic2
            Button2Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 2;
            FlipBack = false;
            break;
        case "SubTopicThree": //Chose SubTopic3
            Button3Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 3;
            FlipBack = false;
            break;
        case "StoryDev": //Chose FavouriteScenes from SubTopic1
            Button4Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 4;
            FlipBack = false;
            break;
        case "FavouriteStory1": //Chose FavouriteGames from SubTopic2
            Button5Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 5;
            FlipBack = false;
            break;
        case "OnlineStory": //Chose GachasPlayed from SubTopic3
            Button6Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 6;
            FlipBack = false;
            break;
        case "StoryDev2": //Chose GachasPlayed from SubTopic3
            Button7Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 7;
            FlipBack = false;
            break;
        case "FavouriteStory2": //Chose GachasPlayed from SubTopic3
            Button8Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 8;
            FlipBack = false;
            break;
        case "Salary": //Chose GachasPlayed from SubTopic3
            Button9Child[0].style.backgroundColor = "white";
            CurrentPhoneMenu = 9;
            FlipBack = false;
            break;
        case "BackButton": //Choose to go back
            ButtonLastChild[0].style.backgroundColor = "white";
            switch(CurrentPhoneMenu){
                case 1: case 2: case 3:
                    CurrentPhoneMenu = 0
                    break;
                case 4: case 7:
                    CurrentPhoneMenu = 1;
                    break;
                case 5: case 8:
                    CurrentPhoneMenu = 2;
                    break;
                case 6: case 9:
                    CurrentPhoneMenu = 3;
                    break;
            }

            FlipBack = true;
            BookFlip = 6;
            break;
    }

    //document.querySelector("#BookAndPhone").style.transform = 'rotate(' + imgRotation + 'deg)'; //Rotates Phone Image

    if(CurrentlyFlipping == false){
        currTitle.style.display = "none";
        Button1.style.display = "none";
        Button2.style.display = "none";
        Button3.style.display = "none";
        Button4.style.display = "none";
        Button5.style.display = "none";
        Button6.style.display = "none";
        Button7.style.display = "none";
        Button8.style.display = "none";
        Button9.style.display = "none";
        ButtonLast.style.display = "none";
        ContentLeft.style.display = "none";
        ContentRight.style.display = "none";
        CurrentlyFlipping = true;
        BookPageFlip(obj);
    }
}

for(var i = 0; i < 10; i++){
    document.getElementsByClassName("PhoneButton")[i].addEventListener("mouseover", function(){
        return MouseHover(this);
    });
    document.getElementsByClassName("PhoneButton")[i].addEventListener("mouseout", function(){
        return MouseExit(this);
    });
    document.getElementsByClassName("PhoneButton")[i].addEventListener("mousedown", function(){
        return ButtonClick(this);
    });
    document.getElementsByClassName("PhoneButton")[i].addEventListener("mouseup", function(){
        return ButtonRelease(this);
    });
}