import React from 'react'
import { Box } from '@chakra-ui/react'
import { css } from '@emotion/react'
/*
#m-connection button {
  width: 100%;
  height: 50px;
  color: var(--manifold-text--color--body);
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 10px;
  cursor: pointer;
  line-height: 1em;
  border-width: var(--manifold-border--width);
  border-style: var(--manifold-border--style);
  border-color: var(--manifold-border--color);
  border-radius: var(--manifold-border--radius);
  background: var(--manifold-element--color--background);

*/

export default function ManifoldConnect() {

  const overrideCSS = css`
    #m-connection {
      position: static !important;
      top: auto !important;
      right: auto !important;
      bottom: auto !important;
      left: auto !important;
      margin: 1px 0px !important;
      padding: 1px 0px !important;
      width: auto !important;
    }
    button {
      height: 35px !important;
      width: 150px !important;
      borderradius: 0px !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .m-connection-disconnect-wallet {
      background: transparent !important;
    }
  `

  return (
    <Box css={overrideCSS} className="ManifoldConnect" position="relative">
      <div
        data-widget="m-connect"
        data-grant-type="token"
        data-app-name="MXJXN.xyz"
        data-network="1"
      ></div>
    </Box>
  )

}
