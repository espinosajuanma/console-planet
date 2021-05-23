import { Mesh, SphereGeometry, TextureLoader, MeshStandardMaterial } from 'three'
import mapImg from '/img/2k_eris_fictional.jpg'

export default class Planet extends Mesh {
    static geometry = new SphereGeometry(10, 32, 32)
    static texture = new TextureLoader().load(mapImg)
    static material = new MeshStandardMaterial({
        bumpMap: Planet.texture,
        bumpScale: .35,
        map: Planet.texture,
    })
    
    constructor() {
        super(Planet.geometry, Planet.material)
    }

    draw(scene) {
        this.position.z = -2.5
        scene.add(this)
    }

    update() {
        this.rotation.y += 0.001
    }
}