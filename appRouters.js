const express = require("express");
const mysql = require("../data/dbManager");
const router = express.Router();
const qrCode = require("qrcode");

router.get("/siparisler", (req, res) => {
    res.render("siparisler");
})
router.get("/aylik-istatistikler", (req, res) => {
    res.render("aylik-istatistikler");
})
router.get("/en-begenilenler", (req, res) => {
    res.render("en-begenilenler");
})
router.get("/gunluk-istatistikler", (req, res) => {
    res.render("gunluk-istatistikler");
})
router.get("/menu", async (req, res) => {
    const [urunKahvalti,] = await mysql.execute("SELECT urunler.kategori_id, urunler.urun_id, urunler.urun_isim, urunler.urun_fiyat, kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id = kategoriler.kategori_id WHERE kategoriler.kategori_adi = 'Kahvaltı'");
    const [urunAtıstırmalik,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Atıştırmalıklar ve Yiyecekler'");
    const [urunTatli,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Tatlılar'");
    const [urunSicakIcecek,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Sıcak İçecekler'");
    const [urunKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Kahveler'");
    const [urunTurkKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Türk Kahveleri'");
    const [urunBitkiCay,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Demleme Bitki Çayları'");
    const [urunSogukIcecek,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Soğuk İçecekler'");
    const [urunSogukKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Soğuk Kahveler'");
    const [urunMesrubat,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Meşrubatlar'");

    res.render("menu", {
        kahvaltiDatas: urunKahvalti, atistirmalikDatas: urunAtıstırmalik,
        tatliDatas: urunTatli, sicakIcecekDatas: urunSicakIcecek, kahveDatas: urunKahve, turkKahveDatas: urunTurkKahve,
    
        bitkiCayDatas: urunBitkiCay, sogukIcecekDatas: urunSogukIcecek, sogukKahveDatas: urunSogukKahve, mesrubatDatas: urunMesrubat
    });
     
})
router.get("/", (req, res) => {
    const userUrl = "127.0.0.1:3000/Kullanici-Siparis";
    qrCode.toDataURL(userUrl, (err, url) => {
        if (err) console.log(err);
        res.render("Login", { userData: url });
    })

})
router.get("/index", (req, res) => {
    res.render("index");
})

router.get("/login", (req, res) => {
    res.render("Login");
})
router.get("/Kullanici-Siparis", async(req, res) => {
    const [urunKahvalti,] = await mysql.execute("SELECT urunler.kategori_id, urunler.urun_id, urunler.urun_isim, urunler.urun_fiyat, kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id = kategoriler.kategori_id WHERE kategoriler.kategori_adi = 'Kahvaltı'");
    const [urunAtıstırmalik,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Atıştırmalıklar ve Yiyecekler'");
    const [urunTatli,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Tatlılar'");
    const [urunSicakIcecek,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Sıcak İçecekler'");
    const [urunKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Kahveler'");
    const [urunTurkKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Türk Kahveleri'");
    const [urunBitkiCay,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Demleme Bitki Çayları'");
    const [urunSogukIcecek,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Soğuk İçecekler'");
    const [urunSogukKahve,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Soğuk Kahveler'");
    const [urunMesrubat,] = await mysql.execute("SELECT urunler.kategori_id,urunler.urun_id,urunler.urun_isim,urunler.urun_fiyat,kategoriler.kategori_adi FROM urunler INNER JOIN kategoriler ON urunler.kategori_id=kategoriler.kategori_id WHERE kategoriler.kategori_adi= 'Meşrubatlar'");

    res.render("Kullanici_Ekrani", {
        kahvaltiDatas: urunKahvalti, atistirmalikDatas: urunAtıstırmalik,
        tatliDatas: urunTatli, sicakIcecekDatas: urunSicakIcecek, kahveDatas: urunKahve, turkKahveDatas: urunTurkKahve,
    
        bitkiCayDatas: urunBitkiCay, sogukIcecekDatas: urunSogukIcecek, sogukKahveDatas: urunSogukKahve, mesrubatDatas: urunMesrubat
    });
    
})
router.post("/index", (req, res) => {
    const { username, password } = req.body;
    if (username == "yetkili" && password == "sifre123")
        res.redirect("../index");
    res.redirect("../Kullanici-Siparis")
})

router.delete("/silUrun/:urunId", (req, res) => {
    const urunId = req.params.urunId;


    mysql.execute("DELETE FROM urunler WHERE urun_id = ?", [urunId])
        .then(result => {
            res.json({ success: true });
        })
        .catch(err => {
            console.error(err);
            res.json({ success: false });
        });
});
router.post("/urunEkle", (req, res) => {
    const { isim, fiyat, maliyet, kategoriId } = req.body;

    const sql = 'INSERT INTO urunler (urun_isim, urun_fiyat, urun_maliyet, kategori_id) VALUES (?, ?, ?, ?)';
    mysql.execute(sql, [isim, fiyat, maliyet, kategoriId], (err, results) => {
        if (err) {
            console.error('Veri eklerken hata:', err);
            return res.status(500).json({ success: false, message: 'Bir hata oluştu.' });
        }

        console.log('Veri eklendi:', results);
        res.json({ success: true, message: 'Ürün başarıyla eklendi!' });
    });


    
});
module.exports = router;