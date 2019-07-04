import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      return <div>
        <h2>{node.alternative_id} {node.Title}</h2>
        <h3>Definition</h3> <p>{node.Definition}</p>
        <h3>Supplemental Guidance</h3> <p>{node.Supplemental_Guidance}</p>
      </div> 
    })
  )
}


