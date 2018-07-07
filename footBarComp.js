import React, { Component } from 'react';
import Link from 'next/link';

function footerChecker(props) {
    // Setting prop variables
    const isIndex = props.isIndex;
    const isPage2 = props.isPage2;
    const isPage3 = props.isPage3;

    //Check to see if component has 'isIndex'
    if(isIndex) {
        return <div className="container-fluid border-top border-primary margin-top fixed-bottom back-red bg-white">
                    <Link href={props.nextPage}>
                    <div className="d-inline-block pr-3 float-right">
                        <div className="btn btn-primary btn-circle">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    </Link>
                </div>;
    }
    //Check to see if component has 'isPage2'
    else if(isPage2) {
        return <div className="container-fluid border-top border-primary margin-top fixed-bottom back-red bg-white">
                    <Link href={props.prevPage}>
                    <div className="d-inline-block pr-3 float-left">
                        <div className="btn btn-primary btn-circle">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                    </div>
                    </Link>
                    <Link href={props.nextPage}>
                        <div className="d-inline-block pr-3 float-right">
                            <div className="btn btn-primary btn-circle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </Link>
                </div>;
    }
    else if(isPage3) {
        return <div className="container-fluid border-top border-primary margin-top fixed-bottom back-red bg-white">
                    <Link href={props.prevPage}>
                    <div className="d-inline-block pr-3 float-left">
                        <div className="btn btn-primary btn-circle">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                    </div>;
    }
    //Set default
    else {
        return <div className="container-fluid border-top border-primary margin-top fixed-bottom back-red bg-white">
                    <Link href={props.prevPage}>
                    <div className="d-inline-block pr-3 float-left">
                        <div className="btn btn-primary btn-circle">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                    </div>
                    </Link>
                </div>;
    }
}
export default class FootBar extends Component { 
    render() {
        return(
            <a>
                {footerChecker(this.props)}
            </a>
        );
    }
}
