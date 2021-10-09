import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "../../node_modules/axios/index";

class Homepage extends Component {
    constructor(props){
        super(props)

        this.state = {
            redirect : false,
            path : '',
            datas : []
        }

        this.datas = []
    }

    setRedirect = (path) => {
        this.setState({
            redirect : true,
            path : path
        })
    }
    redirect = () =>{
        if(this.state.redirect){
            return (
                <Redirect to={this.state.path} />
            )
        }
    }

    componentDidMount = async() => {
        var hitUser = await axios.get('https://gorest.co.in/public/v1/users')
        this.setState({
            datas : hitUser.data.data 
        })
        // this.datas = 
        // console.log(this.datas)
    }
    getData = () => {
        var datas = this.state.datas
        
        var elemList = []
        datas.forEach((value,index) => {
            elemList.push(
                    <React.Fragment>
                        <div className="col-md-3 mt-3">
                            <div className="card h-100">
                                <img className="card-img-top h-100" src="/img/download.jpg" />
                                <div className="badan-kartu card-body text-center">
                                    <h5>{value.name}</h5>
                                    <p>This is description.</p>

                                    <h4 className="text-hijau">Rp. 30.000</h4>
                                </div>
                                <div className="card-footer kaki-kartu bg-white p-0">
                                    <button className="btn btn-block btn-outline-danger" onClick={() => this.deleteData(value.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
            )
            
        })

        return elemList
    }

    deleteData = async(id) => {
        var destroy = await axios.delete('https://gorest.co.in/public/v1/users/'+ id, {
            headers: {
                Authorization: 'Bearer ba1c445891dcc1763a53419dd096bb78fab03d42cd6596637911f94d5871b8af'
            }
        })

        return destroy
    }

    updateData = async(id) => {
        var data = {
            "id": 1942,
            "name": "API Monitoring:dtg669",
            "email": "apimonitoringdtg669@synthetic.com",
            "gender": "male",
            "status": "active"
        }

        var update = await axios.put('https://gorest.co.in/public/v1/users/'+ id, data,{
            headers: {
                Authorization: 'Bearer ba1c445891dcc1763a53419dd096bb78fab03d42cd6596637911f94d5871b8af'
            }
        })

        return update
    }
    render(){
        return (
            <React.Fragment>
            {this.redirect()}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card h-100 kartu-tambah" onClick={() => this.setRedirect('add')}>
                            <div className="card-body d-flex align-items-center">
                                <img className="img-fluid" src="/img/plus.png" />
                            </div>
                        </div>
                    </div>
                    {this.getData()}
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Homepage