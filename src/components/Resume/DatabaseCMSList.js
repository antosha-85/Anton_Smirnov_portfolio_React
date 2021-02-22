import React from 'react'
import Bar from '../Bar'

const DatabaseCMSList = ({databasesCMS}) => {
    return (
        <div className="col-lg-6 resume-languages">
        <h5 className="resume-language__heading">Databases and CMS</h5>
        <div className="resume-language__body mt-3">
          {databasesCMS.map((database) => (
            <Bar key={database.name} value={database} />
          ))}
        </div>
      </div>
    )
}

export default DatabaseCMSList
