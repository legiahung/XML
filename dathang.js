var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    displayOrders(this);
    displayOrderDetails(this);
  }
};
xhttp.open("GET", "qlbantrangsuc.xml", true);
xhttp.send();

function displayOrders(xml) {
    var xmlDoc = xml.responseXML;
    var orders = xmlDoc.getElementsByTagName("DATHANG");
    var orderList = document.getElementById("dathang-list");
    
    
    for (var i = 0; i < orders.length; i++) {
        var DATHANG = orders[i];
        var STT = (i + 1);
        var MADH = DATHANG.getElementsByTagName("MADH")[0].childNodes[0].nodeValue;
        var MANV = DATHANG.getElementsByTagName("MANV")[0].childNodes[0].nodeValue;
        var MAKH = DATHANG.getElementsByTagName("MAKH")[0].childNodes[0].nodeValue;
        var PTTT = DATHANG.getElementsByTagName("PTTT")[0].childNodes[0].nodeValue;
        var NGAYDAT = DATHANG.getElementsByTagName("NGAYDAT")[0].childNodes[0].nodeValue;
        var NGAYGIAO = DATHANG.getElementsByTagName("NGAYGIAO")[0].childNodes[0].nodeValue;
        var SDTNGUOINHAN = DATHANG.getElementsByTagName("SDTNGUOINHAN")[0].childNodes[0].nodeValue;
        var DIACHI = DATHANG.getElementsByTagName("DIACHI")[0].childNodes[0].nodeValue;
        var TINHTRANG = DATHANG.getElementsByTagName("TINHTRANG")[0].childNodes[0].nodeValue;
        
        var row = document.createElement("tr");
        var STTCell = document.createElement("td");
        var MADHCell = document.createElement("td");
        var MANVCell = document.createElement("td");
        var MAKHCell = document.createElement("td");
        var PTTTCell = document.createElement("td");
        var NGAYDATCell = document.createElement("td");
        var NGAYGIAOCell = document.createElement("td");
        var SDTNGUOINHANCell = document.createElement("td");
        var DIACHICell = document.createElement("td");
        var TINHTRANGCell = document.createElement("td");
        
        STTCell.innerHTML = STT;
        MADHCell.innerHTML = MADH;
        MANVCell.innerHTML = MANV;
        MAKHCell.innerHTML = MAKH;
        PTTTCell.innerHTML = PTTT;
        NGAYDATCell.innerHTML = NGAYDAT;
        NGAYGIAOCell.innerHTML = NGAYGIAO;
        SDTNGUOINHANCell.innerHTML = SDTNGUOINHAN;
        DIACHICell.innerHTML = DIACHI;
        TINHTRANGCell.innerHTML = TINHTRANG;
        
        row.appendChild(STTCell);
        row.appendChild(MADHCell);
        row.appendChild(MANVCell);
        row.appendChild(MAKHCell);
        row.appendChild(PTTTCell);
        row.appendChild(NGAYDATCell);
        row.appendChild(NGAYGIAOCell);
        row.appendChild(SDTNGUOINHANCell);
        row.appendChild(DIACHICell);
        row.appendChild(TINHTRANGCell);
        orderList.appendChild(row);
        
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