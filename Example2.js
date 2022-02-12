import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './userContext'

class Example2 extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Sarika">
                    <ComponentC/>
                </UserProvider>
            </div>
        )
    }
}

export default Example2
