import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class ProductDisplay extends Component{
    render(){
        return(
            <div className="mainBackground sellWrapper">
                <div className="appbar">
                    <a href="" className="logo">Books<span id="watchPart">Watch</span></a>
                </div>
               
                <div className="centerTotal">
                    <div className="imageHolder">
                        <img id="textbook" src={require("../img/text1.jpg")} />
                   </div>
               
                    <div className="detailCard">
                        <div id="textName">Differential Equations</div>
                        <div id="author">BruceWayn (Author Name)</div>
                        <div id="amount"><span id="priceTag">Price</span>: Rs 200 </div>
                        <div id="productDetails">
                            Cash on Exchange <span id="available">Available<br /></span>.
                        </div>
                        <div id="details">
                            Buyers are required to contact the sellers 
                            and set up a meeting place for themselves
                        </div>
                        <button type="submit" id="sellerInfo">Seller Info</button>
                    </div>

                    <div id="sellerInfoCard">
                        <h2>Seller Info</h2>
                        <ul>
                            <li>Name: <span>Captain America</span></li>
                            <li>Semester: <span>4</span></li>
                            <li>Branch: <span>Computer Science</span></li>
                            <li>Mobile No: <span>9876543210</span></li>
                            <li>Is on Whatsapp: <span>Yes</span></li>
                            <li>Email: <span>avengers@gmail.com</span></li>
                            <button type="submit" >Done</button>
                        </ul>
                    </div>
               </div>
               <footer>
                    @Copyright Original From Model Engineering College
                </footer>
            </div>
        )
    }
}

export default ProductDisplay;