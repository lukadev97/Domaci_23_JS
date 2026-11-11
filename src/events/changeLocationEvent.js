import {changeLocationHandler} from "../handlers/changeLocationHandler";

export function changeLocationEvent() {
    document.querySelector("#changeLocationBtn").addEventListener("click", changeLocationHandler);
}