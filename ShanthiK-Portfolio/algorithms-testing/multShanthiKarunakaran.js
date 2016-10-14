function multShanthiKarunakaran(times) {
 var total = 0;
	while(times > 1) {
    times--;
    if(times % 3 == 0 || times % 5 == 0) {
      total +=times;
    }
  }
  return total;
}

multShanthiKarunakaran(45678);
module.exports = multShanthiKarunakaran;


