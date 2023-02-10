import React from 'react'
import { Component } from 'react'

export default function aaa() {
  return (
    <div>aaa
        <Child msg ="父传递"></Child>
    </div>
  )
}

class Child extends Component{
    render(){
        return <div>zi字</div>
    }
}
