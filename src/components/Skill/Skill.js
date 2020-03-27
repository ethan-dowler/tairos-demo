import React from 'react'
import * as SkillTypes from '../../data/SkillTypes'

const Skill = ({ type, onPlay }) => {
  const data = SkillTypes[type]
  if (data === undefined) return <div>Unknown Skill Type: {type}</div>

  return (
    <div className="Skill">
      <button className="Skill-play" name={type} onClick={onPlay}>
        Play
      </button>
      <div className="Skill-title">{data.title}</div>
      <div className="Skill-body">
        {data.lines.map(line => (
          <div key={Math.random()} className="Skill-bodyLine">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
