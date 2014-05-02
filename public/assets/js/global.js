var clue = clue || {};

clue.config = {
    NodeAppServer: {
        "localhost": 'http://192.168.178.15:3001/broadcast',
        "54.72.77.96": 'http://54.72.77.96:3001/broadcast' // amazon AWS
    },
    GoAppServer: 'http://localhost:3000/echo',
    assets: "public/assets/"
}

// Backgrounder
clue.Backgrounder = {
    imgsPrefix: "amsterdam-",
    imgsCount: 4
};

clue.Backgrounder.choosenOne = Math.floor((Math.random() * clue.Backgrounder.imgsCount) + 1);
clue.Backgrounder.imgUrl = clue.config.assets + "img/" + clue.Backgrounder.imgsPrefix + clue.Backgrounder.choosenOne;

document.getElementsByTagName("html")[0].style.background = 'url("' + clue.Backgrounder.imgUrl + '.jpg") no-repeat center center fixed';