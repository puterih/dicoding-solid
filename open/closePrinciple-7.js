// contoh jenis cinema baru yg brnama couplecinema, maka:
class CoupleCinema extends Cinema {
    calculateAdminFee() {
      return (this.price * 15) / 100;
    }
  }


// jika ingin membuat class cinema maka contoh kode programnya adalah seperti berikut:
const main = () => {
    const standardCinema = new StandardCinema(100);
    const adminFee = standardCinema.calculateAdminFee();
    console.log(adminFee); // output: 10
  };
   
  main();