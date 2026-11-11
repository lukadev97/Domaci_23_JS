import {getFutureDateHandler} from "../handlers/getFutureDateHandler";

export function getFutureDateEvent() {
    document.querySelector("#futureDateBtn").addEventListener("click", getFutureDateHandler);
}