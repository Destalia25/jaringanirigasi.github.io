var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_IrigasiSinkron_1 = new ol.format.GeoJSON();
var features_IrigasiSinkron_1 = format_IrigasiSinkron_1.readFeatures(json_IrigasiSinkron_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrigasiSinkron_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrigasiSinkron_1.addFeatures(features_IrigasiSinkron_1);
var lyr_IrigasiSinkron_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrigasiSinkron_1, 
                style: style_IrigasiSinkron_1,
                popuplayertitle: 'Irigasi Sinkron',
                interactive: true,
                title: '<img src="styles/legend/IrigasiSinkron_1.png" /> Irigasi Sinkron'
            });

lyr_ESRI_0.setVisible(true);lyr_IrigasiSinkron_1.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_IrigasiSinkron_1];
lyr_IrigasiSinkron_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'j_Irigasi3': 'j_Irigasi3', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'kode': 'kode', 'Panjang': 'Panjang', 'DI': 'DI', 'BAKU': 'BAKU', 'Potensian': 'Potensian', 'Fungsional': 'Fungsional', 'Teknis': 'Teknis', 'Semi_Tekni': 'Semi_Tekni', 'Reklamasi_': 'Reklamasi_', 'Bendung__b': 'Bendung__b', 'Lebar_Bend': 'Lebar_Bend', 'Free_Intak': 'Free_Intak', 'Intake': 'Intake', 'Bangunan_I': 'Bangunan_I', 'Bangunan_1': 'Bangunan_1', 'Bagi': 'Bagi', 'Bagi_Sadap': 'Bagi_Sadap', 'Sadap': 'Sadap', 'Silang': 'Silang', 'Talang': 'Talang', 'Sypon': 'Sypon', 'Gorong_oro': 'Gorong_oro', 'Got_Miring': 'Got_Miring', 'Terjun': 'Terjun', 'Suplesi': 'Suplesi', 'Pelimpah': 'Pelimpah', 'Induk__m_': 'Induk__m_', 'Sekunder__': 'Sekunder__', 'Tersier__m': 'Tersier__m', 'Pelapis': 'Pelapis', 'Saluran_Ta': 'Saluran_Ta', 'Jumlah': 'Jumlah', 'Jaringan_I': 'Jaringan_I', 'Jaringan_1': 'Jaringan_1', 'field_1': 'field_1', });
lyr_IrigasiSinkron_1.set('fieldImages', {'OBJECTID_1': '', 'Id': '', 'j_Irigasi3': '', 'Desa': '', 'Kecamatan': '', 'kode': '', 'Panjang': '', 'DI': '', 'BAKU': '', 'Potensian': '', 'Fungsional': '', 'Teknis': '', 'Semi_Tekni': '', 'Reklamasi_': '', 'Bendung__b': '', 'Lebar_Bend': '', 'Free_Intak': '', 'Intake': '', 'Bangunan_I': '', 'Bangunan_1': '', 'Bagi': '', 'Bagi_Sadap': '', 'Sadap': '', 'Silang': '', 'Talang': '', 'Sypon': '', 'Gorong_oro': '', 'Got_Miring': '', 'Terjun': '', 'Suplesi': '', 'Pelimpah': '', 'Induk__m_': '', 'Sekunder__': '', 'Tersier__m': '', 'Pelapis': '', 'Saluran_Ta': '', 'Jumlah': '', 'Jaringan_I': '', 'Jaringan_1': '', 'field_1': '', });
lyr_IrigasiSinkron_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'Id': 'no label', 'j_Irigasi3': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'kode': 'no label', 'Panjang': 'no label', 'DI': 'no label', 'BAKU': 'no label', 'Potensian': 'no label', 'Fungsional': 'no label', 'Teknis': 'no label', 'Semi_Tekni': 'no label', 'Reklamasi_': 'no label', 'Bendung__b': 'no label', 'Lebar_Bend': 'no label', 'Free_Intak': 'no label', 'Intake': 'no label', 'Bangunan_I': 'no label', 'Bangunan_1': 'no label', 'Bagi': 'no label', 'Bagi_Sadap': 'no label', 'Sadap': 'no label', 'Silang': 'no label', 'Talang': 'no label', 'Sypon': 'no label', 'Gorong_oro': 'no label', 'Got_Miring': 'no label', 'Terjun': 'no label', 'Suplesi': 'no label', 'Pelimpah': 'no label', 'Induk__m_': 'no label', 'Sekunder__': 'no label', 'Tersier__m': 'no label', 'Pelapis': 'no label', 'Saluran_Ta': 'no label', 'Jumlah': 'no label', 'Jaringan_I': 'no label', 'Jaringan_1': 'no label', 'field_1': 'no label', });
lyr_IrigasiSinkron_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});