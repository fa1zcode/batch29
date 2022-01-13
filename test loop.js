unction deretAngka(n){
    var hasilderetAngka = '';
    for(var i=1;i<=n;i++){
      if(i % 3 == 0 && i % 5 == 0)
      {
        hasilderetAngka = 'kita';
      } else if(i % 3 == 0) {
        hasilderetAngka = 'aku';
      } else if(i % 5 == 0) {
        hasilderetAngka = 'kamu';
      } else {
        hasilderetAngka = i+'';
        }
    }
    return hasilderetAngka
  }
  console.log(deretAngka(10))
  console.log(deretAngka(20))