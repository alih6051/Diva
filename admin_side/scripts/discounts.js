// Getting and adding Coupons from Server
const getCoupons = async () => {
  try {
    let res = await fetch(`https://diva-mock-server.onrender.com/coupons`);
    let data = await res.json();
    couponsAppend(data);
  } catch (err) {}
};

getCoupons();

// Coupons Append Function
const couponsAppend = (data) => {
  document.getElementById("coupons_tbody").innerHTML = "";
  data.forEach(({ id, status, code, amount, description }) => {
    let tr = document.createElement("tr");

    let code_td = document.createElement("td");
    code_td.innerText = code;

    let des = document.createElement("td");
    des.innerText = description;

    let amount_td = document.createElement("td");
    amount_td.innerText = amount;

    let status_td = document.createElement("td");
    let btn = document.createElement("button");
    if (status) {
      btn.classList.add("status_active");
      btn.innerText = "Active";
    } else {
      btn.classList.add("status_inactive");
      btn.innerText = "Inactive";
    }
    status_td.append(btn);
    btn.onclick = (e) => {
      updateStatus(id, btn.innerText);
      if (e.target.innerText == "Active") {
        e.target.classList.add("status_inactive");
        e.target.classList.remove("status_active");
        e.target.innerText = "Inactive";
      } else {
        e.target.classList.add("status_active");
        e.target.classList.remove("status_inactive");
        e.target.innerText = "Active";
      }
    };

    let del_td = document.createElement("td");
    let del_icon = document.createElement("i");
    del_icon.classList.add("fa-solid", "fa-trash-can", "del_icon");
    del_td.append(del_icon);
    // Remove Coupon
    del_icon.onclick = (e) => {
      if (confirm("Press Ok! to Remove")) {
        removeCoupon(id);
        e.target.parentNode.parentNode.remove();
      }
    };

    tr.append(code_td, des, amount_td, status_td, del_td);
    document.getElementById("coupons_tbody").append(tr);
  });
};

//update Status : true||false
const updateStatus = async (id, btn_text) => {
  if (btn_text == "Active") {
    let dataToSend = {
      status: false,
    };
    let res = await fetch(
      `https://diva-mock-server.onrender.com/coupons/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let data = await res.json();
  } else {
    let dataToSend2 = {
      status: true,
    };
    let resagain = await fetch(
      `https://diva-mock-server.onrender.com/coupons/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(dataToSend2),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    let data2 = await resagain.json();
  }
  // console.log(btn_text);
};

// Remove Coupons
const removeCoupon = async (id) => {
  let res = await fetch(`https://diva-mock-server.onrender.com/coupons/${id}`, {
    method: "DELETE",
  });
  alert("Coupon Remove!");
};

// Handle Coupon Search
let searchBtn = document.getElementById("search_coupon_btn");
searchBtn.onclick = () => {
  let input_coupon = document.getElementById("search_coupon").value;
  search_coupon_data(input_coupon.toUpperCase());
};

const search_coupon_data = async (d) => {
  let res = await fetch(`https://diva-mock-server.onrender.com/coupons`);
  let data = await res.json();
  data = data.filter(({ code }) => {
    return code.includes(d);
  });
  couponsAppend(data);
};

// Adding Coupon Function
let add_coupon_btn = document.getElementById("add_coupon");
add_coupon_btn.onclick = async () => {
  try {
    let coupon_to_add = {
      code: prompt("Enter the Coupon Code").toUpperCase(),
      description: prompt("Enter the Coupon Description"),
      amount: prompt("Enter the Discount Percentage"),
      status: true,
    };

    if (
      coupon_to_add.code == "" ||
      coupon_to_add.description == "" ||
      coupon_to_add.amount == ""
    ) {
      alert("Please Enter a Vaild Coupon Details");
      return;
    }

    let res = await fetch(`https://diva-mock-server.onrender.com/coupons`, {
      method: "POST",
      body: JSON.stringify(coupon_to_add),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Coupon Added Sucessfully");
  } catch (err) {
    console.log(err);
  }
};
