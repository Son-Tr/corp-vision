import './Team.scss'
import React from 'react'
import { team1, team2, team3, team4 } from '../../assets/img/img'

const listMenber = [
    {
        img: team1,
        name: "Amelia Jessica",
        role: "Leader"
    },
    {
        img: team2,
        name: "Elizabeth Tracy",
        role: "Photographer"
    },
    {
        img: team3,
        name: "Charlotte Ava",
        role: "Software Egineer"
    },
    {
        img: team4,
        name: "Emma Susan",
        role: "Designer"
    },
]

const Team = () => {
    return (
        <div className='team'>
            <div className="container">
                <h5 className="title-small">
                    Our Professionals
                </h5>
                <h2 className="title-big">
                    Meet the Team
                </h2>
                <div className="list-member">
                    {/* render list img  */}
                    {listMenber.map(({ img, name, role }, index) => {
                        return (<div className="member" key={index}>
                            <img src={img} alt={name + index} />
                            <p className="p-title">{name}</p>
                            <p className="p-content">{role}</p>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Team;