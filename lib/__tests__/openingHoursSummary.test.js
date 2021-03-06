/* eslint-env mocha */
const ohs = require('../index')
const { expect } = require('chai')

describe('summarize', function () {
  it('M-F,Sa,Su', function () {
    let hours = {
      'M(o)': 8,
      'M(c)': 23,
      'Tu(o)': 8,
      'Tu(c)': 23,
      'W(o)': 8,
      'W(c)': 23,
      'Th(o)': 8,
      'Th(c)': 23,
      'F(o)': 8,
      'F(c)': 23,
      'Sa(o)': 10,
      'Sa(c)': 0,
      'Su(o)': 10,
      'Su(c)': 23
    }
    expect(ohs.summarize(hours)).to.deep.equal([ 'M-F 08-23', 'Sa 10-00', 'Su 10-23' ])
    expect(ohs.earliest(hours)).to.equal(8)
  })

  it('M-Th,Su, F-Sa', function () {
    let hours = {
      'M(o)': 11,
      'M(c)': 22,
      'Tu(o)': 11,
      'Tu(c)': 22,
      'W(o)': 11,
      'W(c)': 22,
      'Th(o)': 11,
      'Th(c)': 22,
      'F(o)': 11,
      'F(c)': 23,
      'Sa(o)': 11,
      'Sa(c)': 23,
      'Su(o)': 11,
      'Su(c)': 22
    }

    expect(ohs.summarize(hours)).to.deep.equal([ 'M-Th,Su 11-22', 'F-Sa 11-23' ])
    expect(ohs.earliest(hours)).to.equal(11)
  })
  it('M-F,Sa,Su half-hour and strange opening hours', function () {
    let hours = {
      'M(o)': 6.5,
      'M(c)': 0,
      'Tu(o)': 6.5,
      'Tu(c)': 0,
      'W(o)': 7.5,
      'W(c)': 0,
      'Th(o)': 1.5,
      'Th(c)': 8,
      'F(o)': 0,
      'F(c)': 6
    }
    expect(ohs.summarize(hours)).to.deep.equal([ 'M-Tu 06:30-00', 'W 07:30-00', 'Th 01:30-08', 'F 00-06' ])
    expect(ohs.earliest(hours)).to.equal(1.5)
  })
})
