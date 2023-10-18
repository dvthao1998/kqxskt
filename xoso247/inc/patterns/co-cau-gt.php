<?php function co_cau_gt_mb()
{
  ?>
  <section class="section">
    <div class="lottery-info" style="padding: 16px ;
    font-size: 15px;">
      <h3>Cơ cấu giải thưởng XSMB</h3>
      <p>(Xổ số truyền thống, xổ số Thủ Đô hay xổ số Hà Nội)</p>
      <p>Loại vé 10000đ:</p>
      <p>Có 81.150 giải thưởng (27 số tương đương với 27 lần quay):</p>
      <table class="table" style="margin-bottom: 10px; font-size: 13px">
        <thead>
          <tr>
            <th class="cocau" style="min-width: 70px">Tên giải</th>
            <th class="cocau">Tiền thưởng (VNĐ)</th>
            <th class="cocau">Số lượng giải</th>
            <th class="cocau">Tổng giá trị giải thưởng (VNĐ)</th>
            <th class="cocau">Trị giá mỗi giải so với giá vé mua</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="cocau">Giải ĐB</td>
            <td class="cocau">200,000,000</td>
            <td class="cocau">15</td>
            <td class="cocau">3,000,000,000</td>
            <td class="cocau">20,000 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải nhất</td>
            <td class="cocau">20,000,000</td>
            <td class="cocau">15</td>
            <td class="cocau">3,000,000,000</td>
            <td class="cocau">2,000 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải nhì</td>
            <td class="cocau">5,000,000</td>
            <td class="cocau">30</td>
            <td class="cocau">150,000,000</td>
            <td class="cocau">500 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải ba</td>
            <td class="cocau">2,000,000</td>
            <td class="cocau">90</td>
            <td class="cocau">180,000,000</td>
            <td class="cocau">200 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải tư</td>
            <td class="cocau">400,000</td>
            <td class="cocau">600</td>
            <td class="cocau">240,000,000</td>
            <td class="cocau">40 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải năm</td>
            <td class="cocau">200,000</td>
            <td class="cocau">900</td>
            <td class="cocau">180,000,000</td>
            <td class="cocau">20 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải sáu</td>
            <td class="cocau">100,000</td>
            <td class="cocau">4500</td>
            <td class="cocau">450,000,000</td>
            <td class="cocau">10 lần</td>
          </tr>
          <tr>
            <td class="cocau">Giải bảy</td>
            <td class="cocau">40,000</td>
            <td class="cocau">60000</td>
            <td class="cocau">2,400,000,000</td>
            <td class="cocau">4 lần</td>
          </tr>
        </tbody>
      </table>
      <p>
        (Xổ số truyền thống, xổ số Thủ Đô (XSTD) hay xổ số Hà Nội(XSHN),
        XS MB truc tiep, SXMB, Xo so Mien Bac hom nay)
      </p>
    </div>
  </section>
  <?php
}
function co_cau_gt_mn()
{
  ?>
  <section class="section">
    <div class="lottery-info" style="padding: 15px;">

      <table>
        <thead>
          <h3 style="text-align: center;"><a title="Lịch mở thưởng XSKT" href="/lich-quay-xo-so.html">Lịch mở thưởng
              XSKT</a> miền Nam</h3>
          </br>
        </thead>
        <tbody>

          <?php
          global $lichQuay;
          global $arrthu;
          foreach ($arrthu as $thu) { ?>
            <tr>
              <td style="max-width: 25%; min-width: max-content; width: 25%;  ">
                <?php echo '<p style="padding: 15px;"><strong>' . $thu . '</strong></p>'; ?>
              </td>
              <td style="max-width: 75%; min-width: max-content;  ">
                <?php foreach ($lichQuay['mien-nam'] as $mien) {
                  if (in_array($thu, $mien['lichquay'])) {
                    echo '<p style="padding: 5px;"><strong><a href="' . site_url() . '/xo-so-tinh/' . $mien["key"] . '/' . '">' . $mien["label"] . '</a></strong></p>';
                  }
                  ;
                } ?>
              </td>
            </tr>
          <?php } ?>
        </tbody>

      </table>
      <p><strong>Xổ số miền Nam</strong> được mở thưởng vào lúc 16h15' hàng ngày, Quay thưởng trực tiếp Xổ số kiến thiết
        các tỉnh/ thành miền Nam hôm nay Nhanh và Chính xác.</p>
      <h3>2. Cơ cấu giải thưởng</h3>
      <p>- Vé số truyền thống miền Nam phát hành loại vé với mệnh giá 10.000đ (mười nghìn đồng). Mỗi tỉnh phát hành
        1.000.000 vé loại 6 chữ số.</p>
      <p>- Áp dụng chung cho 21 tỉnh thành khu vực miền Nam từ ngày 01-01-2017 (từ Bình Thuận vào đến Cà Mau).</p>
      <table class="text-center">
        <tbody>
          <tr>
            <td><strong>SL giải</strong></td>
            <td><strong>Tên giải</strong></td>
            <td><strong>Trùng</strong></td>
            <td><strong>Giải thưởng</strong></td>
          </tr>
          <tr>
            <td><strong>01</strong></td>
            <td><strong>Giải Đặc biệt</strong></td>
            <td><strong>6 số</strong></td>
            <td><strong>2.000.000.000đ</strong></td>
          </tr>
          <tr>
            <td>10</td>
            <td>Giải Nhất</td>
            <td>5 số</td>
            <td>30.000.000đ</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Giải Nhì</td>
            <td>5 số</td>
            <td>15.000.000đ</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Giải Ba</td>
            <td>5 số</td>
            <td>10.000.000đ</td>
          </tr>
          <tr>
            <td>70</td>
            <td>Giải Tư</td>
            <td>5 số</td>
            <td>3.000.000đ</td>
          </tr>
          <tr>
            <td>100</td>
            <td>Giải Năm</td>
            <td>4 số</td>
            <td>1.000.000đ</td>
          </tr>
          <tr>
            <td>300</td>
            <td>Giải Sáu</td>
            <td>4 số</td>
            <td>400.000đ</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>Giải Bảy</td>
            <td>3 số</td>
            <td>200.000đ</td>
          </tr>
          <tr>
            <td>10.000</td>
            <td>Giải Tám</td>
            <td>2 số</td>
            <td>100.000đ</td>
          </tr>
        </tbody>
      </table><br>
      <p>Ngoài ra còn có:</p>
      <p>+ <strong>09 giải Phụ đặc biệt</strong> dành cho các vé trúng 5 chữ số sau cùng theo thứ tự hàng của giải ĐẶC
        BIỆT 6 CHỮ SỐ (chỉ sai số đầu tiên), mỗi giải trị giá 50.000.000đ.</p>
      <p>+ <strong>45 giải Khuyến khích</strong> dành cho những vé chỉ sai 01 số ở bất cứ hàng nào so với giải ĐẶC BIỆT 6
        CHỮ SỐ (ngoại trừ sai chữ số đầu tiên), mỗi giải trị giá 6.000.000đ. Nói một cách khác Giải khuyến khích là giải
        trúng con số đầu tiên và sai 1 trong 5 con số còn lại của giải Đặc biệt 6 chữ số.</p>
      <p>Vé trùng nhiều giải được lĩnh đủ giá trị các giải.</p>
      <p>Trong ngày sẽ có đài chính, đài phụ và đài phụ 3 căn cứ theo lượng tiêu thụ và có tính tương đối tuỳ từng khu
        vực. Trong tuần mỗi tỉnh phát hành 1 kỳ vé, riêng TP.HCM phát hành 2 kỳ vé. Từ “Đài” là do người dân quen gọi sau
        1975 mỗi chiều có 3 đài radio phát kết quả xổ số của 3 tỉnh, thứ 7 có 4 tỉnh phát hành.</p>
      <p>Phân vùng thị trường tiêu thụ khác với phân vùng địa giới hành chính, ví dụ như Bình Thuận thuộc Miền Trung nhưng
        lại thuộc bộ vé liên kết Xổ Số Miền Nam.</p>
      <p><strong>Chúc bạn May mắn!</strong></p>
    </div>
  </section>

<?php }
function co_cau_gt_mt()
{
  ?>

  <section class="section">
    <div class="lottery-info">
      <table>
        <thead>
          <h3 style="text-align: center;"><a title="Lịch mở thưởng XSKT" href="/lich-quay-xo-so.html">Lịch mở thưởng
              XSKT</a> miền Trung</h3>
          </br>
        </thead>
        <tbody>

          <?php
          global $lichQuay;
          global $arrthu;
          foreach ($arrthu as $thu) { ?>
            <tr>
              <td style="max-width: 25%; min-width: max-content; width: 25%;  ">
                <?php echo '<p style="padding: 15px;"><strong>' . $thu . '</strong></p>'; ?>
              </td>
              <td style="max-width: 75%; min-width: max-content;  ">
                <?php foreach ($lichQuay['mien-trung'] as $mien) {
                  if (in_array($thu, $mien['lichquay'])) {
                    echo '<p style="padding: 5px;"><strong><a href="' . site_url() . '/xo-so-tinh/' . $mien["key"] . '/' . '">' . $mien["label"] . '</a></strong></p>';
                  }
                  ;
                } ?>
              </td>
            </tr>
          <?php } ?>
        </tbody>

      </table>
      <p><strong>Xổ số miền Trung</strong> được mở thưởng vào lúc 17h15' hàng ngày, Quay thưởng trực tiếp Xổ số kiến thiết
        các tỉnh/ thành miền Trung hôm nay Nhanh và Chính xác.</p>
      <h3>2. Cơ cấu giải thưởng</h3>
      <p>- Vé số truyền thống miền Trung, mỗi tỉnh/thành phát hành 1.000.000 vé loại 6 chữ số. Mỗi vé có mệnh giá 10.000đ
        (mười nghìn đồng).</p>
      <p>- Áp dụng chung cho 14 tỉnh thành khu vực miền Trung từ ngày 01-04-2019.</p>
      <table class="text-center">
        <tbody>
          <tr>
            <td><strong>SL giải</strong></td>
            <td><strong>Tên giải</strong></td>
            <td><strong>Trùng</strong></td>
            <td><strong>Trị giá</strong></td>
          </tr>
          <tr>
            <td>01</td>
            <td>Giải Đặc biệt</td>
            <td>6 số</td>
            <td>2.000.000.000đ</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Giải Nhất</td>
            <td>5 số</td>
            <td>30.000.000đ</td>
          </tr>
          <tr>
            <td>01</td>
            <td>Giải Nhì</td>
            <td>5 số</td>
            <td>15.000.000đ</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Giải Ba</td>
            <td>5 số</td>
            <td>10.000.000đ</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Giải Tư</td>
            <td>5 số</td>
            <td>3.000.000đ</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Giải Năm</td>
            <td>4 số</td>
            <td>1.000.000đ</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Giải Sáu</td>
            <td>4 số</td>
            <td>400.000đ</td>
          </tr>
          <tr>
            <td>100</td>
            <td>Giải Bảy</td>
            <td>3 số</td>
            <td>200.000đ</td>
          </tr>
          <tr>
            <td>1.000</td>
            <td>Giải Tám</td>
            <td>2 số</td>
            <td>100,000</td>
          </tr>
        </tbody>
      </table><br>
      <p>Ngoài ra có:</p>
      <p>+ <strong>09 giải Phụ đặc biệt</strong> dành cho những vé sai chữ số đầu tiên nhưng trùng 5 chữ số sau của giải
        ĐẶC BIỆT 6 CHỮ SỐ, mỗi giải 50 triệu đồng.</p>
      <p>+ <strong>45 giải Khuyến khích</strong> dành cho các vé trùng chữ số đầu tiên + thứ 2 và trùng 3/4 số tương ứng
        còn lại của giải ĐẶC BIỆT 6 CHỮ SỐ, mỗi giải trị giá 6 triệu đồng.</p>
      <p><strong>Chúc bạn May mắn!</strong></p>
    </div>
  </section>
  <?php
}