import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"
import Tags from "./tags"

export default (props) => {
  const data = useStaticQuery(graphql`
  query ControlsQuery {
    allInternalControls {
      edges {
        node {
          id
          Class
          Definition
          Extract_of_all_organization_defined_parameters__standardized_format_
          General_Tailoring_and_Implementation_Guidance_Notes
          Name
          PALL
          PBMM
          Supplemental_Guidance
          Title
          ULL
          alternative_id
        }
      }
    }
  }
  `)
  
  return (
    data.allInternalControls.edges.map(edge => {
      const node = edge.node
      console.log(`${node.alternative_id}: 
        PBMM: ${node.PBMM}
        PALL: ${node.PALL}
        ULL: ${node.ULL} `)
      return <Box key={node.id}>
        <Heading level="2">{node.alternative_id} {node.Title}</Heading>
        <Tags pbmm={node.PBMM} pall={node.PALL} ull={node.ULL} />
        <Heading level="3">Definition</Heading> <Paragraph>{node.Definition}</Paragraph>
        <Heading level="3">Supplemental Guidance</Heading> <Paragraph>{node.Supplemental_Guidance}</Paragraph>
      </Box>
    })
  )
}


