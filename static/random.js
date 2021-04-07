let coinList = [	["비트코인"],
                    ["인수코인"],
                    ["알트코인"],
                    ["비트코인"],

];


function random(data) {

    lotCnt= 1;	//추첨인원
    datalotCnt = data.length;	//자료수
    coinPick = new Array(datalotCnt);	//당첨번호
    coinPick[0] = 0;

    for (let i=0; i<=lotCnt; i++)
    {
      flag = 0;

      while(flag === 0) {
        result=Math.floor(Math.random() * datalotCnt);

        for(let j=0; j<=i; j++) {
           if (result == coinPick[j]) {
            flag = 0;
            break;
           } else {
            flag = 1;
           }
        }
      }

      coinPick[i] = result;
    }

    temp = 0;

    for (let i=0; i<=lotCnt-1; i++)  {
      for (let j=i+1; j<=lotCnt; j++) {
        if (coinPick[i] > coinPick[j]) {
          temp= coinPick[i];
          coinPick[i] = coinPick[j];
          coinPick[j] = temp;
        }
      }
    }

    
    for (let i=1; i<=lotCnt; i++) 
    {
     console.log(data[coinPick[i]][0]);
     const coinShow = document.querySelector(".kk");
     coinShow.innerText = `${data[coinPick[i]][0]}`;
    
    }

}


