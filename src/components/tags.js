
import React from "react"
import { Box } from "grommet"

export default (props) => {
  if (props.pbmm === false && props.pall === false && props.ull === false){
    return null
  }

  return <Box>
    <ul>
      {props.ull && <li>ULL</li>}
      {props.pall && <li>PALL</li>}
      {props.pbmm && <li>PBMM</li>}
    </ul>
  </Box>
}


