const { User } = require('../../../models')
const { validateText, validateString } = require('validators')
const { verifyObjectIdString } = require('../../../utils')
const { NotFoundError, SystemError } = require('errors')


module.exports = function updateUserProfile( {userId, gender, city, aboutYou} ) {
    verifyObjectIdString(userId)
    if (gender) validateString(gender)
    if(city) validateText(city)
    if(aboutYou) validateText(aboutYou)
   
    return User.findById(userId)
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if(gender) user.gender = gender
            if(city) user.city = city
            if (aboutYou !== String) throw new Error('Your description is not a text')

            // if (user.name === changeName) throw new DuplicityError('same username')

            user.gender = gender
            user.city = city
            user.aboutYou = aboutYou

            return user.save()

        })

        .then(() => { })


    


}