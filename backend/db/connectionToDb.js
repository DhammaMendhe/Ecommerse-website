const mongoose = require('mongoose')
const MongodURI = 'mongodb://localhost:27017/ecomUser';


const connectTodb = async () => {
    await mongoose.connect(MongodURI

        //     , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // }

    )
        .then(() => {
            console.log("connected successfully..")

        })
        .catch((error) => {
            console.log(error)
        })
}


module.exports = connectTodb;



