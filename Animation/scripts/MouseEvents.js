document.addEventListener('click', onDocumentMouseDown, true);
document.addEventListener('mousemove', onDocumentMouseMove, false);

function onDocumentMouseDown(event) {
		
		var vector = new THREE.Vector3(

		(event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
		projector.unprojectVector(vector, camera);

		var raycaster = new THREE.Raycaster(camera.position,vector.sub(camera.position).normalize());

		var intersects = raycaster.intersectObjects(sphereMassive);

		

		if (intersects.length > 0) {

			tweenMarker = 1;

			var distance1 = Math.sqrt(Math.pow(camera.position.x,2) + Math.pow((camera.position.y-10),2) + Math.pow(camera.position.z,2));

			var dd1 = Math.sqrt(Math.pow(camera.position.x,2) + Math.pow(camera.position.z,2));

			var distance2 = Math.sqrt(Math.pow(camera.position.x - intersects[0].object.position.x,2) + Math.pow((camera.position.y-intersects[0].object.position.y),2) + Math.pow(camera.position.z - intersects[0].object.position.z,2));
			var distance3 = Math.sqrt(Math.pow(scene.children[4].position.x,2) + Math.pow((scene.children[4].position.y-10),2) + Math.pow(scene.children[4].position.z,2));

				 newX = (camera.position.x*30)/dd1;
				 newZ = (camera.position.z*30)/dd1;

 			clickObject = intersects[0].object.name;


 			var range = Math.sqrt(Math.pow(newX - intersects[0].object.position.x,2) + Math.pow(newZ - intersects[0].object.position.z,2));

 			console.log("range:"+range);

 				if ((Math.abs(intersects[0].object.position.x - newX)>1) || (Math.abs(intersects[0].object.position.z - newZ) > 1)){


			  		if (camera.position.x > 0 && camera.position.z > 0) {
			  			if (intersects[0].object.position.x > 0 && intersects[0].object.position.z <= 0){
			  					if (range > 45){
			  						rotator = 40;
			  					} else if (range > 25){
			  						rotator = 30
			  					} else {
			  						rotator = 20}
			  						positiveRotation = true;
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z > 0){
			  					if (range > 45){
			  						rotator = -40;
			  					} else if (range > 25){
			  						rotator = -30
			  					} else {
			  						rotator = -20}
			  						positiveRotation = false;
			  			} else if (intersects[0].object.position.x > 0 && intersects[0].object.position.z > 0){
			  					if (newZ > intersects[0].object.position.z) {
			  						if (range > 45){
			  							rotator = 40;
			  						} else if (range > 25){
			  							rotator = 30;
			  						} else {
			  							rotator = 20}
			  							positiveRotation = true;
			  					} else {if (range > 45){
			  						rotator = -40;
			  					} else if (range > 25){
			  						rotator = -30;
			  					} else  {
			  						rotator = -20}
			  						positiveRotation = false;
			  					}
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z <= 0){
			  				if ((newZ * -1) > intersects[0].object.position.z) {
			  						rotator = 40
			  						positiveRotation = true;
			  					} else {
			  						rotator = -40;
			  						positiveRotation = false;
			  					}
			  			}
			  				console.log("kvadrat 1");

			  	} else if (camera.position.x <= 0 && camera.position.z > 0){

						if (intersects[0].object.position.x > 0 && intersects[0].object.position.z > 0){
			  				if (range > 45){
			  					rotator = 40;
			  				} else if (range > 25) {
			  					rotator = 30;
			  				} else {
			  					rotator = 20}
			  					positiveRotation = true;
			  			} else if (intersects[0].object.position.x < 0 && intersects[0].object.position.z <= 0){
			  				if (range > 45){
			  					rotator = -40;
			  				} else if (range > 25){
			  					rotator = -30;
			  				} else {
			  					rotator = -20}
			  					positiveRotation = false;
			  			} else if (intersects[0].object.position.x > 0 && intersects[0].object.position.z <= 0){
			  					if (newX * -1 <= intersects[0].object.position.x) {
			  						rotator = 40
			  						positiveRotation = true;
			  					} else {
			  						if (range > 45){
			  							rotator = -40;
			  						} else if (range > 25){
			  							rotator = -30;
			  						} else {
			  							rotator = -20}
			  							positiveRotation = false;
			  						}
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z > 0){
			  				if (newX <= intersects[0].object.position.x) {
			  					 if (range > 25){
			  					 	rotator = 30
			  					 } else {
			  						rotator = 20
			  					   }
			  					   positiveRotation = true;
			  					} else {
			  						  if (range > 25) {
			  						 	rotator = -30
			  						} else {
			  							rotator = -20;
			  						}
			  						positiveRotation = false;
			  					}
			  			}
			  				console.log(intersects[0].object)
			  				console.log("kvadrat 2");

			  	} else if (camera.position.x <= 0 && camera.position.z <= 0){

			  			if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z > 0){
			  				if (range > 45){
			  					rotator = 40;
			  				} else if (range > 25){
			  					rotator = 30;
			  				} else {
			  					rotator = 20}
			  					positiveRotation = true;
			  			} else if (intersects[0].object.position.x > 0 && intersects[0].object.position.z <= 0){
			  				if (range > 45){
			  					rotator = -40;
			  				} else if (range > 25){
			  					rotator = -30;
			  				} else {
			  					rotator = -20}
			  					positiveRotation = false;
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z <= 0){
			  					if (newZ <= intersects[0].object.position.z) {
			  						if (range > 45){
			  							rotator = 40;
			  						} else if (range > 25){
			  							rotator = 30;
			  						} else {
			  							rotator = 20}
			  							positiveRotation = true;
			  					} else {if (range > 45){
			  						rotator = -40;
			  					} else if (range > 25){
			  						rotator = -30;
			  					} else {
			  						rotator = -20}
			  						positiveRotation = false;
			  					}
			  			} else if (intersects[0].object.position.x > 0 && intersects[0].object.position.z > 0){
			  				if ((newZ * -1) <= intersects[0].object.position.z) {
			  						rotator = 40;
			  						positiveRotation = true;
			  					} else {
			  						rotator = -40;
			  						positiveRotation = false;
			  					}
			  			}
			  			console.log("kvadrat 3");

			  	} else if (camera.position.x > 0 && camera.position.z <= 0){
			  			if (intersects[0].object.position.x > 0 && intersects[0].object.position.z > 0){
			  				if (range > 45){
			  					rotator = -40;
			  				} else if (range > 25){
			  					rotator = -30;
			  				} else {
			  					rotator = -20}
			  					positiveRotation = false;
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z <= 0){
			  				if (range > 45){
			  					rotator = 40;
			  				} else if (range > 25){
			  					rotator = 30;
			  				} else {
			  					rotator = 20}
			  					positiveRotation = true;
			  			} else if (intersects[0].object.position.x > 0 && intersects[0].object.position.z <= 0){
			  					if (newX <= intersects[0].object.position.x) {
			  						if (range > 25){
			  							rotator = -30;
			  						} else {
			  							rotator = -20
			  						}
			  						positiveRotation = false;
			  					} else {
			  						if (range > 45){
			  							rotator = 40;
			  						} else if (range > 25){
			  							rotator = 30;
			  						} else {
			  							rotator = 20}
			  							positiveRotation = true;
			  					  }
			  			} else if (intersects[0].object.position.x <= 0 && intersects[0].object.position.z > 0){
			  				if ((newZ * -1) <= intersects[0].object.position.z) {
			  						rotator = -40;
			  						positiveRotation = false;
			  					} else {
			  						rotator = 40;
			  						positiveRotation = true;
			  					}
			  					console.log(rotator);
			  			}
			  				console.log("kvadrat 4");

			  	}



			} else {


			}
					document.removeEventListener('click',onDocumentMouseDown,true);
					document.removeEventListener('mousemove', onDocumentMouseMove, false);
					orbitControls.enabled = false;
					mouse.x = 0.99;
					mouse.y = 0.99;


					appending();

					content();

					menuResize();


			}
		}


		function onDocumentMouseMove(event) {    



                var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
                vector = vector.unproject(camera);

                var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
                var intersects = raycaster.intersectObjects(scene.children);

                	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                if (intersects.length > 0) {


                    var points = [];
                    points.push(new THREE.Vector3(-30, 39.8, 30));
                    points.push(intersects[0].point);

                    var mat = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.6});
                }
        }


