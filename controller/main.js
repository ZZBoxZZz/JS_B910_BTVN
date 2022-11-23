var dsnv = new DanhSachNhanVien();
var validation = new Validation();

function getEle(id) {
    return document.getElementById(id);
  }


function layThongTinNV(isAdd){
    var taiKhoan = getEle("tknv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var matKhau = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var luongCoBan = getEle("luongCB").value;
    var chucVu = getEle("chucvu").value;
    var gioLam = getEle("gioLam").value;

    //flag
    var isValid = true;

    if(isAdd){
        //tk
        isValid &= validation.kiemTraRong(taiKhoan,"errorTK", 'chưa nhập gì hết') && validation.kiemTraDoDaiKyTu(taiKhoan,"errorTK",'(*) Vui long nhap ky tu 4 - 6',4,6);
        
        //ten
        isValid &= validation.kiemTraRong(tenNV,"tbTen", 'chưa nhập gì hết') && validation.kiemTraChuoiKiTu(tenNV,"tbTen", 'không đúng');
    
        //email
    
        isValid &= validation.kiemTraRong(email,"tbEmail", 'chưa nhập gì hết') && validation.kiemTraEmail(email,"tbEmail", 'sai định dạng email');
    
        //matKhau

        isValid &= validation.kiemTraRong(matKhau,"tbMatKhau", 'chưa nhập gì hết') && validation.kiemTraDoDaiKyTu(matKhau,"tbMatKhau",'(*) Vui long nhap ky tu 6 - 8',6,8) && validation.kiemTraMatKhau(matKhau,"tbMatKhau", 'sai định dạng mật khẩu');
        
        //ngayLam

        isValid &= validation.kiemTraRong(ngayLam,"tbNgay", 'chưa nhập gì hết');

        //luongCoBan

        isValid &= validation.kiemTraRong(luongCoBan,"tbLuongCB", 'chưa nhập gì hết');

        //chucVu
        isValid &= validation.kiemTraChonChucVu("chucvu","tbChucVu", 'chưa nhập gì hết');
        //gioLam

        isValid &= validation.kiemTraRong(gioLam,"tbGiolam", 'chưa chọn gì hết') && validation.kiemTraSoGioLam(gioLam,"tbGiolam", 'nhập trong khoảng 80- 200');


    }   
    //d
    if (!isValid) return;

    // tao doi tuong nv
    var nv = new NhanVien(taiKhoan, tenNV,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam);

    nv.tinhTienLuong(luongCoBan, "chucvu");

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
    //console.log("dwf");
    var nv = layThongTinNV(true);
    if (nv){
        dsnv.themNV(nv);
        console.log(dsnv.arr);
        renderTable(dsnv.arr);
    }
    
}
function deleteNV(taiKhoan){
    
    dsnv.xoaSV(taiKhoan);
    
    renderTable(dsnv.arr);
   
    
}
// f
function renderTable(data){
    var content = '';

    for (var i = 0; i < data.length ; i++){
        var nv = data[i];
        console.log(nv);
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
                <td>${nv.luong}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteSV('${nv.taiKhoan}')">Delete
                    </button>
                </td>
            </tr>
           
        `;
    }
    getEle("tableDanhSach").innerHTML = content;
};

function deleteSV(taiKhoan){
    dsnv.xoaNV(taiKhoan);

    renderTable(dsnv.arr);

}

