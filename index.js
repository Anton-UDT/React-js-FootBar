import React, { Component } from 'react';
import Link from 'next/link';
import "../styles/styles.scss";
import FootBar from '../components/footBarComp';

export default class extends Component {
    render(){
        return(
            <div>
                    <h3>This is the index</h3> 
                    <FootBar isIndex nextPage="page-2" />
            </div>
        );
    }
}

