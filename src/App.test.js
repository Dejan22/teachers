import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import BatchesContainer from './batches/BatchesContainer'



describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('contains the BatchesContainer', () => {
    expect(app).to.have.descendants(BatchesContainer)
  })
})
