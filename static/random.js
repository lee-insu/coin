let coinList = [
    [1,"비트코인"],
    [2,"알트코인"],
    [3,"인수코인"]
];

function random(data) {

    lotCnt=1;
    datalotCnt = data.length;
    coinSelect = new Array(datalotCnt);
    coinSelect[0] = 0;

    for( i=0; i<=lotCnt; i++) {
        flag = 0;
        while(flag === 0) {
            result = Math.floor(Math.random() * datalotCnt);

        for(j=0; j<=i; j++) {
            if(result === coinSelect[j]) {
                flag = 0;
                break;
            }else {
                flag= 1 ;
            }
          }
        }
    }
    winningNumber[i] = result;
}

temp = 0;