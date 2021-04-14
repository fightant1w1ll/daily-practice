function throttle(fn, delay) {
    let lastCall = 0;
    let restTime = delay;
    return function (...args) {
        const now = new Date();
        if (restTime <= 0) {
            fn.call(null, args);
            restTime = delay;
        } else {
            restTime -= now - lastCall;
        }
        lastCall = now;
    };
}
