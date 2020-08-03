var position = { x : 1, y: 1, z: 1 };
var position1 = { x : 1, y: 1, z: 1 };
var position2 = { x : 1, y: 1, z: 1 };
var position3 = { x : 1, y: 1, z: 1 };
var position4 = { x : 1, y: 1, z: 1 };
var position5 = { x : 1, y: 1, z: 1 };

var infoscreenWidth = { x : -200, y: 100};
var maxWidth = {x: 0, y: 0};
var minWidth = { x : -200, y: 100};

var widthTween = new TWEEN.Tween(infoscreenWidth).to(maxWidth, 1000);
widthTween.easing(TWEEN.Easing.Quartic.Out);
widthTween.onUpdate(function(){
	$("#infoscreen0").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen1").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen2").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen3").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen4").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen5").css("left","calc("+infoscreenWidth.y + "% + 200px)");
});

var widthTweenBack = new TWEEN.Tween(infoscreenWidth).to(minWidth, 1000);
widthTweenBack.easing(TWEEN.Easing.Quartic.Out);
widthTweenBack.onUpdate(function(){
	$("#infoscreen0").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen1").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen2").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen3").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen4").css("left","calc("+infoscreenWidth.y + "% + 200px)");
    $("#infoscreen5").css("left","calc("+infoscreenWidth.y + "% + 200px)");
});

var menuWidth = { x: -200};
var maxMenuWidth = {x: 0};
var minMenuWidth = {x:-200};

var menuTween = new TWEEN.Tween(menuWidth).to(maxMenuWidth, 1000);
menuTween.easing(TWEEN.Easing.Quartic.Out);
menuTween.onUpdate(function(){
    $("#menu").css("left",menuWidth.x);
    $("#microMenu").css("left",menuWidth.x);
});

var menuTweenBack = new TWEEN.Tween(menuWidth).to(minMenuWidth, 1000);
menuTweenBack.easing(TWEEN.Easing.Quartic.Out);
menuTweenBack.onUpdate(function(){
    $("#menu").css("left",menuWidth.x);
    $("#microMenu").css("left",menuWidth.x);
});


var target = { x : 1.2, y: 1.2, z: 1.2 };
var backTarget = { x: 1, y: 1, z: 1 };

var tween = new TWEEN.Tween(position).to(target, 600);
tween.easing(TWEEN.Easing.Quadratic.Out)

tween.onUpdate(function(){
    sphereMassive[0].scale.x = position.x;
    sphereMassive[0].scale.y = position.y;
    sphereMassive[0].scale.z = position.z;
});

var tweenBack = new TWEEN.Tween(position).to(backTarget, 600);
tweenBack.easing(TWEEN.Easing.Quadratic.Out);

tweenBack.onUpdate(function(){
    sphereMassive[0].scale.x = position.x;
    sphereMassive[0].scale.y = position.y;
    sphereMassive[0].scale.z = position.z;
});

var tween1 = new TWEEN.Tween(position1).to(target, 600);
tween1.easing(TWEEN.Easing.Quadratic.Out)

tween1.onUpdate(function(){
    sphereMassive[1].scale.x = position1.x;
    sphereMassive[1].scale.y = position1.y;
    sphereMassive[1].scale.z = position1.z;
});

var tweenBack1 = new TWEEN.Tween(position1).to(backTarget, 600);
tweenBack1.easing(TWEEN.Easing.Quadratic.Out);

tweenBack1.onUpdate(function(){
    sphereMassive[1].scale.x = position1.x;
    sphereMassive[1].scale.y = position1.y;
    sphereMassive[1].scale.z = position1.z;
});

var tween2 = new TWEEN.Tween(position2).to(target, 600);
tween2.easing(TWEEN.Easing.Quadratic.Out)

tween2.onUpdate(function(){
    sphereMassive[2].scale.x = position2.x;
    sphereMassive[2].scale.y = position2.y;
    sphereMassive[2].scale.z = position2.z;
});

var tweenBack2 = new TWEEN.Tween(position2).to(backTarget, 600);
tweenBack2.easing(TWEEN.Easing.Quadratic.Out);

tweenBack2.onUpdate(function(){
    sphereMassive[2].scale.x = position2.x;
    sphereMassive[2].scale.y = position2.y;
    sphereMassive[2].scale.z = position2.z;
});

var tween3 = new TWEEN.Tween(position3).to(target, 600);
tween3.easing(TWEEN.Easing.Quadratic.Out)

tween3.onUpdate(function(){
    sphereMassive[3].scale.x = position3.x;
    sphereMassive[3].scale.y = position3.y;
    sphereMassive[3].scale.z = position3.z;
});

var tweenBack3 = new TWEEN.Tween(position3).to(backTarget, 600);
tweenBack3.easing(TWEEN.Easing.Quadratic.Out);

