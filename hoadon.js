var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayOrderDetails(this);
  }
};

xhttp.open("GET", "qlbantrangsuc.xml", true);
xhttp.send();
function displayOrderDetails(xml) {
    var xmlDoc = xml.responseXML;
    var orderDetails = xmlDoc.getElementsByTagName("CTDH");
    var orderDetailList = document.getElementById("ctdh-list");
    
    for (var i = 0; i < orderDetails.length; i++) {
        var CTDH = orderDetails[i];
        var STT = (i + 1);
        var MADH = CTDH.getElementsByTagName("MADH")[0].childNodes[0].nodeValue;
        var MATS = CTDH.getElementsByTagName("MATS")[0].childNodes[0].nodeValue;
        var SOLUONG= CTDH.getElementsByTagName("SOLUONG")[0].childNodes[0].nodeValue;
        var GIA = CTDH.getElementsByTagName("GIA")[0].childNodes[0].nodeValue;
        var TONGTIEN = CTDH.getElementsByTagName("TONGTIEN")[0].childNodes[0].nodeValue;
        
        var row = document.createElement("tr");
        var STTCell = document.createElement("td");
        var MADHCell = document.createElement("td");
        var MATSCell = document.createElement("td");
        var SOLUONGCell = document.createElement("td");
        var GIACell = document.createElement("td");
        var TONGTIENCell = document.createElement("td");
        
        STTCell.innerHTML = STT;
        MADHCell.innerHTML = MADH;
        MATSCell.innerHTML = MATS;
        SOLUONGCell.innerHTML = SOLUONG;
        GIACell.innerHTML = GIA;
        TONGTIENCell.innerHTML = TONGTIEN;
        
        row.appendChild(STTCell);
        row.appendChild(MADHCell);
        row.appendChild(MATSCell);
        row.appendChild(SOLUONGCell);
        row.appendChild(GIACell);
        row.appendChild(TONGTIENCell);
        orderDetailList.appendChild(row);
    
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