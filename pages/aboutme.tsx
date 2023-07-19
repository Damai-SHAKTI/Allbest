import MyCard from '@/components/AboutMe/MyCard'
import React from 'react'

const aboutme = () => {
  return (
    <div style={{ width: "100%", height: "100vh - 76px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "300px" }}>
        <MyCard />
      </div>
    </div>
  )
}

export default aboutme