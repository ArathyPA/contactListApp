import React from 'react'

const StatisticsCard = ({userList}) => {
  return (
    <div className='statiCard'>
    <h3>Total Contacts  :{userList.length}</h3>
    <h3>Business Contacts :{userList.filter((user)=>user.contactType.toLowerCase()=='business').length}</h3>
    <h3>Personal Contacts :{userList.filter((user)=>user.contactType.toLowerCase()=='personal').length}</h3>
    <h3>Male Contacts :{userList.filter((user)=>user.gender.toLowerCase()=='male').length}</h3>
    <h3>Female Contacts :{userList.filter((user)=>user.gender.toLowerCase()=='female').length}</h3>
  </div>
  )
}

export default StatisticsCard