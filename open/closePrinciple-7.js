// contoh jenis cinema baru yg brnama couplecinema, maka:
const main = () => {
    const standardCinema = new StandardCinema(100);
    const adminFee = standardCinema.calculateAdminFee();
    console.log(adminFee); // output: 10
  };
   
  main();