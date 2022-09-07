import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search"/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt=""/>
        <div className="userChatInfo">
          <span>Brandon</span>
        </div>
      </div>
    </div>
  )
}

export default Search