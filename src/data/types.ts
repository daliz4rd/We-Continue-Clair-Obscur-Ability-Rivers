export type Status = "Burn" | "Mark" | "Freeze" | "Stun" | "Charm" |"Inverted" | "Blight" | "Berserk" | "Cursed" | "Bound" | "Exhausted" | "Dizzy" | "Silence" | "Rage";

export type Stance = "Stanceless" | "Offensive" | "Defensive" | "Virtuose"

export type Effect =
| {kind: "status"; status: Status; stacks?: number}
| {kind: "stance"; stance: Stance}
| {kind: "AP"; min: number; max: number}
