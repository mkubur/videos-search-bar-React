import axios from 'axios';

const KEY = "AIzaSyC5eHL82CUjwFxu9izpOS0ZVi53V9Xcqs4";

export default axios.create({
    baseUrl : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        type : 'video',
        maxResults: 5,

        key : KEY
    }
});