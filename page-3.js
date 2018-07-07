import React, { Component } from 'react';
import Link from 'next/link';
import "../styles/styles.scss";
import FootBar from '../components/footBarComp';

export default class extends Component {
    render(){
        return(
            <div>
                    <h3>This is the third page</h3>
                    <FootBar isPage3 prevPage="page-2" />
            </div>
        );
    }
}

