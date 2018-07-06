import 'phaser';

import TestScene from './scenes/PlayScene';

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 816,
  height: 480,
  resolution: 1,
  backgroundColor: "#000",
  scene: [
    TestScene,
  ],
};

new Phaser.Game(config);
