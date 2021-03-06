
function timeSince(date) 
{
    var now = new Date();
    var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds())
    var seconds = Math.floor((nowUTC - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
    return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
    return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
    return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
    return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
    return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}