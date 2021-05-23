import { Mesh, SphereGeometry, MeshStandardMaterial, MathUtils } from 'three'

export default class Star extends Mesh {
    static geometry = new SphereGeometry(0.01, 24, 24)
    static material = new MeshStandardMaterial({
        color: 0xFFFFFF,
        emissive: 0xFFFFFF,
        emissiveIntensity: .25,
        flatShading: true
    })

    constructor() {
        super(Star.geometry, Star.material)
        this.pos = Array(3).fill().map(() => MathUtils.randFloatSpread(25))
    }

    draw(scene) {
        this.position.set(this.pos[0], this.pos[1], this.pos[2])
        scene.add(this)
    }
}