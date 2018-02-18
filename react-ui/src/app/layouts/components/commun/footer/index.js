import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <h3>
                    <a className='gold' href='https://github.com/jendigital/' target='_blank' rel="noopener noreferrer">
                        Github
                    </a>
                </h3>
                <h3>
                    <a href='https://www.facebook.com/jendigitalvision' target='_blank' rel="noopener noreferrer">
                        Facebook
                    </a>
                </h3>
                <h3>
                    <a className='gold' href='https://twitter.com/_jendigital_' target='_blank' rel="noopener noreferrer">
                        Twitter
                    </a>
                </h3>
                <h3>
                    <a href='https://trello.com/b/oB52QJNj/pizza-lovers' target='_blank' rel="noopener noreferrer">
                        Trello
                    </a>
                </h3>
                <h3>
                    <a className='gold' href='https://github.com/jendigital/waldophotospizzalovers' target='_blank' rel="noopener noreferrer">
                        Website Stack
                    </a>
                </h3>
                <h3>
                    <a href='https://gist.github.com/alwaysunday/fb09c6677a34a8c57590299d073da5f6' target='_blank' rel="noopener noreferrer">
                        Instructions
                    </a>
                </h3>
            </div>
        );
    }
}

export default Footer;
