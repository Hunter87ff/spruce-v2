import axios from 'axios'; 
import * as config from '../config.js';

export async function fetch_api(route, method="GET", data=null) {
    
    let headers = {
        'Content-Type': 'application/json',
    }
    if(localStorage.getItem("token")) {
        headers['Authorization'] = `${localStorage.getItem("token") || "x"}`;
    }
    let response = await axios({
        method: method,
        url: `${route.replace(config.API_ROUTE, "")}`,
        data: data,
        headers: headers
    });
    return response;
}

export const getGuilds = async () => {
    let _guilds = [];
    if (localStorage.getItem('token') && localStorage.getItem("guilds")) {
        _guilds = JSON.parse(localStorage.getItem("guilds"));
        return _guilds;
    }
    
    else {
        const response = await fetch_api(`/api/guild/guilds`);
        if (response.status == 200) {
            _guilds = response.data;
            localStorage.setItem("guilds", JSON.stringify(_guilds));
            return _guilds;
        }
    }
}

export const getAvatar = (user_id, hash, format="png") => {
    return `/api/avatar/user/${user_id}/${hash}`;
}


  /**
   * Creates an Intersection Observer to monitor when an element enters/exits viewport
   * @param {HTMLElement} element - The DOM element to observe
   * @param {Function} callback - Callback function that receives a boolean indicating if element is intersecting
   * @example
   * // Monitor when a div enters viewport
   * const myDiv = document.getElementById('myDiv');
   * Observer(myDiv, (isVisible) => {
   *   if (isVisible) {
   *     console.log('Div is now visible');
   *   }
   * });
   */
  export const Observer = (element, callback) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
  };