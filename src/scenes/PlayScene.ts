import * as path from 'path';

class TestScene extends Phaser.Scene {
	constructor() {
		super({
			key: 'TestScene',
		});
	}

	public preload() {
		this.load.image('forest-back', '/assets/parallax-forest-back-trees-tint.png');
		this.load.image('forest-front', '/assets/parallax-forest-front-trees-tint.png');
		this.load.image('forest-middle', '/assets/parallax-forest-middle-trees-tint.png');
		this.load.image('forest-lights', '/assets/parallax-forest-lights-tint.png');
		this.load.spritesheet('fire', '/assets/CampFireFinished.png', { frameWidth: 64, frameHeight: 64 });
		this.load.image('tent', '/assets/tent-tint.png');
		this.load.image('body', path.join(__dirname, '/assets/DeadBody.png'));
		this.load.image('phone', '/assets/G2-tint.png');
		this.load.image('phone-glow', '/assets/phone-glow.png');
	}

	public create() {
		// Set up forest background
		const scale = 3;
		const background: Phaser.GameObjects.Sprite[] = [];
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-back'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-lights'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-middle'));
		background.push(this.add.sprite((272 * scale) / 2, (160 * scale) / 2, 'forest-front'));
		// Set up campfire shadow
		this.anims.create({
			key: 'campfire',
			frames: this.anims.generateFrameNumbers('fire', {}),
			frameRate: 3,
			repeat: -1,
		});
		const fireShadow = this.add.sprite(700, 490, 'fire');
		fireShadow.setFlipY(true);
		fireShadow.setTint(0x000);
		fireShadow.anims.play('campfire');
		background.push(fireShadow);
		// Set up campfire
		const fire = this.add.sprite(700, 330, 'fire');
		fire.anims.play('campfire');
		background.push(fire);
		// Scale sprites
		background.forEach((sprite) => sprite.setScale(scale, scale));
		// Set up tent shadow
		const tentShadow = this.add.sprite(202, 505, 'tent');
		tentShadow.setScale(0.15, 0.15);
		tentShadow.setTint(0x000);
		tentShadow.setFlipY(true);
		// Set up tent
		const tent = this.add.sprite(200, 330, 'tent');
		tent.setScale(0.15, 0.15);
		tent.setRotation(-0.06);
		// Set up person
		const body = this.add.sprite(470, 450, 'body');
		body.setScale(0.1, 0.1);
		body.setFlipX(true);
		// Set up phone shadow
		const phoneShadow = this.add.sprite(515, 440, 'phone');
		phoneShadow.setTint(0x000);
		phoneShadow.setScale(0.55, 0.55);
		phoneShadow.setRotation(1);
		// Set up phone
		const phone = this.add.sprite(520, 440, 'phone');
		phone.setTint(0x9BA2B2);
		phone.setScale(0.5, 0.5);
		phone.setRotation(1);
		// Set up phone glow
		const glow = this.add.sprite(528, 453, 'phone-glow');
		glow.setOrigin(1, 0.5);
		glow.setScale(0.5, 0.5);
		glow.setRotation(1);
		// Set up glow animation
		this.glowTween(glow);
		// Set up text animation
		const messages = [
			`You're scaring me`,
			'Are you alright',
			'Are you still there',
			'Please say something',
			'I need to know where you are',
			'',
			'Just say something\nSay anything',
			`You're going to be okay\nI promise`,
			`Just tell me where you are`,
			`     Please`,
			'',
			`Wake up\nDon't go to sleep`,
			`Not now\nI love you\nDon't go`,
			`Stop it\nStop pretending`,
			`I'll make it better\nLet me help you`,
			`Talk to me\nSay something`,
			`I can't do this\nI need to hear you`,
			`Not this time\nIt can't be time`,
			'',
			`I can't hear you`,
			`Don't do this to me`,
			`I want to know you're\nstill there`,
			`I want to help you`,
			`Let me get help`,
			`Can you hear me`,
		];
		let index = 0;
		const text = this.add.text(400, 370, messages[index], { fontSize: '16px', fill: '#fff' });
		text.setAlpha(0);
		const tweenDuration = 1500;
		this.tweens.add({
			targets: [text],
			y: 360,
			alpha: 1,
			duration: tweenDuration,
			loopDelay: tweenDuration * 4,
			loop: -1,
		});
		this.tweens.add({
			targets: [text],
			y: 350,
			alpha: 0,
			duration: tweenDuration,
			delay: tweenDuration * 3,
			loopDelay: tweenDuration * 4,
			loop: -1,
			onLoop: () => {
				const temp = Math.floor(Math.random() * (messages.length));
				index = (temp === index) ? index + 1 : temp;
				text.setText(messages[index % messages.length]);
			},
		});
	}

	public update(time: number, delta: number) {
		// not empty any more
	}

	private glowTween(glow: any) {
		this.tweens.add({
			targets: [glow],
			alpha: 0.5,
			duration: (i, total, target) => (Math.random() * 100),
			delay: Math.random() * 2000,
			loops: 1,
			onComplete: () => {
				glow.alpha = 1;
				this.glowTween(glow);
			},
		});
	}
}

export default TestScene;
