<?php
$giaiXoSo = array(
  'giaidb' => 'ĐB',
  'giai1' => '1',
  'giai2' => '2',
  'giai3' => '3',
  'giai4' => '4',
  'giai5' => '5',
  'giai6' => '6',
  'giai7' => '7',
);

$giaiXoSoMN = array(
  'giai8' => '8',
  'giai7' => '7',
  'giai6' => '6',
  'giai5' => '5',
  'giai4' => '4',
  'giai3' => '3',
  'giai2' => '2',
  'giai1' => '1',
  'giaidb' => 'ĐB',
);

$giaiXoSoMT = array(
  'giai8' => '8',
  'giai7' => '7',
  'giai6' => '6',
  'giai5' => '5',
  'giai4' => '4',
  'giai3' => '3',
  'giai2' => '2',
  'giai1' => '1',
  'giaidb' => 'ĐB',
);

// Mảng cho menu của thanh header và khởi tạo taxonomy
$menu_items = [

  "xsmn" => [
    "label" => "XSMN",
    "slug" => "xo-so-mien-nam",
    "title" => "Xổ số miền Nam",
    "type" => "xsmn",
    "loop" => true,
    "sub" => [
      "xsmn-theo-ngay" => "Theo Ngày",
      "xsmn-thu-2" => "Thứ 2",
      "xsmn-thu-3" => "Thứ 3",
      "xsmn-thu-4" => "Thứ 4",
      "xsmn-thu-5" => "Thứ 5",
      "xsmn-thu-6" => "Thứ 6",
      "xsmn-thu-7" => "Thứ 7",
      "xsmn-chu-nhat" => "Chủ Nhật",
      'xsmn-truc-tiep' => "Trực Tiếp",
    ]
  ],
  "xsmb" => [
    "label" => "XSMB",
    "slug" => "xo-so-mien-bac",
    "title" => "Xổ số miền Bắc",
    "type" => "xsmb",
    "loop" => true,
    "sub" => [
      "xsmb-theo-ngay" => "Theo Ngày",
      "xsmb-thu-2" => "Thứ 2",
      "xsmb-thu-3" => "Thứ 3",
      "xsmb-thu-4" => "Thứ 4",
      "xsmb-thu-5" => "Thứ 5",
      "xsmb-thu-6" => "Thứ 6",
      "xsmb-thu-7" => "Thứ 7",
      "xsmb-chu-nhat" => "Chủ Nhật",
      'xsmb-truc-tiep' => "Trực Tiếp",
    ]
  ],
  "xsmt" => [
    "label" => "XSMT",
    "slug" => "xo-so-mien-trung",
    "title" => "Xổ số miền Trung",
    "type" => "xsmt",
    "loop" => true,
    "sub" => [
      "xsmt-theo-ngay" => "Theo Ngày",
      "xsmt-thu-2" => "Thứ 2",
      "xsmt-thu-3" => "Thứ 3",
      "xsmt-thu-4" => "Thứ 4",
      "xsmt-thu-5" => "Thứ 5",
      "xsmt-thu-6" => "Thứ 6",
      "xsmt-thu-7" => "Thứ 7",
      "xsmt-chu-nhat" => "Chủ Nhật",
      'xsmt-truc-tiep' => "Trực Tiếp",
    ]
  ],
  "vietlott" => [
    "label" => "VIETLOTT",
    "slug" => "xo-so-vietlott",
    "title" => "Xổ số Vietlott",
    "type" => "vietlott",
    "loop" => true,
    "sub" => [
      "kqxs-vietlott" => "Vietlott tổng hợp",
      "xo-so-tu-chon-mega-645" => "Mega 6/45",
      "xo-so-tu-chon-power-655" => "Power 6/55",
      "xo-so-max-3d" => "Max 3D",
      "ket-qua-xo-so-keno" => "Xổ số Keno"
    ]
  ],

  "thongkevitri" => [
    "label" => "THỐNG KÊ VỊ TRÍ",
    "slug" => "thong-ke-vi-tri",
    "title" => "Thống kê vị trí",
    "type" => "thongkevitri",
    "loop" => true,
    "sub" => [
      "cau-bach-thu" => "Thống kê duy nhất XSMB",
      "cau-lat-lien-tuc" => "Thống kê vị trí lật liên tục XSMB",
      "cau-ve-mien-trung" => "Thống kê vị trí về nhiều lần XSMB",
      "cau-mien-trung" => "Thống kê vị trí XSMT",
      "cau-mien-nam" => "Thống kê vị trí XSMN",
    ]
  ],
  "thongke" => [
    "label" => "THỐNG KÊ",
    "slug" => "thong-ke",
    "title" => "Thống kê",
    "type" => "thongke",
    "loop" => true,
    "sub" => [
      "thong-ke-lo-gan" => "Thống kê Lô gan",
      "thong-ke-dac-biet" => "TK giải Đặc Biệt",
      "thong-ke-dau-duoi" => "Thống kê Đầu - Đuôi",
      "thong-ke-tan-suat" => "Tần suất xuất hiện",
      "thong-ke-tu-00-den-99" => "Thống kê từ 00 đến 99",
      "lo-xien-xsmb" => "Thống kê cặp loto cùng về XSMB",
      "thong-ke-keno-theo-chu-ky" => "Thống kê Keno theo chu kỳ",
      "lo-kep-xsmb" => "Thống kê loto kép",
    ]
  ],
  "tracuuketqua" => [
    "label" => "TRA CỨU KQ",
    "slug" => "tra-cuu-ket-qua",
    "title" => "Tra cứu kết quả",
    "type" => "tracuuketqua",
    "loop" => true,
    "sub" => [
      "ket-qua-hom-nay" => "Kết quả hôm nay",
      "ket-qua-hom-qua" => "Kết quả hôm qua",
      "xsmb-30-ngay" => "XSMB 30 ngày",
      "do-ve-so" => "Dò vé số",
      "ket-qua-dai" => "Kết quả đài",
    ]
  ],
  "sodauduoi" => [
    "label" => "SỔ ĐẦU ĐUÔI",
    "slug" => "so-dau-duoi",
    "title" => "Sổ đầu đuôi",
    "type" => "sodauduoi",
    "loop" => true,
    "sub" => [
      "so-dau-duoi-mien-bac" => "Sổ đầu đuôi miền Bắc",
      "so-dau-duoi-mien-trung" => "Sổ đầu đuôi miền Trung",
      "so-dau-duoi-mien-nam" => "Sổ đầu đuôi miền Nam",
    ]
  ],
  "tinxoso" => [
    "label" => "TIN XỔ SỐ",
    "slug" => "tin-xo-so",
    "title" => "Tin xổ số",
    "type" => "tinxoso",
    "loop" => false,
    "sub" => [
      "tin-moi-nhat" => "Tin xổ số mới nhất",
      "mau-ve-trung-thuong" => "Mẫu vé trúng thưởng",
      "quy-dinh-xo-so" => "Quy định xổ số",
      // "tin-trung-thuong" => "Tin trúng thưởng",
    ]
  ],

];

