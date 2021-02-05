import React from 'react'

const Header = ({total}) => {
    return (
        <header>
             <h1>Income Tracker</h1>
             <div className="total-income">
                 ${total}
             </div>
        </header>
    )
}

export default Header
