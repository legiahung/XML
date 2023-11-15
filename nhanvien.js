var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayEmployees(this);
    displaySuppliers(this);
  }
};
xhttp.open("GET", "qlbantrangsuc.xml", true);
xhttp.send();
function displayEmployees(xml) {
    var xmlDoc = xml.responseXML;
    var employees = xmlDoc.getElementsByTagName("NHANVIEN");
    var employeeList = document.getElementById("nhanvien-list");
    
    for (var i = 0; i < employees.length; i++) {
        var NHANVIEN = employees[i];
        var STT = (i + 1);
        var MANV = NHANVIEN.getElementsByTagName("MANV")[0].childNodes[0].nodeValue;
        var TEN = NHANVIEN.getElementsByTagName("TEN")[0].childNodes[0].nodeValue;
        var GIOITINH = NHANVIEN.getElementsByTagName("GIOITINH")[0].childNodes[0].nodeValue == 0 ? "Nam" : "Nữ";
        var SDT = NHANVIEN.getElementsByTagName("SDT")[0].childNodes[0].nodeValue;
        var NGAYSINH = NHANVIEN.getElementsByTagName("NGAYSINH")[0].childNodes[0].nodeValue;
        var TENDN = NHANVIEN.getElementsByTagName("TENDN")[0].childNodes[0].nodeValue;
        var MATKHAU = NHANVIEN.getElementsByTagName("MATKHAU")[0].childNodes[0].nodeValue;
        var QUYEN = NHANVIEN.getElementsByTagName("QUYEN")[0].childNodes[0].nodeValue;
        
        var row = document.createElement("tr");
        var STTCell = document.createElement("td");
        var MANVCell = document.createElement("td");
        var TENCell = document.createElement("td");
        var GIOITINHCell = document.createElement("td");
        var SDTCell = document.createElement("td");
        var NGAYSINHCell = document.createElement("td");
        var TENDNCell = document.createElement("td");
        var MATKHAUCell = document.createElement("td");
        var QUYENCell = document.createElement("td");
        
        STTCell.innerHTML = STT;
        MANVCell.innerHTML = MANV;
        TENCell.innerHTML = TEN;
        GIOITINHCell.innerHTML = GIOITINH;
        SDTCell.innerHTML = SDT;
        NGAYSINHCell.innerHTML = NGAYSINH;
        TENDNCell.innerHTML = TENDN;
        MATKHAUCell.innerHTML = MATKHAU;
        QUYENCell.innerHTML = QUYEN;
        
        row.appendChild(STTCell);
        row.appendChild(MANVCell);
        row.appendChild(TENCell);
        row.appendChild(GIOITINHCell);
        row.appendChild(SDTCell);
        row.appendChild(NGAYSINHCell);
        row.appendChild(TENDNCell);
        row.appendChild(MATKHAUCell);
        row.appendChild(QUYENCell);
        employeeList.appendChild(row);
    }
}

// Tạo nút input để upload file
    var inputElement = document.createElement("input");

// Thiết lập các thuộc tính của nút input
    inputElement.type = "file";
    inputElement.name = "fileInput";

// Thêm sự kiện onchange để lấy thông tin file được chọn
inputElement.addEventListener("change", function() {
  var file = inputElement.files[0];
  var fileReader = new FileReader();

// Đọc nội dung text của file
  fileReader.readAsText(file);

// Xử lý khi file được đọc thành công
fileReader.onload = function() {
    var fileContent = fileReader.result;
    console.log("Nội dung của file: ", fileContent);

    // Mở một cửa sổ mới và hiển thị nội dung của file
    var newWindow = window.open();
    var preElement = newWindow.document.createElement("pre");
    var contentNode = newWindow.document.createTextNode(fileContent);
    preElement.appendChild(contentNode);
    newWindow.document.body.appendChild(preElement);
  };
});
// Thêm nút input vào HTML DOM
    document.body.appendChild(inputElement);