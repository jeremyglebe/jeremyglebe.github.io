class MonsterScene extends Phaser.Scene {
    constructor() {
        super("Monster");
    }

    init(monster) {
        this.level = monster.level;
        this.role = monster.role.toLowerCase();
        this.rank = monster.rank.toLowerCase();
        // AC calculation
        console.log(this.level, this.role, this.rank)
        this.ac = LEVELS[this.level].ac + ROLES[this.role].ac + RANKS[this.rank].ac;
        // Hit Points calculation (solos are weird)
        if (this.rank != 'solo')
            this.hp = Math.ceil(LEVELS[this.level].hp * ROLES[this.role].hp * RANKS[this.rank].hp);
        else
            this.hp = Math.ceil(LEVELS[this.level].hp * ROLES[this.role].hp) + RANKS[this.rank].hp;
        // Attack bonus calculation
        this.ab = LEVELS[this.level].ab + ROLES[this.role].ab + RANKS[this.rank].ab;
        // Damage calculation
        this.dg = LEVELS[this.level].dg * ROLES[this.role].ab * RANKS[this.rank].dg;
        // Ability/Save DC calculation
        this.dc = LEVELS[this.level].dc;
        this.dc.h += RANKS[this.rank].dc;
        this.dc.l += RANKS[this.rank].dc;
        // Ability score modifiers
        this.am = JSON.stringify(LEVELS[this.level].am);
        // Speeed (assuming human base)
        this.sp = ROLES[this.role].sp;
        // Saving throws
        this.st = LEVELS[this.level].st;
        this.st.h += RANKS[this.rank].st;
        this.st.m += RANKS[this.rank].st;
        this.st.l += RANKS[this.rank].st;
    }

    create() {
        this.add.text(50, 50, `
Level: ${this.level}
Role: ${this.role}
Rank: ${this.rank}

Armor Class: ${this.ac}
Hit Points: ${this.hp}
Attack Bonus: ${this.ab}

Damage: ${this.dg}
[${Math.floor(this.dg / 2.5)}D4 + ${Math.floor(this.dg % 2.5)}]
[${Math.floor(this.dg / 3.5)}D6 + ${Math.floor(this.dg % 3.5)}]
[${Math.floor(this.dg / 4.5)}D8 + ${Math.floor(this.dg % 4.5)}]
[${Math.floor(this.dg / 5.5)}D10 + ${Math.floor(this.dg % 5.5)}]
[${Math.floor(this.dg / 6.5)}D12 + ${Math.floor(this.dg % 6.5)}]

Ability/Spell DC: ${this.dc.h} (High); ${this.dc.l} (Low)


Ability Score Modifiers: ${this.am} (High to Low)


Speed: ${this.sp} (Human, walking base value)


Saving Throws:  ${this.st.h} (High); ${this.st.m} (Medium); ${this.st.l} (Low)
`,
            {
                fontSize: '32px',
                wordWrap: {
                    width: 620,
                    useAdvancedWrap: true
                }
            });
    }
}

const RANKS = {
    minion: {
        ac: -2,
        ab: -2,
        hp: 0.2,
        dg: 0.75,
        st: -2,
        dc: -2,
        sk: -2
    },
    standard: {
        ac: 0,
        ab: 0,
        hp: 1.0,
        dg: 1.0,
        st: 0,
        dc: 0,
        sk: 0
    },
    elite: {
        ac: 2,
        ab: 2,
        hp: 2.0,
        dg: 1.1,
        st: 2,
        dc: 2,
        sk: 2
    },
    solo: {
        ac: 2,
        ab: 2,
        hp: ' x number of players',
        dg: 1.2,
        st: 2,
        dc: 2,
        sk: 4
    }
}

const ROLES = {
    controller: {
        // Armor class modification
        ac: -2,
        // Saving throw modification
        st: -1,
        // Hit point multiplier
        hp: 1.0,
        // Attack bonus modification
        ab: 0,
        // Damage multiplier
        dg: 1.0,
        // Speed assuming human race
        sp: 30,
        // Proficient in P, I, S?
    },
    defender: {
        ac: 2,
        st: 1,
        hp: 1.0,
        ab: 0,
        dg: 1.0,
        sp: 20,
    },
    lurker: {
        ac: -4,
        st: -2,
        hp: 0.5,
        ab: 2,
        dg: 1.5,
        sp: 30,
    },
    scout: {
        ac: -2,
        st: -1,
        hp: 1.0,
        ab: 0,
        dg: 0.75,
        sp: 40,
    },
    sniper: {
        ac: 0,
        st: 0,
        hp: 0.75,
        ab: 0,
        dg: 1.25,
        sp: 30,
    },
    striker: {
        ac: -4,
        st: -2,
        hp: 1.25,
        ab: 2,
        dg: 1.25,
        sp: 30,
    },
    supporter: {
        ac: -2,
        st: -1,
        hp: 0.75,
        ab: 0,
        dg: 0.75,
        sp: 30,
    }
}

const LEVELS = {
    2: {
        // Armor class
        ac: 14,
        // Hit points
        hp: 30,
        // Attack bonus
        ab: 3,
        // Damage
        dg: 4,
        // Spell/Ability save DCs
        dc: {
            // High
            h: 11,
            // Low
            l: 8
        },
        // Monster's trainable skills
        sk: {
            // Perception
            p: 1,
            // Initiative
            i: 1,
            // Stealth
            s: 1
        },
        // Proficiency bonus
        pb: 2,
        // Saving throws
        st: {
            // High
            h: 5,
            // Medium
            m: 3,
            // Low
            l: 0
        },
        // Ability modifiers (in order best to worst)
        am: [3, 2, 1, 1, 0, -1]
    }
}
