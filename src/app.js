import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'
import { parties } from './fixtures'



render(<Container parties={parties}/>, document.getElementById('container'))
