import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ListItem from './_listItem'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function List({ data }) {
  if (!data) return <p>No Beers Found!</p>
  const listItems = data.map((itemData, idx) => <ListItem key={`listItem-${idx}`} itemData={itemData} />)
  return <div className="container">
    <ul className="list-container row">
      {listItems}
    </ul>
  </div>
}
