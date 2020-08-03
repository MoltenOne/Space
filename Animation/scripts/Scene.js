var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
var renderer = new THREE.WebGLRenderer({
	alpha: true,
	antialias: false
});
renderer.setClearColor(0xaaaaff, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

THREEx.WindowResize(renderer, camera);                  // изменение размеров экрана при изменении разрешения


camera.position.set(-75,19,63);
camera.lookAt(scene.position);

var orbitControls = new THREE.OrbitControls(camera);   // Управление камерой мышью и стрелками
 //       orbitControls.autoRotate = true;
        var clock = new THREE.Clock();

        orbitControls.minDistance = 70;
		orbitControls.maxDistance = 300;

/*var spotLight = new THREE.SpotLight( 0xffffff );      // свет
spotLight.position.copy(camera.position);
scene.add( spotLight );
spotLight.shadowMapHeight = 3000;
spotLight.shadowMapWidth = 3000;
spotLight.castShadow = true;*/

//var ambientLight = new THREE.AmbientLight(0x0c0c0c);  // свет
//scene.add(ambientLight);





var rotator = 0; // Переменная, необходимая для перемещения объектов вокруг центра сцены
var newX;  // координаты X точки на окружности вокруг центра, которая находится ближе всего к камере, где должен остановиться объект
var newZ;  // координаты Z точки на окружности вокруг центра, которая находится ближе всего к камере, где должен остановиться объект
var clickObject;  // Имя нажатого объекта
var projector = new THREE.Projector(); // Вектор соединяющий камеру и объект нажатия мыши

//var keyboard = new THREEx.KeyboardState();
var mouse = {x:0, y:0}, INTERSECTED;    // 2D координаты мыши на экране

//var video, videoImage, videoImageContext, videoTexture;

var nomer;            // Номер объекта
var incrementator = 0; // Переменная, постоянно добавляющая к себе значение rotator определяет позицию объектов

var axes = new THREE.AxisHelper( 50 );  // Линии координат (добавляются вручную для наглядности и ориентации в пространстве)

var animate1;
var cameraDistance;  // Расстояние от камеры до центра сцены

var tweenMarker = 0;  // Индикатор при нажатии на объект меняется на 1 и запускается анимация увеличения объекта

var positiveRotation = true; // Индикатор направления вращения 
var Souz;