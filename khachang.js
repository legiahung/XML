var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayCustomers(this);
    
  }
};
xhttp.open("GET", "qlbantrangsuc.xml", true);
xhttp.send();


function displayCustomers(xml) {
    var xmlDoc = xml.responseXML;
    var customers = xmlDoc.getElementsByTagName("KHACHANG");
    var customerList = document.getElementById("khachang-list");
    
    
    for (var i = 0; i < customers.length; i++) {
    	var KHACHANG = customers[i];
    	var STT = (i + 1);
    	var MAKH = KHACHANG.getElementsByTagName("MAKH")[0].childNodes[0].nodeValue;
    	var TENKH = KHACHANG.getElementsByTagName("TENKH")[0].childNodes[0].nodeValue;
    	var SDT = KHACHANG.getElementsByTagName("SDT")[0].childNodes[0].nodeValue;
    	var DIACHI = KHACHANG.getElementsByTagName("DIACHI")[0].childNodes[0].nodeValue;
        var EMAIL = KHACHANG.getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
        var GIOITINH = KHACHANG.getElementsByTagName("GIOITINH")[0].childNodes[0].nodeValue == 0 ? "Nam" : "Nữ";
        var TENDN = KHACHANG.getElementsByTagName("TENDN")[0].childNodes[0].nodeValue;
        var MATKHAU = KHACHANG.getElementsByTagName("MATKHAU")[0].childNodes[0].nodeValue;
        
    	var row = document.createElement("tr");
    	var STTCell = document.createElement("td");
    	var MAKHCell = document.createElement("td");
    	var TENKHCell = document.createElement("td");
    	var SDTCell = document.createElement("td");
    	var DIACHICell = document.createElement("td");
    	var EMAILCell = document.createElement("td");
    	var GIOITINHCell = document.createElement("td");
    	var TENDNCell = document.createElement("td");
    	var MATKHAUCell = document.createElement("td");
    
    	STTCell.innerHTML = STT;
    	MAKHCell.innerHTML = MAKH;
    	TENKHCell.innerHTML = TENKH;
    	SDTCell.innerHTML = SDT;
    	DIACHICell.innerHTML = DIACHI;
    	EMAILCell.innerHTML = EMAIL;
    	GIOITINHCell.innerHTML = GIOITINH;
    	TENDNCell.innerHTML = TENDN;
    	MATKHAUCell.innerHTML = MATKHAU;
    
        row.appendChild(STTCell);
    	row.appendChild(MAKHCell);
    	row.appendChild(TENKHCell);
    	row.appendChild(SDTCell);
    	row.appendChild(DIACHICell);
    	row.appendChild(EMAILCell);
    	row.appendChild(GIOITINHCell);
    	row.appendChild(TENDNCell);
    	row.appendChild(MATKHAUCell);
    	customerList.appendChild(row);
    	
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