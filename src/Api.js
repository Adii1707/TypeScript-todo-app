import axios, {AxiosResponse} from "axios";
import {TodoItems} from "./Components/Todo"

export const gettodos = async () =>{
    let response = await axios.get("http://localhost:8080/todos");
    return response;
}


export const Addon = async (status, title)=>{
    let response = await axios.post("http://localhost:8080/todos", {status, title});
    return response;
}

export const OnUpdate = async (status, title)=>{
    let response = await axios.post("http://localhost:8080/todos", {status, title});
    return response;
}