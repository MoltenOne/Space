var sphereGeometry = new THREE.SphereGeometry(4,20,20);


for (i=0;i<6;i++) {
	scene.add(new THREE.Mesh(sphereGeometry,new THREE.MeshBasicMaterial({color: 0x7777ff})));
	var instance = scene.children[scene.children.length - 1];
	instance.position.set(200*Math.cos(i),0,200*Math.sin(i));
	instance.name = "sphere"+i;
	instance.castShadow = true;
	instance.material.transparent = true;

}

		var sphereMassive = [];
		for (j=0;j<scene.children.length;j++){
			if (scene.children[j].name.indexOf('sphere') >=0) {sphereMassive.push(scene.children[j])}
		}

sphereMassive[0].material.map = THREE.ImageUtils.loadTexture("assets/S1.png");
sphereMassive[1].material.map = THREE.ImageUtils.loadTexture("assets/S2.png");
sphereMassive[2].material.map = THREE.ImageUtils.loadTexture("assets/S3.png");
sphereMassive[3].material.map = THREE.ImageUtils.loadTexture("assets/S4.png");
sphereMassive[4].material.map = THREE.ImageUtils.loadTexture("assets/S5.png");
sphereMassive[5].material.map = THREE.ImageUtils.loadTexture("assets/S6.png");


    var skyGeometry = new THREE.CubeGeometry( 2000, 2000, 2000 );
	var imageURLs = ["bacground_space/nebula-xneg.png",
				     "bacground_space/nebula-xpos.png",
					 "bacground_space/nebula-yneg.png",
					 "bacground_space/nebula-ypos.png",
					 "bacground_space/nebula-zneg.png",
					 "bacground_space/nebula-zpos.png"];
	var textureCube = THREE.ImageUtils.loadTextureCube( imageURLs );
	var shader = THREE.ShaderLib[ "cube" ];
	shader.uniforms[ "tCube" ].value = textureCube;
	var skyMaterial = new THREE.ShaderMaterial( {
		fragmentShader: shader.fragmentShader,
		vertexShader: shader.vertexShader,
		uniforms: shader.uniforms,
		depthWrite: false,
		side: THREE.BackSide
	} );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	scene.add( skyBox );

let cloudParticles = [];

var preloadOpacity = { x : 100};
var maxOpacity = {x: 0};

var opacityTween = new TWEEN.Tween(preloadOpacity).to(maxOpacity, 1000);
opacityTween.easing(TWEEN.Easing.Sinusoidal.InOut);
opacityTween.onUpdate(function(){
	$("#preload").css("opacity",preloadOpacity.x + "%");
});

	let loader = new THREE.TextureLoader();
      loader.load("bacground_space/smoke-1.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(1000,1000);
        var smoke2 = THREE.ImageUtils.loadTexture( "bacground_space/smoke-2.png" );
        var smoke3 = THREE.ImageUtils.loadTexture( "bacground_space/smoke-3.png" );
        cloudMaterial = new THREE.MeshLambertMaterial({
          map: texture,
          transparent: true,
          side: THREE.FrontSide         
        });
        cloudMaterial2 = new THREE.MeshLambertMaterial({
          map: smoke2,
          transparent: true,
          side: THREE.FrontSide          
        });
        cloudMaterial3 = new THREE.MeshLambertMaterial({
          map: smoke3,
          transparent: true,
          side: THREE.FrontSide        
        });
        for(let p=0; p<1; p++) {
          let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
          let cloud2 = new THREE.Mesh(cloudGeo,cloudMaterial2);
          let cloud3 = new THREE.Mesh(cloudGeo,cloudMaterial3);
          cloud.position.set(
            720,
            0,
            -720);
          cloud2.position.set(
            730,
            0,
            -730);
          cloud3.position.set(
            740,
            0,
            -740);
          cloud3.rotation.z = 500;

          cloudParticles.push(cloud);
          cloudParticles.push(cloud2);
          cloudParticles.push(cloud3);
          cloud.material.color.g = 2;
          cloud.material.color.r = 10;
          cloud.material.color.b = 10;
          cloud2.material.color.r = Math.random()*10 +5;
          cloud3.material.color.r = 40;
          cloud3.material.color.g = 40;
          cloud3.material.color.b = 40;
          scene.add(cloud);
          scene.add(cloud2);
          scene.add(cloud3);

      cloudParticles.forEach(p => {
       p.lookAt(scene.position)
      });
cloudParticles[0].rotation.z = 300;
cloudParticles[2].rotateZ(90);
        }

        setTimeout(function() {
        opacityTween.start();
						}, 2500);

        setTimeout(function() {
        rotator = 40;
						}, 2500);

        setTimeout(function() {
        $("#preload").remove()
						}, 3500);

        

})
var percent;
$('body').append('<div id="souzLoading" style="position: absolute; z-index: 5; top: 0px; right:0px; background-color: lime; height: 100px; width: 200px; color: black"></div>');
$('#souzLoading').append('<div id="percent" style="margin-top: 40px;margin-left: 40px;"</div>')

var objLoader = new THREE.OBJLoader();

// load a resource
objLoader.load(
	'js/ISS_Remodeling.obj',

	function ( object ) {

		scene.add( object );
		souz = object;
		souz.scale.set(2,2,2);
		souz.rotateX(2.43);

var spotLight = new THREE.SpotLight( 0xffffff );      // свет
spotLight.position.copy(camera.position);
scene.add( spotLight );
spotLight.shadowMapHeight = 3000;
spotLight.shadowMapWidth = 3000;
spotLight.castShadow = true;

	},
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
		$("#percent")[0].innerHTML = ("Station loading: "+ Math.round(( xhr.loaded / xhr.total * 100 ))+ "%");
		if (( xhr.loaded / xhr.total * 100 ) == 100){
			
			
				setTimeout(function(){
					$("#souzLoading").remove();
				},3000)
		}

	},
	function ( error ) {

		console.log( 'An error happened' );

	}
);