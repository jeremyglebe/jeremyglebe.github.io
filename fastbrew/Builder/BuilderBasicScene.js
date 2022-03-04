class BuilderBasicScene extends Phaser.Scene {
    constructor() {
        super("BuilderBasic")
    }

    create() {
        this.role = "Striker";
        this.rank = "Standard";
        this.createLevelInput();
        this.createRoleButtons();
        this.createRankButtons();
        this.add.text(360, 1200, "GO!", {
            fontSize: '48px'
        }).setOrigin(0.5).setInteractive().on('pointerdown', () => {
            this.scene.start('Monster', {
                level: this.level,
                role: this.role,
                rank: this.rank
            });
        });
    }

    update() {
        this.level = parseInt(this.levelInput.node.value);
    }

    createLevelInput() {
        this.levelText = this.add.text(360, 100, "Enter Monster Level", {
            fontSize: '48px'
        }).setOrigin(0.5);
        this.levelInput = this.add.dom(360, 220, 'input', {
            width: '100px',
            height: '100px',
            fontSize: '48px',
            textAlign: 'center'
        }).setOrigin(0.5);
        this.levelInput.node.type = "number";
        this.levelInput.node.value = "2";
    }

    createRoleButtons() {
        const roleY = 400;
        this.roleText = this.add.text(360, roleY, "Role\n" + this.role, {
            fontSize: '48px',
            align: 'center'
        }).setOrigin(0.5);
        this.controllerBtn = this.add.circle(55, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Controller";
            this.roleText.text = "Role\nController";
        });
        this.defenderBtn = this.add.circle(150, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Defender";
            this.roleText.text = "Role\nDefender";
        });
        this.lurkerBtn = this.add.circle(245, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Lurker";
            this.roleText.text = "Role\nLurker";
        });
        this.scoutBtn = this.add.circle(340, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Scout";
            this.roleText.text = "Role\nScout";
        });
        this.sniperBtn = this.add.circle(435, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Sniper";
            this.roleText.text = "Role\nSniper";
        });
        this.strikerBtn = this.add.circle(530, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Striker";
            this.roleText.text = "Role\nStriker";
        });
        this.supporterBtn = this.add.circle(630, roleY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.role = "Supporter";
            this.roleText.text = "Role\nSupporter";
        });
    }

    createRankButtons() {
        const rankY = 650;
        this.rankText = this.add.text(360, rankY, "Rank\n" + this.rank, {
            fontSize: '48px',
            align: 'center'
        }).setOrigin(0.5);
        this.minionBtn = this.add.circle(55, rankY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.rank = "Minion";
            this.rankText.text = "Rank\nMinion";
        });
        this.standardBtn = this.add.circle(150, rankY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.rank = "Standard";
            this.rankText.text = "Rank\nStandard";
        });
        this.eliteBtn = this.add.circle(245, rankY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.rank = "Elite";
            this.rankText.text = "Rank\nElite";
        });
        this.soloBtn = this.add.circle(340, rankY + 100, 40, 0xFFFFFF).setInteractive().on('pointerdown', () => {
            this.rank = "Solo";
            this.rankText.text = "Rank\nSolo";
        });
    }
}