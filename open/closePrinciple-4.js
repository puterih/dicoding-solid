// contoh kasus perhitungan biaya admin (admin fee) dr berbagai jenis bioskop
class CinemaCalculations {
    calculateAdminFee(cinema) {
        if (cinema instanceof StandardCinema) {
            return (cinema.price * 10) / 100;
        }

        if (cinema instanceof DeluxeCinema) {
            return (cinema.price * 10) / 100;
        }

        if (cinema instanceof PremiumCinema) {
            return (cinema.price * 10) / 100;
        }

        return 0;
       }
    }
