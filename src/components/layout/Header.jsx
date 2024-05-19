import React from "react"

export default function Header() {
  return (
    <header className="header">
      <img
        className="header-background-img"
        src="../../../public/assets/worldmap.png"
        alt="world map image header"
      />
      <div className="header-foreground">
        <img
          className="header-logo"
          src="../../../public/assets/parrot.png"
          alt="parrot"
        />
        <div>
          <h1 className="header-title">PollyGlot</h1>
          <h2 className="header-subtitle">Perfect Translation Every Time</h2>
        </div>
      </div>
    </header>
  )
}
