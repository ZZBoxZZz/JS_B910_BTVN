var dsnv = new DanhSachNhanVien();

function getEle(id) {
    return document.getElementById(id);
  }


function layThongTinNV(){
    var taiKhoan = getEle("tknv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var luongCoBan = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("tbGiolam").value;

    // tao doi tuong nv
    var nv = new NhanVien(taiKhoan, tenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam);
    return nv;
}
getEle("btnThem").onclick = function(){
    getEle("myForm").reset();
    var curDate = new Date();
      
    // Ngày hiện tại
    var curDay = curDate.getDate();
 
    // Tháng hiện tại
    var curMonth = curDate.getMonth() + 1;
      
    // Năm hiện tại
    var curYear = curDate.getFullYear();
 
    // Gán vào thẻ HTML
    var tuanduy = curDay + "/" + curMonth + "/" + curYear;
    getEle('datepicker').value = tuanduy;
}
/**
 * Them NV
 * 
 */

getEle("btnThemNV").onclick = function (){
    console.log("dwf");
    var nv = layThongTinNV();

    dsnv.themNV(nv);
    renderTable(dsnv.arr);
}

function renderTable(data){
    var content = '';

    for (var i = 0; i < data.length ; i++){
        var nv = data[i];
        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.matKhau}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.luongCoBan}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.gioLam}</td>
            </tr>
           
        `;
    }
    getEle("tableDanhSach").innerHTML = content;
}