window.addEventListener('resize', menuResize, false);

function menuResize(){
	var size = ((window.innerHeight/6)-30);
	var infoSize = (window.innerWidth - 200);



		if (window.innerHeight > 500 && window.innerWidth > 960){
			$("#menu").css('width',200 + "px");
			$(".menuButton").css('height',size);
			$(".menuButton").css('width',size);
			$(".menuButton").css('display','block');
			$("#menu").css('display','block');
			$("#microMenu").css('display','none');
			$("#menu").css('top',20 + "px");
			$("#menu").css('height','calc(100% - 80px)');
			$(".menuButton").css('margin',"auto");
			$(".menuButton").css('margin-bottom',20 + "px");
			$(".menuButton").css('margin-right',"");
			$(".menuButton").css('margin-left',"");
			$("#menu").css('border-bottom-right-radius',20 + "px");
			$("#menu").css('border-top-right-radius',20 + "px");


		} else {
			if ($("#menu")[0].style.width != '100%'){
				$("#menu").css('width',100+"%");
				$("#menu").css('display','none');
				$(".menuButton").css('display','inline-block');
				$("#menu").css('top',0);
				$("#menu").css('height','calc(100% - 40px)');


				if ($("#menu")[0].style.left == '0px'){
					$("#microMenu").css('display','block');
				}

			} else {
				$(".menuButton").css('height',size * 2);
				$(".menuButton").css('width',size * 2);
				$(".menuButton").css('margin-bottom',30 +"px");
				$(".menuButton").css('margin-left',25 + "px");
				$(".menuButton").css('margin-right',5 + "px");
				$("#menu").css('border-bottom-right-radius',"");
				$("#menu").css('border-top-right-radius',"");
				
			}
		}

	

	$("#infoscreen").css('width',infoSize)
}