// Dùng để khởi tạo post type và tạo menu
$menu_items_post_type = array(
  "phantich" => [
    "label" => "PHÂN TÍCH",
    "slug" => "phan-tich",
    "title" => "Phân tích kết quả xổ số",
    "type" => "phantich",
    "loop" => false,
    "sub" => [
      "thong-ke-xsmb" => "Thống kê XSMB",
      "thong-ke-xsmt" => "Thống kê XSMT",
      "thong-ke-xsmn" => "Thống kê XSMN",
      "thong-ke-xs-vietlott" => "Thống kê XS Vietlott",
    ]
  ],
  "somo" => [
    "label" => "SỔ MƠ",
    "slug" => "so-mo",
    "title" => "Sổ mơ",
    "type" => "somo",
    "loop" => false,
    'sub' => []
  ],
);

$arrthu = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];

$lichQuay = array(
  // Mảng cho trang 404 
  "mien-bac" => [
    [
      "key" => "xo-so-ha-noi",
      "label" => "Hà Nội",
      "lichquay" => ["Thứ 2", "Thứ 5"]
    ],
    [
      "key" => "xo-so-quang-ninh",
      "label" => "Quảng Ninh",
      "lichquay" => ["Thứ 3"]
    ],
    [
      "key" => "xo-so-bac-ninh",
      "label" => "Bắc Ninh",
      "lichquay" => ["Thứ 4"]
    ],
    [
      "key" => "xo-so-hai-phong",
      "label" => "Hải Phòng",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-nam-dinh",
      "label" => "Nam Định",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-thai-binh",
      "label" => "Thái Bình",
      "lichquay" => ["Chủ Nhật"]
    ]
  ],
  "mien-trung" => [
    [
      "key" => "xo-so-binh-dinh",
      "label" => "Bình Định",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-da-nang",
      "label" => "Đà Nẵng",
      "lichquay" => ["Thứ 4", "Thứ 7"]
    ],
    [
      "key" => "xo-so-dak-lak",
      "label" => "Đắk Lắk",
      "lichquay" => ["Thứ 3"]
    ],
    [
      "key" => "xo-so-dak-nong",
      "label" => "Đắk Nông",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-gia-lai",
      "label" => "Gia Lai",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-khanh-hoa",
      "label" => "Khánh Hòa",
      "lichquay" => ["Thứ 4", "Chủ Nhật"]
    ],
    [
      "key" => "xo-so-kon-tum",
      "label" => "Kon Tum",
      "lichquay" => ["Chủ Nhật"]
    ],
    [
      "key" => "xo-so-ninh-thuan",
      "label" => "Ninh Thuận",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-phu-yen",
      "label" => "Phú Yên",
      "lichquay" => ["Thứ 2"]
    ],
    [
      "key" => "xo-so-quang-binh",
      "label" => "Quảng Bình",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-quang-nam",
      "label" => "Quảng Nam",
      "lichquay" => ["Thứ 3"]
    ],
    [
      "key" => "xo-so-quang-ngai",
      "label" => "Quảng Ngãi",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-quang-tri",
      "label" => "Quảng Trị",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-thua-thien-hue",
      "label" => "Thừa Thiên Huế",
      "lichquay" => ["Thứ 2"]
    ]
  ],
  "mien-nam" => [
    [
      "key" => "xo-so-an-giang",
      "label" => "An Giang",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-bac-lieu",
      "label" => "Bạc Liêu",
      "lichquay" => ["Thứ 3"]
    ],
    [
      "key" => "xo-so-ben-tre",
      "label" => "Bến Tre",
      "lichquay" => ["Thứ 3"]
    ],
    [
      "key" => "xo-so-binh-duong",
      "label" => "Bình Dương",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-binh-phuoc",
      "label" => "Bình Phước",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-binh-thuan",
      "label" => "Bình Thuận",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-ca-mau",
      "label" => "Cà Mau",
      "lichquay" => ["Thứ 2"]
    ],
    [
      "key" => "xo-so-can-tho",
      "label" => "Cần Thơ",
      "lichquay" => ["Thứ 4"]
    ],
    [
      "key" => "xo-so-da-lat",
      "label" => "Đà Lạt",
      "lichquay" => ["Chủ Nhật"]
    ],
    [
      "key" => "xo-so-dong-nai",
      "label" => "Đồng Nai",
      "lichquay" => ["Thứ 4"]
    ],
    [
      "key" => "xo-so-dong-thap",
      "label" => "Đồng Tháp",
      "lichquay" => ["Thứ 2"]
    ],
    [
      "key" => "xo-so-hau-giang",
      "label" => "Hậu Giang",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-kien-giang",
      "label" => "Kiên Giang",
      "lichquay" => ["Chủ Nhật"]
    ],
    [
      "key" => "xo-so-long-an",
      "label" => "Long An",
      "lichquay" => ["Thứ 7"]
    ],
    [
      "key" => "xo-so-soc-trang",
      "label" => "Sóc Trăng",
      "lichquay" => ["Thứ 4"]
    ],
    [
      "key" => "xo-so-tay-ninh",
      "label" => "Tây Ninh",
      "lichquay" => ["Thứ 5"]
    ],
    [
      "key" => "xo-so-tien-giang",
      "label" => "Tiền Giang",
      "lichquay" => ["Chủ Nhật"]
    ],
    [
      "key" => "xo-so-tp-hcm",
      "label" => "TP. HCM",
      "lichquay" => ["Thứ 7", "Thứ 2"]
    ],
    [
      "key" => "xo-so-tra-vinh",
      "label" => "Trà Vinh",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-vinh-long",
      "label" => "Vĩnh Long",
      "lichquay" => ["Thứ 6"]
    ],
    [
      "key" => "xo-so-vung-tau",
      "label" => "Vũng Tàu",
      "lichquay" => ["Thứ 3"]
    ]
  ]
);

