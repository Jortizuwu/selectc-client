import React from 'react'
import Insights from '../../../../shared/components/Insights2'

export const Coincidence = ({ careers, title = '', title2 = '', careers2 }) => {
  return (
    <React.Fragment>
      <div className="w-full">
        {careers.labels.length > 0 && (
          <Insights
            careers={careers}
            careers2={careers2}
            title={title}
            title2={title2}
          />
        )}
      </div>
    </React.Fragment>
  )
}
