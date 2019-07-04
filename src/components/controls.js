import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
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
  `}
    render={data => (
      <p>{JSON.stringify(data)}</p>
    )}
  />
)


