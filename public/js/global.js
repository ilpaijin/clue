var yir = yir || {};

yir.config = {
    NodeAppServer: {
        "localhost": 'http://192.168.178.15:3001/broadcast',
        "54.72.77.96": 'http://54.72.77.96:3001/broadcast' // amazon AWS
    },
    GoAppServer: 'http://localhost:3000/echo'
}

// Backgrounder
yir.Backgrounder = {
    imgsPrefix: "amsterdam-",
    imgsCount: 4
};

yir.Backgrounder.choosenOne = Math.floor((Math.random() * yir.Backgrounder.imgsCount) + 1);
yir.Backgrounder.imgUrl = "public/img/" + yir.Backgrounder.imgsPrefix + yir.Backgrounder.choosenOne;

document.getElementsByTagName("html")[0].style.background = 'url("' + yir.Backgrounder.imgUrl + '.jpg") no-repeat center center fixed';