export const calcTimeToLaunch = date => {
    let dateNow = new Date();
    let seconds = Math.floor((date - dateNow) / 1000);
    if (dateNow > date) {
        seconds = Math.floor((dateNow - date) / 1000);
    }


    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    return `${dateNow > date ? 'from' : 'to'} launch - Days: ${Math.abs(days)} | Hours: ${hours} | Minutes: ${minutes} | Seconds: ${seconds}`;
};
