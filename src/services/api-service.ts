import {AxiosResponse} from "axios";
import {IArtikel} from "../Models/Artikel";

//In order to gain the TypeScript typings (for intellisense / autocomplete)
// while using CommonJS imports with require() use the following approach:
const axios = require('axios').default;
const INDEV= process.env.NODE_ENV ==="development"
const BASEURL= INDEV ? "http://localhost:8080" : "";

export const getAllUserName: () => Promise<string[]> = () =>
    axios.get(BASEURL+'user').then((response:AxiosResponse) => response.data)

export const doLogin: (name: String, pwd: String) => Promise<String> = () =>
    axios.post(BASEURL+'auth/login').then((response:AxiosResponse) => response.data)

export const getAllArtikel: ()=> Promise<IArtikel[]> = () =>
    axios.get(BASEURL+'/api/zettel').then((response:AxiosResponse) => response.data)


export const addArtikel=(artikel : IArtikel)=>
    axios
        .post(BASEURL+"/api/zettel/addArtikel", artikel )
        .then((response:AxiosResponse) => response.data)


//export const getArtikel = () =>
//     axios
//         .get("https://rickandmortyapi.com/api/character")
//         .then(response => response.data)