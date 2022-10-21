THREEx.WindowResize(renderer, camera);



 

var orbitControls = new THREE.OrbitControls(camera);
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

			}

			if (intersects[0].object.name == "sphere1"){
				tweenBack1.stop;
				tween1.start();
			}

			if (intersects[0].object.name == "sphere2"){
				tweenBack2.stop;
				tween2.start();
			}

			if (intersects[0].object.name == "sphere3"){
				tweenBack3.stop;
				tween3.start();
			}

			if (intersects[0].object.name == "sphere4"){
				tweenBack4.stop;
				tween4.start();
			}

			if (intersects[0].object.name == "sphere5"){
				tweenBack5.stop;
				tween5.start();
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


for (j=0;j<scene.children.length;j++){
			if (scene.children[j].name.indexOf('sphere') >=0) {
				scene.children[j].rotation.x = camera.rotation.x;
				scene.children[j].rotation.y = camera.rotation.y;
				scene.children[j].rotation.z = camera.rotation.z;
					scene.children[j].position.set(30*Math.cos(j+0.002*incrementator),0,30*Math.sin(j+0.002*incrementator));
				if (scene.children[j].name == clickObject && (Math.abs(scene.children[j].position.x - newX)<1) && (Math.abs(scene.children[j].position.z - newZ) < 1)) {
					rotator = 0; 
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

