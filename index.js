const express = require('express');
const faker = require('faker');

const app = express()

const port = 8001

/*
app.get("/api", (req, res) => {
    res.json({ message: "hola mundo :)  " });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
*/

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.firstName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.companyName = faker.company.companyName();
        this.streetName = faker.address.streetName();
        this.cityName = faker.address.streetName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();

    }


}


app.get("/api/users/new", (req, res) => {
    const user = new User();
    //res.json({ 'firstName': user.firstName });     // envia solo firstname
    res.json({ user });                            //envia toda la clase 
});
app.get("/api/companies/new", (req, res) => {
    const company = new Company();
    res.json({ company });                            //envia toda la clase 
});

app.get("/api/user/company", (req, res) => {
    const company = new Company();
    const user = new User();
    res.json({ company, user });   //se envia dos clases 

});

app.listen(port, () => console.log(`Listening on port: ${port}`)); //lo envia a la pagina web