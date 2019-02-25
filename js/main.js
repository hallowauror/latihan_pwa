$(document).ready(function () {
    // API
    var _url = 'http://my-json-server.typicode.com/hallowauror/latihan_pwa_api/Mahasiswa';

    // menampung data yang didapat dari API
    var result = '';

    // menampung gender sbg option
    var gender_opt = '';

    // menampung semua gender dari API
    var gender = [];

    $.get(_url,function (data) {
        $.each(data, function (key, items) {
            // untuk menampung gender sementara pd loop
            _gend = items.gender;

            // untuk memasukkan data ke result dari API
            result += '<div>'+'<p><b>'+items.name+'</b></p>'+
                '<p>'+_gend+'</p></div>';

            // jika gender tidak ada didalam array gender,
            // maka masukkan gender opt
            if ($.inArray(_gend, gender) === -1){
                // data gender di push untuk
                // pengecekan itrasi berikutnya
                gender.push(_gend);
                // set gender_opt dgn <option>
                gender_opt += '<option value="'+_gend+
                    '">'+_gend+'</option>'
            }
        });

        // menggunakan selector ID mhs-list,
        // kemudian replace html di dalam komponen yang
        // ada di id mhs-list menjadi result
        $('#mhs-list').html(result);

        // menggunakan selector ID gender-select,
        // kemudian replace html di dalam komponen yang
        // ada di id gender-select menjadi gender_opt
        $('#gender-select').html(gender_opt);
    })
});