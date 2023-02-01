/*
function booleanInterger (num){
    if (0 == num %  2){
        return 1
    }
    return -1
}
*/

function isUserLoggedInAndSubscribed (loggedIn, subscribed){
    return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED' ? true : false
}

console.log (isUserLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))