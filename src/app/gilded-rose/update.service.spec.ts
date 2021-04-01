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

    it('when Q: 7, expected Q: 6', () => {
      const normalItem: Item = {
        type: 'normal',
        quality: 7,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(6).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })

    it('when Q: 0, expected Q: 0', () => {
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
    it('when Q: 5, Q: 6', () => {
      const normalItem: Item = {
        type: 'agedBrie',
        quality: 5,
        sellIn: 4,
      }
      const result = service.update(normalItem)
      expect(6).toEqual(result.quality)
      expect(3).toEqual(result.sellIn)
    })
    it('when Q: 0, Q: 1', () => {
      const normalItem: Item = {
        type: 'agedBrie',
        quality: 0,
        sellIn: 1,
      }
      const result = service.update(normalItem)
      expect(1).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
  })


  
  describe('Req legendary', () => {
    it('when Q:10, expected Q:10', () => {
      const normalItem: Item = {
        type: 'legendary',
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(10).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })
    it('when Q:7, expected Q:7', () => {
      const normalItem: Item = {
        type: 'legendary',
        quality: 7,
        sellIn: 3,
      }
      const result = service.update(normalItem)
      expect(7).toEqual(result.quality)
      expect(2).toEqual(result.sellIn)
    })
    it('when Q:3, expected Q:3', () => {
      const normalItem: Item = {
        type: 'legendary',
        quality: 3,
        sellIn: 1,
      }
      const result = service.update(normalItem)
      expect(3).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
  })

  describe('Grupo 5 Sergio Ortiz Requerimiento 6 y 7', () => {
    it('Old Req 6 - when Q:10 S:2, then Q: 0 S:0', () => {
      const normalItem: Item = {
        type: 'Old',
        quality: 10,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
    it('Old Req 6 - when Q:10 S:1, then Q: 10 S:1', () => {
      const normalItem: Item = {
        type: 'Old',
        quality: 10,
        sellIn: 1,
      }
      const result = service.update(normalItem)
      expect(10).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })

    it('Conjured - when Q:10 S:3, then Q: 8  S:2', () => {
      const normalItem: Item = {
        type: 'Conjured',
        quality: 10,
        sellIn: 3,
      }
      const result = service.update(normalItem)
      expect(8).toEqual(result.quality)
      expect(2).toEqual(result.sellIn)
    })
    it('Conjured - when Q:1 S:2, then Q:0 S:1', () => {
      const normalItem: Item = {
        type: 'Conjured',
        quality: 1,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(0).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })
  })
})
