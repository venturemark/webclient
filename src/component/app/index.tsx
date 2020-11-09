import React from 'react'

import logo from 'asset/logo.svg'

import './index.css'
import * as update from 'component/update'

type Props = { }

export function Component(props: Props) {
  return (
    <div className="App">
      <header className="App-header">
        <update.Component />
      </header>
    </div>
  )
}
