import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "../../node_modules/axios/index";

class Add extends Component {
    constructor(props){
        super(props)

        this.state = {
            redirect : false,
            path : '/'
        }
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
    submitData = async() => {
        var data = {
            "name": "Sam Samuel",
            "email": "apimonitoringdtg669@synthetic.com",
            "gender": "male",
            "status": "active"
        }
        // var inputs = document.getElementsByTagName('input')
        // for (var i = 0; i < inputs.length; i++) {
        //         data[inputs[i].getAttribute('name')] = inputs[i].value
        // }
        // console.log(data)
        // return false
        let result = await axios.post('https://gorest.co.in/public/v1/users',data, {
            headers: {
                Authorization: 'Bearer ba1c445891dcc1763a53419dd096bb78fab03d42cd6596637911f94d5871b8af'
            }
        })
        
        this.setRedirect('/')
    }
    render(){
        return (
            <React.Fragment>
            {this.redirect()}
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <h5>FORM TAMBAH</h5>
                        <form id="form-tambah" className="row container mt-5">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label for="nama-produk">Nama Produk</label>
                                    <input type="text" name="productName" className="form-control" id="nama-produk"/>
                                </div>
                                <div className="form-group">
                                    <label for="harga">Harga</label>
                                    <input type="number" name="price" className="form-control" id="harga"/>
                                </div>
                                <div className="form-group">
                                    <label for="deskripsi">Deskripsi</label>
                                    <input type="text" name="description" className="form-control" id="deskripsi"/>
                                </div>
                                <div className="form-group">
                                    <label for="gambar">Gambar</label>
                                    <input type="file" className="form-control-file" id="gambar" name="gambar"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="button" className="btn btn-primary" onClick={() => this.submitData()}>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Add