import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import './App.css';

function Header(props){
    return<h1 className="shophead">shopping cart</h1>
}

function Footer(props){
return<h2>{props.total}</h2>
}
class Product extends Component{
        constructor(props){
        super(props);
        this.state={
            showMe:false,
            cart:[],
          list:[{name:'iphone',quantity:'1',price:'30000'},
          {name:'nokia',quantity:'1',price:'10000'},
          {name:'sumsung',quantity:'1',price:'20000'},
          {name:'motrola',quantity:'1',price:'18000'},
          {name:'opoo',quantity:'1',price:'25000'}],
          price:props.price,

         }    }
        Total=()=>{
            this.setState({
                showMe:true
            })    
        }
        addData=(Item)=>{
        const {cart}=this.state
        cart.push(Item);
        this.setState({cart:cart})
         }
       onDelete = (index) => {
       const {cart}=this.state
       cart.splice(index,1);
       this.setState({ cart});
       };
       
       inCreament = (Item) => {
        this.setState({price:Item.quantity++ });
        this.setState({price:Item.price * Item.quantity });
        
      }
      Decreament = (Item) => {
        this.setState({price:Item.quantity-- });
         if (Item.quantity<0){
           Item.quantity=0;
         }
        
      }
    
       render(){
       const Product={
       display:"flex",
       justifycontent:"spaceevenly",
       }
       const mystyle = {
       position:"absolute",
       left:"600px",      
       };
       return(
            <div>
                       <Header/>
                  <div style={Product} >
                  <table style={mystyle} className="tbl2">
               <tr>
                   <th className="head">product</th>
                   <th className="head">quantity</th>
                   <th className="head">price</th>
                   <th className="head">Total</th>
                                                                                                                                                                                                                                                                            
               </tr>
            {
                   this.state?.cart.map((Item,index)=>
                    {return(
                          <tr key={Item.name}>
                           <td className="rows">{Item.name}</td>
                           <td className="rows">{Item.quantity}</td>
                           <td className="rows">{Item.price}</td>
                           <td className="rows">{Item.price*Item.quantity}</td>                           
                           <td className="rows"><button onClick={this.inCreament.bind(this,Item)}className="dremen"> + </button></td>
                          <td className="rows"><button onClick={this.Decreament.bind(this,Item)}className="dremen"> - </button></td>
                          <td className="rows"><button onClick={this.onDelete.bind(this,index)}className="deet"> Delet item </button></td>
                            {() =>(Item.index)} 
                            
                          </tr>)})
            }
                <button onClick={this.Total} className="btnalg">Total</button>
                {
                 this.state.showMe?
     <Footer total={this.state.cart.reduce((a,c)=>(a+c.price*c.quantity),0)}/>:null} 
           </table>
           
            <table className="tbl2">
               <tr>
                   <th className="head">product</th>
                   <th className="head">price</th>
            
               </tr>
            
             
           
           {
                    this.state?.list.map((Item,index)=>
                          <tr key={Item.name} >
                           <td className="rows"> {Item.name} </td>
                           <td className="rows"> {Item.price} </td>
                          
             <td>  <button onClick={this.addData.bind(this,Item)} className="addbtn">Add Item</button></td>
             
                             {() =>(Item.index)} 
                            
              </tr>)
          }
             </table>
            </div>
            </div>
        );
    }
}
export default Product; 