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
		// Set up forest background
		const scale = 3;
		const background: Phaser.GameObjects.Sprite[] = [];
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-back'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-middle'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-front'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-lights'));
		background.forEach((sprite) => sprite.setScale(scale, scale));
		// Set up campfire
		// Set up person
		// Set up phone
	}

	public update(time: number, delta: number) {
		// not empty
	}
}

export default TestScene;
