export type Item = {
  readonly type: 'normal' | 'agedBrie'
  readonly quality: number
  readonly sellIn: number
}

export interface UpdateStrategy {
  update(item: Item): Item
}
