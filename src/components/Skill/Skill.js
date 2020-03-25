import React from 'react'
import * as SkillTypes from '../../data/SkillTypes'

const Skill = ({ type }) => {
  const data = SkillTypes[type]
  if (data === undefined) return <div>Unknown Skill Type: {type}</div>

  return (
    <div className="Skill">
      <div className="Skill-title">{data.title}</div>
      <div className="Skill-body">{data.body}</div>
    </div>
  )
}

export default Skill
