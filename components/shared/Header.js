import React, { Component } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

export default class Header extends Component {
  render() {
    const title = this.props.title;
    return (
      <>
        <a> {title} </a>
        <p className='customClass'> I am a styled P element</p>
        <p className='customClassFromFile'>
          {' '}
          I am a styled P element from File
        </p>
        <Link href='/'>
          <a> Home </a>
        </Link>
        <Link href='/about'>
          <a> About </a>
        </Link>
        <Link href='/portfolios'>
          <a> Portfolio </a>
        </Link>
        <Link href='/blogs'>
          <a> Blog </a>
        </Link>
        <Link href='/cv'>
          <a> CV </a>
        </Link>
      </>
    );
  }
}
