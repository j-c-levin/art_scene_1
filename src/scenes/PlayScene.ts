class TestScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'TestScene',
		});
	}

	public preload() {
		this.load.image('forest-back', '/assets/sprites/parallax-forest-back-trees.png');
		this.load.image('forest-front', '/assets/sprites/parallax-forest-front-trees.png');
		this.load.image('forest-middle', '/assets/sprites/parallax-forest-middle-trees.png');
		this.load.image('forest-lights', '/assets/sprites/parallax-forest-lights.png');
	}

	public create() {
		const scale = 3;
		const forestBack = this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-back');
		forestBack.setScale(scale, scale);
		const forestMiddle = this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-middle');
		forestMiddle.setScale(scale, scale);
		const forestFront = this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-front');
		forestFront.setScale(scale, scale);
		const forestLights = this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-lights');
		forestLights.setScale(scale, scale);
	}

	public update(time: number, delta: number) {
		// not empty
	}
}

export default TestScene;
