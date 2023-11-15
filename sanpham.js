var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    displayProducts(this);
  }
};
xhttp.open("GET", "qlbantrangsuc.xml", true);
xhttp.send();

function displayProducts(xml) {
    var xmlDoc = xml.responseXML;
    var products = xmlDoc.getElementsByTagName("SANPHAM");
    var productList = document.getElementById("sanpham-list");
    
    for (var i = 0; i < products.length; i++) {
        var SANPHAM = products[i];
        var STT = (i + 1);
        var MATS = SANPHAM.getElementsByTagName("MATS")[0].childNodes[0].nodeValue;
        var NCC = SANPHAM.getElementsByTagName("NCC")[0].childNodes[0].nodeValue;
        var LOAITS = SANPHAM.getElementsByTagName("LOAITS")[0].childNodes[0].nodeValue;
        var TENTS = SANPHAM.getElementsByTagName("TENTS")[0].childNodes[0].nodeValue;
        var ANH = SANPHAM.getElementsByTagName("ANH")[0].childNodes[0].nodeValue;
		var BAOHANH = SANPHAM.getElementsByTagName("BAOHANH")[0].childNodes[0].nodeValue;
        var MOTA = SANPHAM.getElementsByTagName("MOTA")[0].childNodes[0].nodeValue;
        var TINHTRANG = SANPHAM.getElementsByTagName("TINHTRANG")[0].childNodes[0].nodeValue;
        var GIA = SANPHAM.getElementsByTagName("GIA")[0].childNodes[0].nodeValue;
                
		var row = document.createElement("tr");
		var STTCell = document.createElement("td");
        var MATSCell = document.createElement("td");
        var NCCCell = document.createElement("td");
        var LOAITSCell = document.createElement("td");
        var TENTSCell = document.createElement("td");
        var ANHCell = document.createElement("td");
		var BAOHANHCell = document.createElement("td");
        var MOTACell = document.createElement("td");
        var TINHTRANGCell = document.createElement("td");
        var GIACell = document.createElement("td");

		STTCell.innerHTML = STT;
		MATSCell.innerHTML = MATS;
        NCCCell.innerHTML = NCC;
        LOAITSCell.innerHTML = LOAITS;
        TENTSCell.innerHTML = TENTS;
        
        var img = document.createElement("img");
        img.src = ANH; // đặt thành giá trị ANH
        img.style.width = "100px";
        ANHCell.appendChild(img);
        
		BAOHANHCell.innerHTML = BAOHANH;
        MOTACell.innerHTML = MOTA;
        TINHTRANGCell.innerHTML = TINHTRANG;
        GIACell.innerHTML = GIA;
                 
        row.appendChild(STTCell);
        row.appendChild(MATSCell);
        row.appendChild(NCCCell);
        row.appendChild(LOAITSCell);
        row.appendChild(TENTSCell);
        row.appendChild(ANHCell);
		row.appendChild(BAOHANHCell);
        row.appendChild(MOTACell);
        row.appendChild(TINHTRANGCell);
        row.appendChild(GIACell);
		productList.appendChild(row);
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