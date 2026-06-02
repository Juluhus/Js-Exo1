function calculerTTC(prixHT, tauxTVA = 20) {
    const montantTVA = prixHT * (tauxTVA / 100);
    const prixTTC = prixHT + montantTVA;
    const montantArrondi = Math.round(prixTTC * 100) / 100;
    console.log(`Le prix TTC est de ${montantArrondi}€ (TVA : ${tauxTVA}%)`);
    return montantArrondi;
}

calculerTTC(100, 20);
calculerTTC(50, 5.5);
calculerTTC(75);