// Tasselled Cap - brightness
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=91=&sensor_id=14

let index = 0.3037*B10+0.2793*B04+0.4743*B01+0.5585*B02+0.5082*B26+0.1863*B07;
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);