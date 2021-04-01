import { Injectable } from '@angular/core';
import { Item, UpdateStrategy } from './gilded-rose.types';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor() {
  }

  update(item: Item): Item {
    const strategy =
      (item.type === 'normal') ? new NormalUpdateStrategy() :
        (item.type === 'agedBrie') ? new AgedBrieUpdateStrategy() :
          (item.type === 'Old') ? new OldUpdateStrategy() :
            (item.type === 'legendary') ? new LegendaryStrategy() :
              (item.type === 'Conjured') ? new CjdUpdateStrategy() :
             new BackstagePassesUpdateStrategy() ;    // BackstagePasses
    return strategy.update(item);
  }
}

class CjdUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality - 2;
    const quality = targetQuality < 0 ? 0 : targetQuality;
    const targetSellIn = item.sellIn - 1;
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn;
    return {
      type: 'Conjured',
      quality,
      sellIn
    };
  }
}

class NormalUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality - 1;
    const quality = targetQuality < 0 ? 0 : targetQuality;
    const targetSellIn = item.sellIn - 1;
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn;
    return {
      type: 'normal',
      quality,
      sellIn
    };
  }
}

class AgedBrieUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    let quality = item.quality;
    if (quality < 50){
      quality  = quality + 1;
    }
    const targetSllIn = item.sellIn - 1;
    const sellIn  = targetSllIn < 0 ? 0 : targetSllIn;
    return {
      type: 'agedBrie',
      quality,
      sellIn
    };
  }
}

class BackstagePassesUpdateStrategy implements UpdateStrategy{
  update(item: Item): Item {
    let quality = item.quality;
    if (this.isAfterTheConcert(item)){
      quality = 0;
    }else if (item.quality < 50) {
      quality = quality + this.qualityIncreaseBy(item.sellIn);
    }
    const targetSellIn = item.sellIn - 1;
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn;
    return {
      type: 'backstagePasses',
      quality,
      sellIn
    };
  }

  qualityIncreaseBy(remainingDaysBeforeTheConcert: number): number {
    if (remainingDaysBeforeTheConcert <= 5){
      return 3;
    }else if (remainingDaysBeforeTheConcert <= 10) {
      return 2;
    }else {
      return 1;
    }
  }

  isAfterTheConcert(item: Item): boolean{
    return item.sellIn <= 0;
  }
}

class OldUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality;
    const targetSellIn = item.sellIn;
    const quality = targetSellIn > 1 ? 0 : targetQuality;
    const sellIn = targetSellIn > 1 ? 0 : targetSellIn;
    return {
      type: 'Old',
      quality,
      sellIn
    };
  }
}


class LegendaryStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const quality = item.quality;
    const targetSellIn = item.sellIn - 1;
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn;
    return {
      type: 'legendary',
      quality,
      sellIn
    };
  }
}
