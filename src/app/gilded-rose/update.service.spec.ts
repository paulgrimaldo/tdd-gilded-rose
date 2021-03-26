import { TestBed } from '@angular/core/testing'
import { Item } from './gilded-rose.types'

import { UpdateService } from './update.service'

describe('UpdateService', () => {
  let service: UpdateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UpdateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('Normal items', () => {
    it('when Q:10, expected Q:9', () => {
      const normalItem: Item = {
        type: 'normal',
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(9).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })

    it('when Q: 5, Q: 4', () => {
      const normalItem: Item = {
        type: 'normal',
        quality: 5,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(4).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })

    it('when Q: 0, Q: 0', () => {
      const normalItem: Item = {
        type: 'normal',
        quality: 0,
        sellIn: 0,
      }
      const result = service.update(normalItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
  })

  describe('Aged Brie', () => {
    it('when Q: 10, Q: 11', () => {
      const normalItem: Item = {
        type: 'agedBrie',
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(11).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })
  })
})
