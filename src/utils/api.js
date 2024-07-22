import axios from "axios";

 export default axios.create({
    baseURL: "https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': '337139bc0dmshfcb02f960da296ap12210bjsn34c33ef0ee43',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      },
      })