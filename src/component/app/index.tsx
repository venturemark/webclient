import React from 'react'

import logo from 'asset/logo.svg'

import './index.css'
import Update from '../Update'

type Props = { }

export function Component(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <Update />
      </header>
    </div>
  )
}
