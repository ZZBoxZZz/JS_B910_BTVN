function NhanVien(_taiKhoan, _tenNV,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam)
{
    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.luong = 0;

    //method 
    this.tinhTienLuong = function(luongCoban, chucvu){
        if(getEle(chucvu).value  == "Sếp"){
            this.luong = (parseInt(luongCoban) *3);
        } else if(getEle(chucvu).value == "Trưởng phòng"){
            this.luong = (parseInt(luongCoban) *2);
        } else {
            this.luong = (parseInt(luongCoban) *1);
        }
        
    };
}
//nh