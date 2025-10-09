import { response } from "express"
import { fakerEN_IN } from "@faker-js/faker"

export async function getMatches(amountOfMatches = 10) { // send the function //if matches is not defined up here, it will be overwritten with the value set in console.log(geTMatches(5))
    
    const promises = []
    // for loop for fingercount - 
    for (let i = 0; i < amountOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json)
        promises.push(promise)

        // .then((result) => {
        //     const dog = {
        //         imageURL: result.message
        //     }
        //     dogs.push(dog)
        // })
    }
    //return dogs
    const results = await Promise.all(promises) // js method

    const matches = results.map((result) => ({ imageURL: result.message, ...getIndianProfile() })) // spreading the profiles, cleaner than the other ways 

    return matches
}

function getIndianProfile() {
    return {
        name: fakerEN_IN.person.fullName(),
        bio: fakerEN_IN.person.bio(),
        address: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city()
    }
}

