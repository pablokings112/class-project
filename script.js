function kings() {
    const umealadi = document.getElementById("utc-time");
    const tobe = new Date();
    umealadi.textContent = `The time is: ${tobe.toUTCString()}`;
}
kings();
setInterval (kings,1000)