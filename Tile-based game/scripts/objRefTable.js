const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.Pin,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.TileMovement.Cnds.IsMovingDirection,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Behaviors.TileMovement.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar
	];
};
self.C3_JsPropNameTable = [
	{GrassTilemap: 0},
	{TileMovement: 0},
	{Player_Box: 0},
	{Direction: 0},
	{Pin: 0},
	{ScrollTo: 0},
	{Player_Mask: 0},
	{Solid: 0},
	{EdgeBarrier: 0},
	{Keyboard: 0},
	{StoneTilemap: 0},
	{WallTilemap: 0},
	{StructureTilemap: 0},
	{PlantsTilemap: 0},
	{PropsTilemap: 0},
	{Coin: 0},
	{Anchor: 0},
	{Text: 0},
	{CoinsLeft: 0}
];

self.InstanceType = {
	GrassTilemap: class extends self.ITilemapInstance {},
	Player_Box: class extends self.ISpriteInstance {},
	Player_Mask: class extends self.ISpriteInstance {},
	EdgeBarrier: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	StoneTilemap: class extends self.ITilemapInstance {},
	WallTilemap: class extends self.ITilemapInstance {},
	StructureTilemap: class extends self.ITilemapInstance {},
	PlantsTilemap: class extends self.ITilemapInstance {},
	PropsTilemap: class extends self.ITilemapInstance {},
	Coin: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}