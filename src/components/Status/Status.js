import React from 'react'

const Status = ({ label, stackable = false }) => (
  <div className="Status">
    <label>
      {stackable ? <input type="number" /> : <input type="checkbox" />}
      <span className="Status-label">{label}</span>
    </label>
  </div>
)

export default Status
