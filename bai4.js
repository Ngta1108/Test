let nhanvien  = [
    ["Nguyễn Thị A", 30, 5000000, "Trưởng phòng"],
    ["Nguyễn Văn B", 20, 7000000, "Thư ký"],
    ["Nguyễn Châu C", 19, 9000000, "Nhân viên"],
  ];
  
  function readnhanvien(nhanvien) {
    for (let i = 0; i < nhanvien.length; i++){
        console.log(' Tên ' + nhanvien[i][0] + ' - tuổi: ' + nhanvien[i][1] + ' - mức lương: ' + nhanvien[i][2] + ' - chức vụ: ' + nhanvien[i][3]);
    }
  }
  
  function createnhanvien(tennhanvien, tuoi, luong, chucVu) {

    nhanvien.push([tennhanvien, tuoi, luong, chucVu]);
    readnhanvien();
  }
  

  function updatenhanvien(tennhanvien = "", tuoi = 0, luong = 0, chucVu = "") {
    if (tennhanvien != "") {
      for (let i = 0; i < nhanvien.length; i++) {
        if (nhanvien[i][0] == tennhanvien) {
          nhanvien[i][0] = tennhanvien;
          nhanvien[i][1] = tuoi;
          nhanvien[i][2] = luong;
          nhanvien[i][3] = chucVu;
        }
      }
    }
    readnhanvien();
  }
  
  function deletenhanvien(tennhanvien) {
    for (let i = 0; i < nhanvien.length; i++) {
      if (nhanhvien[i][0] == tennhanvien) {
        nhanvien.splice(i, 1);
      }
    }
    readnhanvien();
  }