class TestScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'TestScene',
		});
	}

	public preload() {
		this.load.image('forest-back', '/assets/parallax-forest-back-trees.png');
		this.load.image('forest-front', '/assets/parallax-forest-front-trees.png');
		this.load.image('forest-middle', '/assets/parallax-forest-middle-trees.png');
		this.load.image('forest-lights', '/assets/parallax-forest-lights.png');
		this.load.spritesheet('fire', '/assets/CampFireFinished.png', { frameWidth: 64, frameHeight: 64 });
	}

	public create() {
		// Set up forest background
		const scale = 3;
		const background: Phaser.GameObjects.Sprite[] = [];
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-back'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-lights'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-middle'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-front'));
		// Set up campfire
		this.anims.create({
			key: 'campfire',
			frames: this.anims.generateFrameNumbers('fire', {}),
			frameRate: 3,
			repeat: -1,
		});
		const fire = this.add.sprite(600, 350, 'fire');
		fire.anims.play('campfire');
		background.push(fire);
		// Set up campfire shadow
		const fireShadow = this.add.sprite(600, 510, 'fire');
		fireShadow.setFlipY(true);
		fireShadow.setTint(0x000);
		fireShadow.anims.play('campfire');
		background.push(fireShadow);
		// Set up person
		// Set up phone
		// Scale sprites
		background.forEach((sprite) => sprite.setScale(scale, scale));
	}

	public update(time: number, delta: number) {
		// not empty
	}
}

export default TestScene;
