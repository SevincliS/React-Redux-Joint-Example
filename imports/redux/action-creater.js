export const select=function (username,password,logincheck) {
    return (
        {
            type: "select",
            username: username,
            password: password,
            logincheck: logincheck
        }
    )
}
export const  getLoginInfo = function(username, password,logincheck){

    return(
        {
            type: 'getLoginInfo',
            username: username,
            password: password,
            logincheck: logincheck

        }
    )
}
export const getElementId=function (id) {
    return(
        {
            type:'getElementId',
            id: id,
        }
    )
}
