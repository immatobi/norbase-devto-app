import $ from 'jquery';

let body = {};

body.changeBackground = (cn) => {

    const elem = document.querySelector('.body');

    if(elem){
        elem.classList.add(cn);
    }

}

body.dismissBackground = (cn) => {

    const elem = document.querySelector('.body');

    if(elem){
        elem.classList.remove(cn)
    }

}

body.splitQueries = (q, key) => {

    let value;

    for(let i = 0; i < q.length; i++){

        let pair = q[i].split('=');
        if(pair[0] === key){
            value = pair[1];
        }

    }

    return value;

}

body.fixNav = () => {

    window.addEventListener('scroll', (e) => {

        console.log(window.scrollY);
        const headBox = $('.header');

        if(window.scrollY >4){
            headBox.addClass('stick');
        }else {
            headBox.removeClass('stick');
        }

    })

}

body.fixSpecialNav = () => {

    window.addEventListener('scroll', (e) => {

        console.log(window.scrollY);
        const navHead = $('.nav-head');

        if(window.scrollY > 40){
            navHead.addClass('blocked')
        }else {
            navHead.removeClass('blocked')
        }

    })

}

body.isObjectEmpty = (obj) => {
    return Object.getOwnPropertyNames(obj).length === 0 ? true : false;
}

body.isArrayEmpty = (arr) => {
    return arr.length === 0 ? true : false;
}

body.shiftPosts = (arr) => {

    const indexed = arr.findIndex((p) => p.cover_image !== null);
    arr.unshift(arr.splice(indexed, 1)[0]);
    return arr;

}


export default body;