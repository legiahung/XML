(:
1.Hiển thị tên của tất cả sản phẩm có trong cửa hàng, dc sắp xếp giảm dần theo giá trang sức:
	
for $sanpham in //SANPHAM
order by xs:float($sanpham/GIA) descending
return <TENTS>{data($sanpham/TENTS)}</TENTS>
	
2. Hiển thị mã trang sức, tên trang sức của tất cả sản phẩm có giá từ 10.000 đến 500.000:

for $s in //SANPHAM[GIA >= 10.000 and GIA <= 500.000]
return  <SANPHAM>
        <MATS>{data($s/MATS)}</MATS>
        <TENTS>{data($s/TENTS)}</TENTS>
        </SANPHAM>

3. Hiển thị tên và tên đăng nhập của tất cả khách hàng có giới tính là Nam:

for $kh in //KHACHANG[GIOITINH = 0]
return
    <KHACHANG>
        <TENKH>{data($kh/TENKH)}</TENKH>
        <TENDN>{data($kh/TENDN)}</TENDN>
    </KHACHANG>


4. Hiển thị mã nhân viên với tên nhân viên có giới tính là nữ:

for $nv in //NHANVIEN[GIOITINH = 1]
return
    <NHANVIEN>
        <MANV>{data($nv/MANV)}</MANV>
        <TEN>{data($nv/TEN)}</TEN>
    </NHANVIEN>

5. Hiển thị tên tất cả nhân viên có quyền xem:

for $q in //NHANVIEN[QUYEN = 'Xem']
return
    <NHANVIEN>
        <TEN>{data($q/TEN)}</TEN>
    </NHANVIEN>

6. Hiển thị tên của tất cả các sản phẩm thuộc loại nhẫn:

for $sp in //SANPHAM[LOAITS = 'Nhẫn']
return
    <NHANVIEN>
        <TENTS>{data($sp/TENTS)}</TENTS>
    </NHANVIEN>

7. Hiển thị tên, giới tính và số điện thoại của tất cả khách hàng có họ là họ Lê:

for $sp in //SANPHAM[LOAITS = 'Nhẫn']
return
    <SANPHAM>
        <TENTS>{data($sp/TENTS)}</TENTS>
    </SANPHAM>

8. Hiển thị giá thấp nhất, giá cao nhất, giá trung bình của các sản phẩm:

let $gia := //SANPHAM/GIA
return <GIA>{
    <MAX>{max($gia)}</MAX>,
    <MIN>{min($gia)}</MIN>,
    <AVG>{avg($gia)}</AVG>
}</GIA>

9.Lấy số điện thoại của khách hàng có tên đăng nhập là "maianh":

for $kh in //KHACHANG[TENDN="maianh"]
return data($kh/SDT)

10.Lấy danh sách khách hàng nữ (giới tính bằng 0) ở thành phố Quảng Ninh:

for $kh in //KHACHANG[DIACHI="Quảng Ninh" and GIOITINH=1]
return $kh

11.Lấy ra tổng số lượng của sản phẩm có Mã sản phẩm (MATS) là VT001:

sum(//CTDH[MATS="VT001"]/SOLUONG)

12.Lấy thông tin mã đặt hàng, ngày đặt và ngày giao của tất cả các đơn hàng:)

for $kh in //DATHANG
return
    <DATHANG>
        <MADH>{data($kh/MADH)}</MADH>
        <NGAYDAT>{data($kh/NGAYDAT)}</NGAYDAT>
        <NGAYGIAO>{data($kh/NGAYGIAO)}</NGAYGIAO>
    </DATHANG>

