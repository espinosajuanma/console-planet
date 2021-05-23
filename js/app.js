import '/css/style.css'

import { Scene, PerspectiveCamera, WebGLRenderer, PointLight } from 'three'
import Planet from './Planet'
import Star from './Star'
import Console from './Console'

const terminal = new Console('console', 'input', 'submit')
terminal.listen()

const scene = new Scene()
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new WebGLRenderer({
    canvas: document.getElementById('bg'),
})
renderer.setSize(window.innerWidth, window.innerHeight)

// Planet
let planet = new Planet()
planet.draw(scene)

// Stars
for (let i = 0; i <= 2500; i++) {
    let star = new Star()
    star.draw(scene)
}

// Light
const pointLight = new PointLight(0xFFFFFF)
pointLight.position.set(-20, 0, 20)
scene.add(pointLight)

const pointLight2 = new PointLight(0x0000FF)
pointLight2.position.set(-20, -50, 20)
pointLight2.intensity = .3
scene.add(pointLight2)

function setup() {
    camera.position.z = 20
}

function animation() {
    let frame = requestAnimationFrame(animation)
    planet.update()
    terminal.update(frame)

    renderer.render(scene, camera)
}

setup()
animation()