tweenBack3.onUpdate(function(){
    sphereMassive[3].scale.x = position3.x;
    sphereMassive[3].scale.y = position3.y;
    sphereMassive[3].scale.z = position3.z;
});

var tween4 = new TWEEN.Tween(position4).to(target, 600);
tween4.easing(TWEEN.Easing.Quadratic.Out)

tween4.onUpdate(function(){
    sphereMassive[4].scale.x = position4.x;
    sphereMassive[4].scale.y = position4.y;
    sphereMassive[4].scale.z = position4.z;
});

var tweenBack4 = new TWEEN.Tween(position4).to(backTarget, 600);
tweenBack4.easing(TWEEN.Easing.Quadratic.Out);

tweenBack4.onUpdate(function(){
    sphereMassive[4].scale.x = position4.x;
    sphereMassive[4].scale.y = position4.y;
    sphereMassive[4].scale.z = position4.z;
});

var tween5 = new TWEEN.Tween(position5).to(target, 600);
tween5.easing(TWEEN.Easing.Quadratic.Out)

tween5.onUpdate(function(){
    sphereMassive[5].scale.x = position5.x;
    sphereMassive[5].scale.y = position5.y;
    sphereMassive[5].scale.z = position5.z;
});

var tweenBack5 = new TWEEN.Tween(position5).to(backTarget, 600);
tweenBack5.easing(TWEEN.Easing.Quadratic.Out);

tweenBack5.onUpdate(function(){
    sphereMassive[5].scale.x = position5.x;
    sphereMassive[5].scale.y = position5.y;
    sphereMassive[5].scale.z = position5.z;
});





var massPosition = {q:0, w:0,e:0,r:0,t:0,y:0}
var position0 = { x : 1, y: 1};
var position10 = { x : 1, y: 1};
var position20 = { x : 1, y: 1};
var position30 = { x : 1, y: 1};
var position40 = { x : 1, y: 1};
var position50 = { x : 1, y: 1};
var target0 = { x : 2, y: 0};
var backTarget0 = { x: 1, y: 1};

var massTweenBack = new TWEEN.Tween(massPosition).to(backTarget0, 800);
massTweenBack.easing(TWEEN.Easing.Quadratic.Out);

var tween0 = new TWEEN.Tween(position0).to(target0, 800);
tween0.easing(TWEEN.Easing.Quadratic.Out)

tween0.onUpdate(function(){
    sphereMassive[0].scale.x = position0.x;
    sphereMassive[0].scale.y = position0.x;
    sphereMassive[0].scale.z = position0.x;
    position0.y = sphereMassive[0].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position0.y;
    }
});

var tweenBack0 = new TWEEN.Tween(position0).to(backTarget0, 800);
tweenBack0.easing(TWEEN.Easing.Quadratic.Out);

tweenBack0.onUpdate(function(){
    sphereMassive[0].scale.x = position0.x;
    sphereMassive[0].scale.y = position0.x;
    sphereMassive[0].scale.z = position0.x;
    position0.y = sphereMassive[0].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position0.y;
    }
    $("#infoscreen0").remove();

});

var tween10 = new TWEEN.Tween(position10).to(target0, 800);
tween10.easing(TWEEN.Easing.Quadratic.Out)

tween10.onUpdate(function(){
    sphereMassive[1].scale.x = position10.x;
    sphereMassive[1].scale.y = position10.x;
    sphereMassive[1].scale.z = position10.x;
    position10.y = sphereMassive[1].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position10.y;
    }
});

var tweenBack10 = new TWEEN.Tween(position10).to(backTarget0, 800);
tweenBack10.easing(TWEEN.Easing.Quadratic.Out);

tweenBack10.onUpdate(function(){
    sphereMassive[1].scale.x = position10.x;
    sphereMassive[1].scale.y = position10.x;
    sphereMassive[1].scale.z = position10.x;
    position10.y = sphereMassive[1].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position10.y;
    }
    $("#infoscreen1").remove();
});

var tween20 = new TWEEN.Tween(position20).to(target0, 800);
tween20.easing(TWEEN.Easing.Quadratic.Out)

tween20.onUpdate(function(){
    sphereMassive[2].scale.x = position20.x;
    sphereMassive[2].scale.y = position20.x;
    sphereMassive[2].scale.z = position20.x;
    position20.y = sphereMassive[2].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position20.y;
    }

});

var tweenBack20 = new TWEEN.Tween(position20).to(backTarget0, 800);
tweenBack20.easing(TWEEN.Easing.Quadratic.Out);

tweenBack20.onUpdate(function(){
    sphereMassive[2].scale.x = position20.x;
    sphereMassive[2].scale.y = position20.x;
    sphereMassive[2].scale.z = position20.x;
    position20.y = sphereMassive[2].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position20.y;
    }
    $("#infoscreen2").remove();
});

