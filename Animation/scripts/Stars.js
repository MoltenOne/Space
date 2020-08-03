var starTexture = THREE.ImageUtils.loadTexture("lensflare0.png");
	starTexture.wrapS = THREE.RepeatWrapping;
	starTexture.wrapT = THREE.RepeatWrapping;
	starTexture.repeat.set(2, 1);


       var sphereGeom = new THREE.SphereGeometry(1, 32, 16);
        var sphereGeom2 = new THREE.SphereGeometry(0.1, 32, 16);

            var customMaterial = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			"c":   { type: "f", value: 0.1 },
			"p":   { type: "f", value: 2.9 },
			glowColor: { type: "c", value: new THREE.Color(0xffffff) },
			viewVector: { type: "v3", value: camera.position }
		},
		vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		side: THREE.FrontSide,
		blending: THREE.AdditiveBlending,
		transparent: true
	}   );

	var customMaterial2 = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			"c":   { type: "f", value: 0 },
			"p":   { type: "f", value: 4 },
			glowColor: { type: "c", value: new THREE.Color(0xffffff) },
			viewVector: { type: "v3", value: camera.position }
		},
		vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		side: THREE.FrontSide,
		blending: THREE.AdditiveBlending,
		transparent: false
	}   );

for (var l=0;l<200;l++){
	scene.add(new THREE.Mesh( sphereGeom.clone(), customMaterial.clone() ));
    instance = scene.children[scene.children.length - 1];
    instance.position.set((Math.random()-0.5)*400,(Math.random()-0.5)*400,(Math.random()-0.5)*400);
	instance.scale.multiplyScalar(1);
	instance.name = "star"+l;
	instance.renderOrder = 1;

	scene.add(new THREE.Mesh( sphereGeom2.clone(), customMaterial2.clone() ));
    instance = scene.children[scene.children.length - 1];
    instance.position.x = scene.children[scene.children.length - 2].position.x;
    instance.position.y = scene.children[scene.children.length - 2].position.y;
    instance.position.z = scene.children[scene.children.length - 2].position.z;
	instance.scale.multiplyScalar(1);
	instance.name = "inner_star "+l;
	
}