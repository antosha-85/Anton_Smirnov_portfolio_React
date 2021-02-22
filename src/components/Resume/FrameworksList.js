import React from 'react'
import Bar from '../Bar'

const FrameworksList = ({frameworks}) => {
    return (
        <div className="col-lg-6 resume-languages">
        <h5 className="resume-language__heading">Frameworks and Environment</h5>
        <div className="resume-language__body mt-3">
          {frameworks.map((framework) => (
            <Bar key={framework.name} value={framework} />
          ))}
        </div>
      </div>
    )
}

export default FrameworksList
