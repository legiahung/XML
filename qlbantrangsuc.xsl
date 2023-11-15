<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Quản lí bán trang sức</h2>
                <h3>Quản lí sản phẩm</h3>
                <table border="1">
                    <tr  bgcolor="#E0BBE4">
                        <th>STT</th>
                        <th>Mã trang sức</th>
                        <th>Nhà cung cấp</th>
                        <th>Loại trang sức</th>
                        <th>Tên trang sức</th> 
                        <th>Ảnh</th>
                        <th>Bảo hành</th>
                        <th>Mô tả</th>
                        <th>Tình trạng</th>
                        <th>Giá</th>
                    </tr>
                    <xsl:for-each select="QLBANTS/SANPHAM">
                        <xsl:sort select="TENTS"/>
                        <tr>
                            <td> <xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="MATS"/></td>
                            <td><xsl:value-of select="NCC"/></td>
                            <td><xsl:value-of select="LOAITS"/></td>    
                            <td><xsl:value-of select="TENTS"/></td>
                            <td><xsl:value-of select="ANH"/></td>
                            <td><xsl:value-of select="BAOHANH"/></td>
                            <td><xsl:value-of select="MOTA"/></td>
                            <td><xsl:value-of select="TINHTRANG"/></td>
                            <td><xsl:value-of select="GIA"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h3>Quản lí khách hàng</h3>
                <table border="1">
                    <tr  bgcolor="#957DAD">
                        <th>STT</th>
                        <th >Mã khách hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th> 
                        <th>Email</th>
                        <th>Giới tính</th>
                        <th>Tên đăng nhập</th>
                        <th >Mật khẩu</th>
                    </tr>
                    <xsl:for-each select="QLBANTS/KHACHANG">
                        <tr>
                            <td><xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="MAKH"/></td>
                            <td><xsl:value-of select="TENKH"/></td>
                            <td><xsl:value-of select="SDT"/></td>
                            <td><xsl:value-of select="DIACHI"/></td>
                            <td><xsl:value-of select="EMAIL"/></td>
                            <td>
                                <xsl:if test="GIOITINH=1">
                                    Nữ
                                </xsl:if>
                                <xsl:if test="GIOITINH=0">
                                    Nam                                
                                </xsl:if>
                            </td>
                            <td><xsl:value-of select="TENDN"/></td>
                            <td><xsl:value-of select="MATKHAU"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h3>Quản lí nhân viên</h3>
                <table border="1">
                    <tr  bgcolor="#D291BC">
                        <th>STT</th>
                        <th >Mã nhân viên</th>
                        <th>Tên nhân viên</th>
                        <th>Giới tính</th>
                        <th>Số điện thoại</th>
                        <th>Ngày sinh </th> 
                        <th>Tên đăng nhập</th>
                        <th>Mật khẩu</th>
                        <th>Quyền</th> 
                    </tr>
                    <xsl:for-each select="QLBANTS/NHANVIEN">
                        <tr>
                            <td> <xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="MANV"/></td>
                            <td><xsl:value-of select="TEN"/></td>
                            <td>
                                <xsl:if test="GIOITINH=1">
                                    Nữ
                                </xsl:if>
                                <xsl:if test="GIOITINH=0">
                                    Nam                                
                                </xsl:if>
                            </td>
                            <td><xsl:value-of select="SDT"/></td>
                            <td><xsl:value-of select="NGAYSINH"/></td>
                            <td><xsl:value-of select="TENDN"/></td>
                            <td><xsl:value-of select="MATKHAU"/></td>
                            <td><xsl:value-of select="QUYEN"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h3>Quản lí đơn hàng</h3>
                <table border="1">
                    <tr  bgcolor="#FEC8D8">
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Mã nhân viên duyệt</th>
                        <th>Mã khách hàng</th>
                        <th>Phương thức thanh toán</th>
                        <th>Ngày đặt</th>
                        <th>Ngày giao</th>
                        <th>Số điện thoại người nhận</th>
                        <th>Địa chỉ</th>
                        <th>Tình trạng</th>
                    </tr>
                    <xsl:for-each select="QLBANTS/DATHANG">
                        <tr>
                            <td> <xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="MADH"/></td>
                            <td><xsl:value-of select="MANV"/></td>
                            <td><xsl:value-of select="MAKH"/></td>
                            <td><xsl:value-of select="PTTT"/></td>
                            <td><xsl:value-of select="NGAYDAT"/></td>
                            <td><xsl:value-of select="NGAYGIAO"/></td>
                            <td><xsl:value-of select="SDTNGUOINHAN"/></td>
                            <td><xsl:value-of select="DIACHI"/></td>
                            <td><xsl:value-of select="TINHTRANG"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
                <h3>Quản lí chi tiết hóa đơn</h3>
                <table border="1">
                    <tr  bgcolor="#FFDFD3">
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Mã sách</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Tổng tiền</th>
                    </tr>
                    <xsl:for-each select="QLBANTS/CTDH">
                        <tr>
                            <td> <xsl:value-of select="position()"/></td>
                            <td><xsl:value-of select="MADH"/></td>
                            <td><xsl:value-of select="MATS"/></td>
                            <td><xsl:value-of select="SOLUONG"/></td>
                            <td><xsl:value-of select="GIA"/></td>
                            <td><xsl:value-of select="TONGTIEN"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>