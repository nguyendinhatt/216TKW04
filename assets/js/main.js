var shoppingCartItems = [];
var arrTotal = [];
function load(){
    $(document).ready(function () {
    displayShoppingCartItems();
});
}

function addtocart() {
    load();
    var T01 = document.getElementById("T01");
    var a = div1.getAttribute("data-name");
    alert(a);

    var button = $(this); // Lấy đối tượng button mà người dùng click
    var id = button.attr("id"); // id của sản phẩm là id của button
    var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
    var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
    var quantity = 1; // Số lượng
    var sum = 0;
    var item = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
    };
    alert(item);
    var intPrice= parseInt(item.price);
    arrTotal.push(intPrice);
    for( var count = 0; count < arrTotal.length; count++){
        sum = sum + arrTotal[count];
    }
    $("#sumtotal").html("<h2>"+"Sumtotal: "+sum+"</h2>");
    var exists = false;
    if (shoppingCartItems.length > 0) {
        $.each(shoppingCartItems, function (index, value) {
            // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
            if (value.id == item.id) {
                value.quantity++;
                exists = true;
                return false;
            }
        });
    }
    // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
    if (!exists) {
        shoppingCartItems.push(item);
    }
    displayShoppingCartItems();
}

// Xóa hết giỏ hàng shoppingCartItems
function clearCart() {
    arrTotal = [];
    sum = 0;
    shoppingCartItems = [];
    $("#table-products > tbody").html("");
    $("#sumtotal").html("");
}
function displayShoppingCartItems() {

        $("#table-products > tbody").html("");
        $.each(shoppingCartItems, function (index, item) {
            var htmlString = "";
            htmlString += "<tr>";
            htmlString += "<td>" + item.id + "</td>";
            htmlString += "<td>" + item.name + "</td>";
            htmlString += "<td style='text-align: center'>" + item.price + "</td>";
            htmlString += "<td style='text-align: center'>" + item.quantity + "</td>";
            htmlString += "<td style='text-align: right'>" + item.price * item.quantity + "</td>";
            htmlString += "</tr>";
            $("#table-products > tbody:last").append(htmlString);
        });
}