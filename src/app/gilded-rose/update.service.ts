import { Injectable } from '@angular/core'
import { Item, UpdateStrategy } from './gilded-rose.types'

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor() {}

  update(item: Item): Item {
    const strategy =
      item.type === 'normal'
        ? new NormalUpdateStrategy()
        : new AgedBrieUpdateStrategy()
            
    return strategy.update(item)
  }
}

class NormalUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality - 1
    const quality = targetQuality < 0 ? 0 : targetQuality
    const targetSellIn = item.sellIn - 1
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn
    return {
      type: 'normal',
      quality,
      sellIn,
    }
  }
}

class AgedBrieUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      type: 'normal',
      quality: item.quality + 1,
      sellIn: item.sellIn - 1,
    }
  }
}

class OldUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality - 1
    const quality = targetQuality < 0 ? 0 : targetQuality
    const targetSellIn = item.sellIn - 1
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn
    return {
      type: 'Old',
      quality,
      sellIn,
    }
  }
}