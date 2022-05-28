class Profile {
    constructor(id, name, mobileNum, address, email, organization, country, state, age, description){
        this.id=id,
        this.name=name,
        this.mobileNum=mobileNum,
        this.address=address,
        this.email=email,
        this.organization=organization,
        this.country=country,
        this.state=state,
        this.age=age,
        this.description=description
    }
}

module.exports = Profile;