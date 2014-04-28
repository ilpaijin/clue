var yir = yir || {};

yir.config = {
    appServer: 'http://localhost:3000'
}

//Backgrounder
yir.Backgrounder = {
    imgsPrefix: "amsterdam-",
    imgsCount: 4
};

yir.Backgrounder.choosenOne = Math.floor((Math.random() * yir.Backgrounder.imgsCount) + 1);
yir.Backgrounder.imgUrl = "public/img/" + yir.Backgrounder.imgsPrefix + yir.Backgrounder.choosenOne;

document.getElementsByTagName("html")[0].style.background = 'url("' + yir.Backgrounder.imgUrl + '.jpg") no-repeat center center fixed';