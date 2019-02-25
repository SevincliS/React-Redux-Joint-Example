const selectReducer = (state = null, action) => {
    switch (action.type) {
        case 'select':
            return ({
                uname: action.username,
                pwd: action.password,
                check: action.logincheck
            })
        case 'getLoginInfo':
            return({
                username: action.username,
                password: action.password,
                logincheck: action.logincheck
            })
        case 'getElementId':
            return({
                id:action.id,
            })
        default:
            return {state: null}
    }
}

export default selectReducer