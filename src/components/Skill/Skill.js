import React from 'react'
import * as SkillTypes from '../../data/SkillTypes'

const Skill = ({ type, onPlay }) => {
  const data = SkillTypes[type]
  if (data === undefined) return <div>Unknown Skill Type: {type}</div>

  let onClick = () => onPlay(type)

  return (
    <div className="Skill">
      <button className="Skill-play" name={type} onClick={onClick}>
        Play
      </button>
      <div className="Skill-title">{data.title}</div>
      <div className="Skill-body">
        {data.lines.map(line => (
          <div className="Skill-bodyLine" key={Math.random()}>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
