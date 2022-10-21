function renderScene() {

cameraDistance = Math.sqrt(Math.pow(camera.position.x,2) + Math.pow((camera.position.y),2) + Math.pow(camera.position.z,2));

if (cloudParticles[0] != undefined){
	cloudParticles[0].rotation.z += 0.0005;
}

if (cloudParticles[1] != undefined){
	cloudParticles[1].rotation.z += 0.0005;
}

if (cloudParticles[2] != undefined){
	cloudParticles[2].rotation.z -= 0.0005;
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
		//	mouseMarker = 1;

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
		//	mouseMarker = 0;

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
		

incrementator +=rotator;


for (j=0;j<scene.children.length;j++){
			if (scene.children[j].name.indexOf('sphere') >=0) {
				scene.children[j].rotation.x = camera.rotation.x;
				scene.children[j].rotation.y = camera.rotation.y;
				scene.children[j].rotation.z = camera.rotation.z;
					scene.children[j].position.set(30*Math.cos(j+0.002*incrementator),0,30*Math.sin(j+0.002*incrementator));
				if (scene.children[j].name == clickObject && (Math.abs(scene.children[j].position.x - newX)<20) && (Math.abs(scene.children[j].position.z - newZ) < 20)) {


				if (scene.children[j].name == clickObject && (Math.abs(scene.children[j].position.x - newX)<1) && (Math.abs(scene.children[j].position.z - newZ) < 1)){
					rotator = 0; 
				}

					if (tweenMarker == 1){


						if (nomer == 0){
							position0.x = sphereMassive[0].scale.x;
							position0.y = sphereMassive[0].scale.y;
							position0.z = sphereMassive[0].scale.z;
							tween0.start();
							tween0.chain(widthTween);
							widthTween.chain(menuTween);
						}

						if (nomer == 1){
							position10.x = sphereMassive[1].scale.x;
							position10.y = sphereMassive[1].scale.y;
							position10.z = sphereMassive[1].scale.z;
							tween10.start();
							tween10.chain(widthTween);
							widthTween.chain(menuTween);
						}
				
						if (nomer == 2){
							position20.x = sphereMassive[2].scale.x;
							position20.y = sphereMassive[2].scale.y;
							position20.z = sphereMassive[2].scale.z;
							tween20.start();
							tween20.chain(widthTween);
							widthTween.chain(menuTween);
						}
						if (nomer == 3){
							position30.x = sphereMassive[3].scale.x;
							position30.y = sphereMassive[3].scale.y;
							position30.z = sphereMassive[3].scale.z;
							tween30.start();
							tween30.chain(widthTween);
							widthTween.chain(menuTween);
						}
						if (nomer == 4){
							position40.x = sphereMassive[4].scale.x;
							position40.y = sphereMassive[4].scale.y;
							position40.z = sphereMassive[4].scale.z;
							tween40.start();
							tween40.chain(widthTween);
							widthTween.chain(menuTween);
						}
						if (nomer == 5){
							position50.x = sphereMassive[5].scale.x;
							position50.y = sphereMassive[5].scale.y;
							position50.z = sphereMassive[5].scale.z;
							tween50.start();
							tween50.chain(widthTween);
							widthTween.chain(menuTween);
						}

						tweenMarker = 0;


					}




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