const findTheOldest = function (people) {
    return people.reduce((oldestPerson, newPerson) => {
        let newAge = getAge(newPerson)
        let oldestAge = getAge(oldestPerson)
        if (newAge > oldestAge) {
            return newPerson
        }
        else {
            return oldestPerson
        }
    })
};

function getAge(person) {
    if(!person['yearOfDeath']) {
        return (new Date().getFullYear() - person.yearOfBirth)
    }
    else {
        return person.yearOfDeath - person.yearOfBirth
    }
}

// Do not edit below this line
module.exports = findTheOldest;
