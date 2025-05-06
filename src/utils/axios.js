import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTU0NTgzMjc4YTYyZWVmODBkMDAyODVkMjhkZmEwYiIsIm5iZiI6MTc0MzE5MTY2OC44OTMsInN1YiI6IjY3ZTZmZTc0MDkyNTI4NjJlYTc2N2RiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPl0faYIQyKyAaOVLzzUsH-BWW4Isvl9eWPwCyO3zeM'
    }
})

export default instance