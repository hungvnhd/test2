// // bai 1:

// // let str = prompt("mời bạn nhập chuỗi bất kì");
// // let str1 = "";
// // for (let i = str.length - 1; i >= 0; i--) {
// //   str1 = str1 + str[i];
// // }
// // console.log(str1);

// //bài 2

// // let str = prompt("Nhạp vao day").toLowerCase().split(" ");
// // let newStrArr = [];
// // for (let i = 0; i <= str.length - 1; i++) {
// //   a = str[i].split("");
// //   a[0] = a[0].toUpperCase();
// //   a = a.join("");
// //   newStrArr.push(a);
// // }
// // console.log(newStrArr.join(" "));
// //bài 3:
// // arr = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// // let a = "";
// // for (let i = 0; i <= arr.length - 1; i++) {
// //   for (let j = i + 1; j < arr.length; i++) {
// //     if (arr[i] === arr[j]) {
// //       break;
// //     }
// //     a = a + arr[i];
// //   }
// // }
// // let newarr = a.split("");
// // console.log(newarr);

// // bài 4:

// // arr = [5, 2, 3, 4, 1];
// // let temp;
// // let a = "";

// // for (let i = 0; i <= arr.length - 1; i++) {
// //   for (let j = i + 1; j < arr.length; j++) {
// //     if (arr[j] < arr[i]) {
// //       temp = arr[i];
// //       arr[i] = arr[j];
// //       arr[j] = temp;
// //     }
// //   }
// // }
// // for (i = 0; i <= arr.length - 1; i++) {
// //   a = a + arr[i];
// // }
// // console.log(a.split(""));

// // bài 5:
// // rikkei = ["A Cuong", "A Phu", "A Hai"];
// // let userInput = prompt("Mời bạn nhập vào 4 từ C/R/U/D");
// // let findIndex = -1;
// // let state = true;
// // while (state) {
// //   if (userInput === "C") {
// //     let c = prompt("Mời bạn nhập tên nhân viên muốn thêm vào");
// //     rikkei.push(c);
// //     console.log(rikkei);
// //     break;
// //   } else if (userInput === "R") {
// //     for (let i = 0; i <= rikkei.length - 1; i++) {
// //       console.log(`${i + 1}. ${rikkei[i]}`);
// //     }
// //     break;
// //   } else if (userInput === "U") {
// //     let u1 = prompt("Mời bạn nhập tên nhân viên muốn thay thế");
// //     let u2 = prompt("Bạn muốn thay nhân viên này bằng ai?");
// //     for (let i = 0; i <= rikkei.length - 1; i++) {
// //       if (u1 === rikkei[i]) {
// //         findIndex = i;
// //       }
// //       if (findIndex != -1) {
// //         rikkei[findIndex] = u2;
// //       }
// //       console.log(`${i + 1}. ${rikkei[i]}`);
// //     }

// //     break;
// //   } else if (userInput === "D") {
// //     let d = prompt("Mời bạn nhập tên nhân viên muốn đuổi việc");
// //     rikkei.splice(d, 1);
// //     console.log(rikkei);
// //     break;
// //   }
// // }

// //bài 6 :

let d = Number(prompt("xin mời nhập ngày"));
let m = Number(prompt("xin mời nhập tháng"));
let y = Number(prompt("xin mời nhập năm"));

if ((y > 0 && y % 1 === 0 && y % 4 === 0 && y % 100 != 0) || y % 400 === 0) {
  switch (m) {
    case 1:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 2:
      if (d > 0 && d % 1 === 0 && d <= 29) {
        console.log("ngày hợp lệ");
        if (d === 29) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 3:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 4:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 5:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 6:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 7:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 8:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 9:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 10:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 11:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 12:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${1}/${y + 1} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;

    default:
      console.log("ngày ko hợp lệ");
  }
} else if (y > 0 && y % 1 === 0) {
  switch (m) {
    case 1:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 2:
      if (d > 0 && d % 1 === 0 && d <= 28) {
        console.log("ngày hợp lệ");
        if (d === 28) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 3:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 4:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 5:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 6:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 7:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 8:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 9:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 10:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 11:
      if (d > 0 && d % 1 === 0 && d <= 30) {
        console.log("ngày hợp lệ");
        if (d === 30) {
          console.log(`ngày tiếp theo là ${1}/${m + 1}/${y} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;
    case 12:
      if (d > 0 && d % 1 === 0 && d <= 31) {
        console.log("ngày hợp lệ");
        if (d === 31) {
          console.log(`ngày tiếp theo là ${1}/${1}/${y + 1} `);
        } else {
          console.log(`ngày tiếp theo là ${d + 1}/${m}/${y} `);
        }
      } else {
        console.log("ngày ko hợp lệ");
      }
      break;

    default:
      console.log("ngày ko hợp lệ");
  }
} else {
  console.log("ngày ko hợp lệ");
}
