THREEx.WindowResize(renderer, camera);




//tablichka.geometry.verticesNeedUpdate = true;
//tablichka.geometry.uvsNeedUpdate = true;


/*var tablichka1 = new THREE.Mesh(new THREE.PlaneGeometry(40,20),new THREE.MeshBasicMaterial({
	color: 0xff8844,
	scale : {x: 0,y: 0, z: 0}
}));

tablichka1.material.transparent = true;
tablichka1.material.opacity = 0.4;

var tablichka2 = new THREE.Mesh(new THREE.PlaneGeometry(40,20),new THREE.MeshBasicMaterial({
	color: 0xffff00,
	scale : {x: 0,y: 0, z: 0}
}));

tablichka2.material.transparent = true;
tablichka2.material.opacity = 0.4;

var tablichka3 = new THREE.Mesh(new THREE.PlaneGeometry(40,20),new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	scale : {x: 0,y: 0, z: 0}
}));

tablichka3.material.transparent = true;
tablichka3.material.opacity = 0.4;

var tablichka4 = new THREE.Mesh(new THREE.PlaneGeometry(40,20),new THREE.MeshBasicMaterial({
	color: 0x0088ff,
	scale : {x: 0,y: 0, z: 0}
}));

tablichka4.material.transparent = true;
tablichka4.material.opacity = 0.4;

var tablichka5 = new THREE.Mesh(new THREE.PlaneGeometry(40,20),new THREE.MeshBasicMaterial({
	color: 0x0000ff,
	scale : {x: 0,y: 0, z: 0}
}));

tablichka5.material.transparent = true;
tablichka5.material.opacity = 0.4;*/


 

var orbitControls = new THREE.OrbitControls(camera);
 //       orbitControls.autoRotate = true;
        var clock = new THREE.Clock();

        orbitControls.minDistance = 70;
		orbitControls.maxDistance = 300;

for (i=0;i<6;i++) {
	scene.add(new THREE.Mesh(sphereGeometry,new THREE.MeshLambertMaterial({color: 0x7777ff})));
	var instance = scene.children[scene.children.length - 1];
	instance.position.set(20*Math.cos(i),0,20*Math.sin(i));
	instance.name = "sphere"+i;
	instance.castShadow = true;

}

		var sphereMassive = [];
		for (j=0;j<scene.children.length;j++){
			if (scene.children[j].name.indexOf('sphere') >=0) {sphereMassive.push(scene.children[j])}
		}
//	sphereMassive.push(sphere);

var karta = THREE.ImageUtils.loadTexture("doski-fon-tekstury-derevo.jpg");


/*var background = new THREE.Mesh( new THREE.SphereGeometry( 500, 60, 40 ), new THREE.MeshBasicMaterial( { 
    map: THREE.ImageUtils.loadTexture("pan7.jpg"),
    side: THREE.BackSide
 }));
scene.add(background);*/

//scene.children[4].material.color.g = 1;
//scene.children[6].material.color.r = 1;







var rotator = 0;
var newX;
var newZ;
var clickObject;
var projector = new THREE.Projector();
var tube;
var scaler = 0;
var scaleMarker = 0;
var scaleInc = 0;
var mouseMarker = 0;

//var keyboard = new THREEx.KeyboardState();
var mouse = {x:0, y:0}, INTERSECTED;

var video, videoImage, videoImageContext, videoTexture;

var nomer;

					function closeInfo(){
						widthTweenBack.start();
						if (nomer == 0){
							widthTweenBack.chain(tweenBack0);
						};
						if (nomer == 1){
							widthTweenBack.chain(tweenBack10);
						};
						if (nomer == 2){
							widthTweenBack.chain(tweenBack20);
						};
						if (nomer == 3){
							widthTweenBack.chain(tweenBack30);
						};
						if (nomer == 4){
							widthTweenBack.chain(tweenBack40);
						};
						if (nomer == 5){
							widthTweenBack.chain(tweenBack50);
						};

						setTimeout(function(){
							document.addEventListener('click',onDocumentMouseDown,true);
							document.addEventListener('mousemove', onDocumentMouseMove, false);
							orbitControls.enabled = true;
						},2000)
					}

document.addEventListener('click', onDocumentMouseDown, true);
document.addEventListener('mousemove', onDocumentMouseMove, false);










var incrementator = 0;

var axes = new THREE.AxisHelper( 50 );

scene.add(sphere);
sphere.visible = false;

