/* eslint-env mocha */

const { summarize } = require('../index')
const { expect } = require('chai')

describe('summarize', function () {
  it('M-F,Sa,Su', function () {
    let i = summarize({
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
    })

    expect(i).to.deep.equal([ 'M-F 08-23', 'Sa 10-00', 'Su 10-23' ])
  })

  it('M-Th,Su, F-Sa', function () {
    let i = summarize({
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
    })

    expect(i).to.deep.equal([ 'M-Th,Su 11-22', 'F-Sa 11-23' ])
  })
})
