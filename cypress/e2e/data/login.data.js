module.exports = {
    Users: [{
        scenario: 'Locked Out User',
        username: 'locked_out_user',
        password: 'secret_sauce',
        errorMsg: 'Sorry, this user has been locked out.'
    },
    {
        scenario: 'Problem User',
        username: 'problem_user',
        password: 'secret_sauce',
        errorMsg: 'Sorry, this user has been locked out.'
    },
    {
        scenario: 'Invalid Username',
        username: 'standard48_user',
        password: 'secret_sauce',
        errorMsg: 'Sorry, this user has been locked out.'
    },
    {
        scenario: 'Invalid Password',
        username: 'standard_user',
        password: 'secret_sauce48',
        errorMsg: 'Sorry, this user has been locked out.'
    },
    {
        scenario: 'Valid User',
        username: 'standard_user',
        password: 'secret_sauce',
        successMsg: 'Sorry, this user has been locked out.'
    }]
}