use test
db.createUser( 
    {   
        user: "uadmin",
        pwd: "password",
        customData: { employeeId: 12345 },
        roles: [ "root" ] 
    }
)