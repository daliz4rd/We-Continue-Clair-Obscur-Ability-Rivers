export type Status = "Burn" | "Mark" | "Freeze" | "Stun" | "Charm" |"Inverted" | "Blight" | "Berserk" | "Cursed" | "Bound" | "Exhausted" | "Dizzy" | "Silence" | "Rage";

export type Stance = "Stanceless" | "Offensive" | "Defensive" | "Virtuose"

export type Character = "Maelle" | "Lune" | "Sciel"

export type Stain = "Ice" | "Earth" | "Fire" | "Lightning" | "Light"

export type Debuff = "Powerless" | "Defenceless" | "Slow";

export type Buff = "Powerful" | "Rush" | "Shell" | "Regen"

export type Skill = {
name: string;
character: Character;
effects: Effect[];
prerequisite?: string;
}

export type Effect =
| {kind: "status"; status: Status; stacks?: number}
| {kind: "stance"; stance: Stance}
| {kind: "AP"; min: number; max: number}
| {kind: "stain"; stain: Stain; numStains: number}
| {kind: "buff"; buff: Buff}
| {kind: "debuff"; debuff: Debuff}

export type Condition =
|{kind: "status"; status: Status}
|{kind: "stance"; stance: Stance}
|{kind: "stain"; stain: Stain; numStains:number}
|{kind: "debuff"; debuff: Debuff}
