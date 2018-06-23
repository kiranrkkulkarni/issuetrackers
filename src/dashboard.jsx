import React,{Component} from 'react';

export class Dashboard extends Component
{
    constructor()
    {
        super();
    }   
    render()
    {
        return(
        <div>
            <br/>
            
            <div className="ui container">
            <div className="ui inverted blue active item pointing secondary menu">
            <div className=""><h3><strong>Welcome, Thomas!</strong></h3></div>
            <div className="right menu">
            <a className="item">Logout</a>
            </div>
            </div>
            <div className="ui segment">
            
            <div className="ui grid">
            <div className="row">
            
            <div className="four wide column" align="left">
            <h3><strong><u>080 39003900</u></strong></h3>
            <p>LandLine</p>
            <p>NEXT PAYMENT:DONE</p>
            <p>NEXT DUE:29/06/2018</p>
            </div>
            <div className="four wide column">
            <h4>Connection Status : ACTIVE</h4>
            </div>
            <div className="four wide column">
            <button class="ui compact disabled button" role="button"><u>Usage Data</u></button>
            <button class="ui compact blue button" role="button"><u>Issue Tracker</u></button><br/><br/>
            <button class="ui compact disabled button" role="button"><u>Services</u></button>
            <button class="ui compact disabled button" role="button"><u>Product Plan</u></button><br/><br/>
            <button class="ui disabled button" role="button"><u>Bills & Payments</u></button>
            </div>
            </div>
            <div class="ui section divider"></div>
            <div className="row">
            <div className="four wide column" align="left">
            <h3><strong><u>500000345678</u></strong></h3>
            <p>BROADBAND</p>
            <p>NEXT PAYMENT:NOT DONE</p>
            <p>LAST DUE:29/05/2018</p>
            </div>
            <div className="four wide column">
            <h4>Connection Status : ACTIVE</h4>
            </div>
            <div className="four wide column">
            <button className="ui compact disabled button" role="button"><u>Usage Data</u></button>
            <button className="ui compact blue button" role="button"><u>Issue Tracker</u></button><br/><br/>
            <button className="ui compact disabled button" role="button"><u>Services</u></button>
            <button className="ui compact disabled button" role="button"><u>Product Plan</u></button><br/><br/>
            <button className="ui disabled button" role="button"><u>Bills & Payments</u></button>
            </div>
            </div>
            <div class="ui section divider"></div>
            <div className="row">
            <div className="four wide column" align="left">
            <h3><strong><u>9090909090</u></strong></h3>
            <p>CELLULAR</p>
            <p>NEXT PAYMENT:DONE</p>
            <p>NEXT DUE:30/06/2018</p>
            </div>
            <div className="four wide column">
            <h4>Connection Status : ACTIVE</h4>
            </div>
            <div className="four wide column">
            <button class="ui compact disabled button" role="button"><u>Usage Data</u></button>
            <button class="ui compact blue button" role="button"><u>Issue Tracker</u></button><br/><br/>
            <button class="ui compact disabled button" role="button"><u>Services</u></button>
            <button class="ui compact disabled button" role="button"><u>Product Plan</u></button><br/><br/>
            <button class="ui disabled button" role="button"><u>Bills & Payments</u></button>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        );
    }
}