var tween30 = new TWEEN.Tween(position30).to(target0, 800);
tween30.easing(TWEEN.Easing.Quadratic.Out)

tween30.onUpdate(function(){
    sphereMassive[3].scale.x = position30.x;
    sphereMassive[3].scale.y = position30.x;
    sphereMassive[3].scale.z = position30.x;
    position30.y = sphereMassive[3].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position30.y;
    }
});

var tweenBack30 = new TWEEN.Tween(position30).to(backTarget0, 800);
tweenBack30.easing(TWEEN.Easing.Quadratic.Out);

tweenBack30.onUpdate(function(){
    sphereMassive[3].scale.x = position30.x;
    sphereMassive[3].scale.y = position30.x;
    sphereMassive[3].scale.z = position30.x;
    position30.y = sphereMassive[3].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position30.y;
    }
    $("#infoscreen3").remove();
});

var tween40 = new TWEEN.Tween(position40).to(target0, 800);
tween40.easing(TWEEN.Easing.Quadratic.Out)

tween40.onUpdate(function(){
    sphereMassive[4].scale.x = position40.x;
    sphereMassive[4].scale.y = position40.x;
    sphereMassive[4].scale.z = position40.x;
    position40.y = sphereMassive[4].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position40.y;
    }
});

var tweenBack40 = new TWEEN.Tween(position40).to(backTarget0, 800);
tweenBack40.easing(TWEEN.Easing.Quadratic.Out);

tweenBack40.onUpdate(function(){
    sphereMassive[4].scale.x = position40.x;
    sphereMassive[4].scale.y = position40.x;
    sphereMassive[4].scale.z = position40.x;
    position40.y = sphereMassive[4].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position40.y;
    }
    $("#infoscreen4").remove();
});

var tween50 = new TWEEN.Tween(position50).to(target0, 800);
tween50.easing(TWEEN.Easing.Quadratic.Out)

tween50.onUpdate(function(){
    sphereMassive[5].scale.x = position50.x;
    sphereMassive[5].scale.y = position50.x;
    sphereMassive[5].scale.z = position50.x;
    position50.y = sphereMassive[5].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position50.y;
    }
});

var tweenBack50 = new TWEEN.Tween(position50).to(backTarget0, 800);
tweenBack50.easing(TWEEN.Easing.Quadratic.Out);

tweenBack50.onUpdate(function(){
    sphereMassive[5].scale.x = position50.x;
    sphereMassive[5].scale.y = position50.x;
    sphereMassive[5].scale.z = position50.x;
    position50.y = sphereMassive[5].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position50.y;
    }
    $("#infoscreen5").remove();
});


function closeInfo(){
                        widthTweenBack.start();
                        menuTweenBack.start();
                        if (sphereMassive[0].scale.x != 1){
                            widthTweenBack.chain(tweenBack0);
                        };
                        if (sphereMassive[1].scale.x != 1){
                            widthTweenBack.chain(tweenBack10);
                        };
                        if (sphereMassive[2].scale.x != 1){
                            widthTweenBack.chain(tweenBack20);
                        };
                        if (sphereMassive[3].scale.x != 1){
                            widthTweenBack.chain(tweenBack30);
                        };
                        if (sphereMassive[4].scale.x != 1){
                            widthTweenBack.chain(tweenBack40);
                        };
                        if (sphereMassive[5].scale.x != 1){
                            widthTweenBack.chain(tweenBack50);
                        };


                        if (positiveRotation == true){
                            setTimeout(function(){
                                rotator = -40;
                            },1000)
                        } else {
                            setTimeout(function(){
                                rotator = 40;
                            },1000)
                        }

                        setTimeout(function(){
                            document.addEventListener('click',onDocumentMouseDown,true);
                            document.addEventListener('mousemove', onDocumentMouseMove, false);
                            orbitControls.enabled = true;
                        },2000)
                    }

/*-75,19,63

var position50 = { x : 1, y: 1};
var target0 = { x : 2, y: 0};
var backTarget0 = { x: 1, y: 1};

var massTweenBack = new TWEEN.Tween(massPosition).to(backTarget0, 800);
massTweenBack.easing(TWEEN.Easing.Quadratic.Out);

var tween0 = new TWEEN.Tween(position0).to(target0, 800);
tween0.easing(TWEEN.Easing.Quadratic.Out)

tween0.onUpdate(function(){
    sphereMassive[0].scale.x = position0.x;
    sphereMassive[0].scale.y = position0.x;
    sphereMassive[0].scale.z = position0.x;
    position0.y = sphereMassive[0].material.opacity;
    for (var k = 0; k < sphereMassive.length; k++){
        sphereMassive[k].material.opacity = position0.y;
    }
});*/

