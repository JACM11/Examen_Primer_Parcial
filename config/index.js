if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

module.exports = {
    URL: process.env.URL,
    Puerto: process.env.Puerto
};
