import React, { Component } from 'react'

class UserData extends Component {
    render() {

        return (
            <>
            <div class="divbody">
                <h4>ImgUrl : {this.props.ImgUrl}</h4>  
                <img src={this.props.ImgUrl} alt="" ></img>
                <h4>title: {this.props.title}</h4>
                <h4>desription :{this.props.desription}</h4>
                <h4>keyword :{this.props.keyword}</h4>
                <h4>horns :{this.props.horns}</h4>

                </div>
            </>
        )
    }
}

export default UserData
