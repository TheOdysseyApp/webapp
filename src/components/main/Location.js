/* eslint-disable react/prop-types */
import React from 'react'
import { Card } from '@aws-amplify/ui-react'

function Location ({ column }) {
  return (
        <Card columnStart={column}>
            <h1>Location {column}</h1>
        </Card>
  )
}

export default Location
