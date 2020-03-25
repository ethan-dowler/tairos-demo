import React from 'react'
import Skill from '../Skill'

const Hand = ({ skillTypes }) => {
  return (
    <div className="Hand">
      {skillTypes.map(type => (
        <Skill type={type} />
      ))}
    </div>
  )
}

export default Hand
