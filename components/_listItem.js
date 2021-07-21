import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ListItem_Container = styled.li.attrs(props => ({ className: props.className}))`
  height: 95%;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
`
const Title = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`
const TagLine = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`

const Image = styled.img`
  height: 7rem;
`
export default function ListItem({ itemData }) {

    const { name, tagline, image_url } = itemData
    return <ListItem_Container className=" row col-6 col-md-4 col-offset-2">

        <div className="col-4">
            <Image className="beerImg" src={image_url} alt="" />    
        </div>

        <div className="title-tagline-container col-8">
            <Title>{name}</Title>
            <TagLine>{tagline}</TagLine>
        </div>

    </ListItem_Container>
}
