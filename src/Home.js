import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
require('./style1.css');

class Home extends React.Component{    
    render(){            
        return(                
        <div>                    
            <Paper id="top_right">
                <Link to="/Home" ><Button>好书强推</Button></Link>|
                <Link to="/Manage" ><Button>订单管理</Button></Link>|
                <Link to="/BookList" ><Button>书籍浏览</Button></Link>|
                <Link to="/" ><Button>注销</Button></Link>
            </Paper><br/>
            <div class="clear"></div>
		    <div id="menu">
                <Link to="/Home" >图书总榜</Link>
			    <Link to="/Home" >儿童</Link>
			    <Link to="/Home" >文学</Link>
			    <Link to="/Home" >进口原版</Link>
			    <Link to="/Home" >小说</Link>
			    <Link to="/Home" >历史</Link>
			    <Link to="/Home" >经济管理</Link>
            </div>
            <div class="book">
                <div class="bookimg">
                <img src={require('./img/1.jpg')} /> 
            </div>
                <div class="bookIntr">
                    <span>书名：</span>
                    <span>三体</span><br/>
                    <span>售价：40</span>
            </div>
            </div>
            <div class="book">
                <div class="bookimg">
                    <img src={require('./img/2.jpg')}  /> 
                </div>
                <div class="bookIntr">
                    <span>书名：</span>
                    <span>流浪地球</span><br/>
                    <span>售价：50</span>
                </div>
            </div>
            <div id="jumpPage">
                <Link to="/Home" >上一页</Link>
                <Link to="/Home" >1</Link>
                <Link to="/Home" >2</Link>
                <Link to="/Home" >3</Link>
                <Link to="/Home" >4</Link>
                <Link to="/Home" >5</Link>
                <Link to="/Home" >6</Link>
                <Link to="/Home" >7</Link>
                <Link to="/Home" >下一页</Link>
            </div>              
    </div>            
    );        
    }
}
export default Home;