function appending(){
					$(".infoscreen").each(function(){$(this).remove()});

				if (clickObject == "sphere0"){
					nomer = 0;
					if ($("#infoscreen0")[0] == undefined){
						$("body").append('<div id="infoscreen0" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: red; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				if (clickObject == "sphere1"){
					nomer = 1;
					if ($("#infoscreen1")[0] == undefined){
						$("body").append('<div id="infoscreen1" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: orange; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				if (clickObject == "sphere2"){
					nomer = 2;
					if ($("#infoscreen2")[0] == undefined){
						$("body").append('<div id="infoscreen2" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: yellow; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				if (clickObject == "sphere3"){
					nomer = 3;
					if ($("#infoscreen3")[0] == undefined){
						$("body").append('<div id="infoscreen3" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: green; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				if (clickObject == "sphere4"){
					nomer = 4;
					if ($("#infoscreen4")[0] == undefined){
						$("body").append('<div id="infoscreen4" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: lightblue; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				if (clickObject == "sphere5"){
					nomer = 5;
					if ($("#infoscreen5")[0] == undefined){
						$("body").append('<div id="infoscreen5" class="infoscreen" style="position: absolute; left:100%; top:20px; right: 0px; height:calc(100% - 80px); padding:20px; background-color: blue; color: gold; opacity: 90%; border-bottom-left-radius: 20px; border-top-left-radius: 20px;"> INFO </div>');
					}
				}
				content();
				if ($("#menu")[0].style.left == "0px"){
					widthTween.start();
				}
}
				function content(){
					if ($("#microMenu")[0] == undefined){
						$("body").append('<div id="microMenu" onclick=$("#menu").css("display","inline-block"); style="left: -200px; cursor: pointer; position: absolute; top:0px;height:100px; width:100px; background-color: teal;"> open </div>');
					}

					if ($("#closeButton")[0] == undefined){
						$("#infoscreen0").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
					if ($("#closeButton")[0] == undefined){
						$("#infoscreen1").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
					if ($("#closeButton")[0] == undefined){
						$("#infoscreen2").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
					if ($("#closeButton")[0] == undefined){
						$("#infoscreen3").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
					if ($("#closeButton")[0] == undefined){
						$("#infoscreen4").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
					if ($("#closeButton")[0] == undefined){
						$("#infoscreen5").append('<button id="closeButton" onclick="closeInfo()"> Закрыть </button>');
					}
				}
					menuResize();