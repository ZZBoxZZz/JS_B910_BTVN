function Validation(){
    this.kiemTraRong = function(value, errorID, mess){
        if(value === ""){
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;

    };
    this.kiemTraDoDaiKyTu = function(value,errorID,mess,min,max){
        if (min <= value.trim().length && value.trim().length <= max) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
          }
      
          getEle(errorID).innerHTML = mess;
          getEle(errorID).style.display = "block";
          return false;
    };
    this.kiemTraChuoiKiTu = function (value, errorID, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if(value.match(letter)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    };
    this.kiemTraEmail = function (value, errorID, mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(value.match(letter)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    };
    this.kiemTraMatKhau = function (value, errorID, mess) {
        var letter = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";

        if(value.match(letter)){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    };
    this.kiemTraChonChucVu = function (idSelect, errorID, mess){
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
          }
      
          getEle(errorID).innerHTML = mess;
          getEle(errorID).style.display = "block";
          return false;
    };
    this.kiemTraSoGioLam = function (value, errorID, mess){
        if (80 <= value  && value <= 200){
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display = "none";
            return true;
        }
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
    };
}
//fvws