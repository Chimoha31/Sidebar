import React from 'react'
import {SidebarData} from './SidebarData';

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {/* liにはicon, listtitle, linkの属性が含まれる。1つ1つのliに1つ1つ書いてくのは面倒なので、その属性をcomponentとして書き出していく→SidebarData.jsへ */}
        {SidebarData.map((value, key) => {
          return(
            <li key={key} className="row" onClick={() => {
              window.location.pathname = value.link
            }}>
              <div id="icon">{value.icon}</div>
              <div id="icon">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
