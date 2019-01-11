import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox } from './styled'
import { Input, Button } from 'antd'

class Login extends PureComponent {

    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" className='login-input' />
                    <Input placeholder="密码" className='login-input' type='password' />
                    <Button type="primary" block className='login-button'>登录</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
}


const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login)