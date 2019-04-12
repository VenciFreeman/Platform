import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
require('./style1.css');

class Manage extends React.Component{    
    render(){            
        return(                
        <div>                    
            <div id="top_right">
                <Link to="/Home" ><Button>好书强推</Button></Link>|
                <Link to="/Manage" ><Button>订单管理</Button></Link>|
                <Link to="/BookList" ><Button>书籍浏览</Button></Link>|
                <Link to="/" ><Button>注销</Button></Link>
            </div>  
    </div>            
    );        
    }
}
export default Manage;