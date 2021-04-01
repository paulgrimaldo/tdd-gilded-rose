export type Item = {
  readonly type: 'normal' | 'agedBrie' | 'Old' | 'Conjured' | 'legendary' | 'backstagePasses'
  readonly quality: number
  readonly sellIn: number
}

export interface UpdateStrategy {
  update(item: Item): Item
}
