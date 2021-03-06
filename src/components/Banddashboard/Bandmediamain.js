import React from 'react';
import Footer from '../homepage/Footer';
import Bandnav from './Bandnav';
import Bandmedia from './Bandmedia';

const filterStyle = {
    margin: '0',
    padding: '2%',
    paddingTop: '1%',
    backgroundColor: '#fafafa'
}

const searchStyle = {
    float: 'right',
    margin: '0',
    padding: '2%'
}

function Bandmediamain() {
    return(
        
        <div className="FilterPage1">
           
           
            <div className="row" style={{margin: '0',padding: '0'}}>
            <div className="col-md-3" style={filterStyle}>
                <Bandnav />
            </div>
            <div className="col-md-9" style={searchStyle}>
                <Bandmedia />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bandmediamain;