setTimeout('scene.add(tablichka)',600);
/*setTimeout('scene.add(tablichka1)',600);
setTimeout('scene.add(tablichka2)',600);
setTimeout('scene.add(tablichka3)',600);
setTimeout('scene.add(tablichka4)',600);
setTimeout('scene.add(tablichka5)',600);*/



    

      tablichka.position.set(2000,2000,2000);
/*       tablichka1.position.set(2000,2000,2000);
        tablichka2.position.set(2000,2000,2000);
         tablichka3.position.set(2000,2000,2000);
          tablichka4.position.set(2000,2000,2000);
           tablichka5.position.set(2000,2000,2000);*/

      camera.position.set(-75,19,63);

var animate1;
var cameraDistance;

function renderScene() {

cameraDistance = Math.sqrt(Math.pow(camera.position.x,2) + Math.pow((camera.position.y),2) + Math.pow(camera.position.z,2));

if (cloudParticles[0] != undefined){
	cloudParticles[0].rotation.z += 0.00010;
}

if (cloudParticles[1] != undefined){
	cloudParticles[1].rotation.z += 0.00010;
}

if (cloudParticles[2] != undefined){
	cloudParticles[2].rotation.z -= 0.00010;
}

cloudParticles.forEach(p => {
//	6.200000000000003, _y: -1.2, _z: 4.200000000000001
//0.041009291400039706, _y: -1.2, _z: 0.013327497729961361
 //       p.rotation.z = 0.0133;
 //       p.rotation.x = 0.041;
  //      p.rotation.x += 0.005;


 //       p.rotation.z += 0.002;
 //       p.rotation.y =1.2;
//p.rotation.x = camera.rotation.x;
// p.rotation.y = camera.rotation.y;
// p.rotation.z = camera.rotation.z;
//		p.rotation.y -=0.002;
//		p.rotation.z = camera.rotation.z;
      });

TWEEN.update();

var delta = clock.getDelta();
            orbitControls.update(delta);

			if(rotator > 0) {
				rotator -=0.5
			} else if (rotator <0) {
				rotator +=0.5
			}

			
var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = ray.intersectObjects(sphereMassive);

			if ( intersects.length > 0 )
	{
		if ( intersects[ 0 ].object != INTERSECTED ) 
		{
			if ( INTERSECTED ) 
				INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			console.log(intersects[0].object.name);
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
			INTERSECTED.material.color.setHex( 0xffff00 );
			mouseMarker = 1;

			if (intersects[0].object.name == "sphere0"){
				tweenBack.stop;
				tween.start();

/*				if (scaleMarker == 0 && scaler == 0){
					tablichka.position.x = INTERSECTED.position.x;
					tablichka.position.y = INTERSECTED.position.y;
					tablichka.position.z = INTERSECTED.position.z;
				}*/
			}

			if (intersects[0].object.name == "sphere1"){
				tweenBack1.stop;
				tween1.start();
/*				if (scaleMarker == 0 && scaler == 0){
					tablichka1.position.x = INTERSECTED.position.x;
					tablichka1.position.y = INTERSECTED.position.y;
					tablichka1.position.z = INTERSECTED.position.z;
				}*/
			}

			if (intersects[0].object.name == "sphere2"){
				tweenBack2.stop;
				tween2.start();
/*				if (scaleMarker == 0 && scaler == 0){
					tablichka2.position.x = INTERSECTED.position.x;
					tablichka2.position.y = INTERSECTED.position.y;
					tablichka2.position.z = INTERSECTED.position.z;
				}*/
			}

			if (intersects[0].object.name == "sphere3"){
				tweenBack3.stop;
				tween3.start();
/*				if (scaleMarker == 0 && scaler == 0){
					tablichka3.position.x = INTERSECTED.position.x;
					tablichka3.position.y = INTERSECTED.position.y;
					tablichka3.position.z = INTERSECTED.position.z;
				}	*/
			}

			if (intersects[0].object.name == "sphere4"){
				tweenBack4.stop;
				tween4.start();
/*				if (scaleMarker == 0 && scaler == 0){
					tablichka4.position.x = INTERSECTED.position.x;
					tablichka4.position.y = INTERSECTED.position.y;
					tablichka4.position.z = INTERSECTED.position.z;
				}*/
			}

			if (intersects[0].object.name == "sphere5"){
				tweenBack5.stop;
				tween5.start();
/*				if (scaleMarker == 0 && scaler == 0){
					tablichka5.position.x = INTERSECTED.position.x;
					tablichka5.position.y = INTERSECTED.position.y;
					tablichka5.position.z = INTERSECTED.position.z;
				}	*/
			}		

		}
	} 
	else 
	{
		
		if ( INTERSECTED ){ 
			INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			console.log('rr');
			mouseMarker = 0;

					if (sphereMassive[0].scale.x != 1){
						tween.stop();
						tweenBack.start();
					}
	
					if (sphereMassive[1].scale.x != 1){
						tween1.stop();
						tweenBack1.start();
					}
	
					if (sphereMassive[2].scale.x != 1){
						tween2.stop();
						tweenBack2.start();
					}

					if (sphereMassive[3].scale.x != 1){
						tween3.stop();
						tweenBack3.start();
					}
	
					if (sphereMassive[4].scale.x != 1){
						tween4.stop();
						tweenBack4.start();
					}	

					if (sphereMassive[5].scale.x != 1){
						tween5.stop();
						tweenBack5.start();
					}
		}
		INTERSECTED = null;
	}
		
if (scaleMarker == 0){
incrementator +=rotator;
}

/*if (scaleMarker == 1 || scaler != 0){
	orbitControls.enabled = false;

}

if (scaleMarker == 0 && scaler == 0){
				orbitControls.enabled = true;
				document.addEventListener('mousemove', onDocumentMouseMove, false);
		if (mouseMarker == 0){
		}
}*/

tablichka.rotation.x = camera.rotation.x;
tablichka.rotation.y = camera.rotation.y;
tablichka.rotation.z = camera.rotation.z;

/*tablichka1.rotation.x = camera.rotation.x;
tablichka1.rotation.y = camera.rotation.y;
tablichka1.rotation.z = camera.rotation.z;

tablichka2.rotation.x = camera.rotation.x;
tablichka2.rotation.y = camera.rotation.y;
tablichka2.rotation.z = camera.rotation.z;

tablichka3.rotation.x = camera.rotation.x;
tablichka3.rotation.y = camera.rotation.y;
tablichka3.rotation.z = camera.rotation.z;

tablichka4.rotation.x = camera.rotation.x;
tablichka4.rotation.y = camera.rotation.y;
tablichka4.rotation.z = camera.rotation.z;

tablichka5.rotation.x = camera.rotation.x;
tablichka5.rotation.y = camera.rotation.y;
tablichka5.rotation.z = camera.rotation.z;*/

/*if (scaler != 0){
	if(scaleMarker == 0){
		scaleInc += scaler;
		scaler -=0.0012;
		if(scaleInc >= 1){
			scaleMarker = 1;
			scaler = 0;


			document.addEventListener('click', onDocumentMouseDown, true);
		}
	} else {
		scaleInc +=scaler;
		scaler -= 0.0012;
			if (scaleInc <= 0){
				scaleMarker = 0;
				scaler = 0;
				document.addEventListener('click', onDocumentMouseDown, true);
			}
	}
}*/

for (j=0;j<scene.children.length;j++){
			if (scene.children[j].name.indexOf('sphere') >=0) {
				scene.children[j].rotation.x = camera.rotation.x;
				scene.children[j].rotation.y = camera.rotation.y;
				scene.children[j].rotation.z = camera.rotation.z;
					scene.children[j].position.set(30*Math.cos(j+0.002*incrementator),0,30*Math.sin(j+0.002*incrementator));
				if (scene.children[j].name == clickObject && (Math.abs(scene.children[j].position.x - newX)<1) && (Math.abs(scene.children[j].position.z - newZ) < 1)) {
					rotator = 0; 
		//			console.log(clickObject);
		//			 scene.children[j].scale.set(1+scaleInc,1+scaleInc,1+scaleInc);
				}

			}
				if (scene.children[j].name.indexOf('star') >=0) {
					scene.children[j].material.uniforms.viewVector.value = new THREE.Vector3().subVectors( camera.position, scene.children[j].position );

					if(Math.pow(Math.abs(camera.position.x)-Math.abs(scene.children[j].position.x),2)+Math.pow(Math.abs(camera.position.y)-Math.abs(scene.children[j].position.y),2)+Math.pow(Math.abs(camera.position.y)-Math.abs(scene.children[j].position.y),2)> 300) {
							scene.children[j].visible = true
					} else {
						scene.children[j].visible = false
					}

				}

		}


 animate1 = requestAnimationFrame(renderScene);
renderer.render(scene, camera);
}

$("#WebGL-output").append(renderer.domElement);
renderScene()

//cancelAnimationFrame(animate1)
//renderScene()
