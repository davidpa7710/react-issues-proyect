import React from 'react'

class IssuesList extends React.Component{
    render(){
        return(
            <div className='list-container'>
                <ul className='list-issues'>
                    <li className="element-list">{this.props.url}</li>
                </ul>
            </div>
        )
    }
}

export default IssuesList