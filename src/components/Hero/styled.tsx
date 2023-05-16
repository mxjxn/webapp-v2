import React from 'react'
import { Grid, GridItem, TextProps } from '@chakra-ui/react'

const MainGrid: React.FC<TextProps> = ({ children }) => (
  <Grid
    gridTemplateColumns={`repeat(8, 10fr)`}
    gridTemplateRows={`repeat(4, 1fr)`}
    maxHeight="20vh"
    gap={'1em'}
  >
    {children}
  </Grid>
)

const TopRow: React.FC<TextProps> = ({ children }) => (
  <GridItem
    pt={14}
    pb={7}
    colSpan={8}
    textAlign={{
      base: 'center',
    }}
  >
    {children}
  </GridItem>
)

export { MainGrid, TopRow }
