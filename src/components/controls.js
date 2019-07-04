import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Paragraph } from "grommet"

export default () => {
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
      const node = edge.node;
      const tags = [];
      if (node.PALL === true){ 
        tags.push("PALL")
      }
      if (node.PBMM === true){ 
        tags.push("PBMM")
      }
      if (node.ULL === true){
        tags.push("ULL")
      }
      return <Box key={node.id}>
        <Heading level="2">{node.alternative_id} {node.Title}</Heading>
        <ul>
          {tags.map(tag => { 
            return <li>{tag}</li>
          })}
        </ul>
        <Heading level="3">Definition</Heading> <Paragraph>{node.Definition}</Paragraph>
        <Heading level="3">Supplemental Guidance</Heading> <Paragraph>{node.Supplemental_Guidance}</Paragraph>
      </Box> 
    })
  )
}


