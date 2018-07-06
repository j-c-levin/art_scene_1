class TestScene extends Phaser.Scene {	
	constructor() {
		super({
			key: 'TestScene'
		});
	}

	preload() {
		this.load.image('forest-back', '/assets/sprites/parallax-forest-back-trees.png');
		this.load.image('forest-front', '/assets/sprites/parallax-forest-front-trees.png');
	}

	create() {
		const forestBack = this.add.sprite(0, 0, 'forest-back');
		forestBack.setScale(1, 1);
		const forestFront = this.add.sprite(0, 0, 'forest-front');
		forestFront.setScale(1, 1);
	}

	update(time: number, delta: number) {
	}
}

export default TestScene;