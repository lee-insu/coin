
let coinList = [
    ["1","비트코인"],
    ["2","알트코인"],
    ["3","인수코인"],
    ["4","인수코인"],
    ["5","인수코인"],
    ["6","인수코인"],
    ["7","인수코인"]
];

function random(data) {

    lotCnt=1;
    datalotCnt = data.length;
    coinSelect = new Array(datalotCnt);
    coinSelect[0] = 0;
   

    for(let i=0; i<=lotCnt; i++) {
        flag = 0;
        while(flag === 0) {
            result = Math.floor(Math.random() * datalotCnt);

        for(let j=0; j<=i; j++) {
            if(result === coinSelect[j]) {
                flag = 0;
                break;
            }else {
                flag= 1 ;
            }
          }
    }
    coinSelect[i] = result;
}

temp = 0;

for(let i=0; i<=lotCnt-1; i++) {
    for(let j=i+1; j<=lotCnt; j++) {
        if(coinSelect[i] > coinSelect[j]) {
            temp = coinSelect[i];
            coinSelect[i] = coinSelect[j];
            coinSelect[j] = temp;
        }
    }
}

for(let i =1; i<=lotCnt; i++ ) {
    console.log(data[coinList[i][0]]);
}
}


