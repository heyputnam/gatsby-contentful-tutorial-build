import React from 'react'
import Layout from './src/globalStyle'


export const wrapRootElement = ({ element }) => (
  <>
 
    <Layout>{element}</Layout>
  </>
)