$dataKqxs = array(
  //Mảng tạo bài viết tự động cho post type: kqxs
  "xo-so-ha-noi" => "Hà Nội",
  "xo-so-quang-ninh" => "Quảng Ninh",
  "xo-so-bac-ninh" => "Bắc Ninh",
  "xo-so-hai-phong" => "Hải Phòng",
  "xo-so-nam-dinh" => "Nam Định",
  "xo-so-thai-binh" => "Thái Bình",
  "xo-so-binh-dinh" => "Bình Định",
  "xo-so-da-nang" => "Đà Nẵng",
  "xo-so-dak-lak" => "Đắk Lắk",
  "xo-so-dak-nong" => "Đắk Nông",
  "xo-so-gia-lai" => "Gia Lai",
  "xo-so-khanh-hoa" => "Khánh Hòa",
  "xo-so-kon-tum" => "Kon Tum",
  "xo-so-ninh-thuan" => "Ninh Thuận",
  "xo-so-phu-yen" => "Phú Yên",
  "xo-so-quang-binh" => "Quảng Bình",
  "xo-so-quang-nam" => "Quảng Nam",
  "xo-so-quang-ngai" => "Quảng Ngãi",
  "xo-so-quang-tri" => "Quảng Trị",
  "xo-so-thua-thien-hue" => "Thừa Thiên Huế",
  "xo-so-an-giang" => "An Giang",
  "xo-so-bac-lieu" => "Bạc Liêu",
  "xo-so-ben-tre" => "Bến Tre",
  "xo-so-binh-duong" => "Bình Dương",
  "xo-so-binh-phuoc" => "Bình Phước",
  "xo-so-binh-thuan" => "Bình Thuận",
  "xo-so-ca-mau" => "Cà Mau",
  "xo-so-can-tho" => "Cần Thơ",
  "xo-so-da-lat" => "Đà Lạt",
  "xo-so-dong-nai" => "Đồng Nai",
  "xo-so-dong-thap" => "Đồng Tháp",
  "xo-so-hau-giang" => "Hậu Giang",
  "xo-so-kien-giang" => "Kiên Giang",
  "xo-so-long-an" => "Long An",
  "xo-so-soc-trang" => "Sóc Trăng",
  "xo-so-tay-ninh" => "Tây Ninh",
  "xo-so-tien-giang" => "Tiền Giang",
  "xo-so-tp-hcm" => "TP. HCM",
  "xo-so-tra-vinh" => "Trà Vinh",
  "xo-so-vinh-long" => "Vĩnh Long",
  "xo-so-vung-tau" => "Vũng Tàu"
);

foreach ($menu_items as $item) {
  $_SLUG_TAX[$item['type']] = site_url() . '/' . $item['slug'] . '/';
}

$_SLUG_TINH = site_url() . "/xo-so-tinh/xo-so-";
$_SLUG_TINH_short = site_url() . "/xo-so-tinh/";