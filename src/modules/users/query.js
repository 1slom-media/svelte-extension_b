const LOGIN = `
    select u.* from users as u where username = $1 and password = crypt($2, u.password)
`

const USERNAME=`
select u.* from users as u where username = $1
`

const REGISTER=`
insert into users (username,password,repeat_password,email) values($1,crypt($2, gen_salt('bf')),crypt($3, gen_salt('bf')),$4) returning *
`

export {
    LOGIN,
    REGISTER,
    USERNAME
}