const listData = [
    {
        name: "Alice",
        phone: "(816)-403-5456",
    },
    {
        name: "Bob",
        phone: "(572)-566-2397",
    },
    {
        name: "Cris",
        phone: "(864)-309-4841",
    },
    {
        name: "Daniel",
        phone: "(816)-403-5456",
    },
];

function render(arr) {
    arr.sort((a, b) => {
        return a.name.toUpperCase() > b.name ? 1 : -1;
    });
    document.querySelector(".main").innerHTML = arr
        .map((item) => {
            return `<div class="item">
                        <div class="name">${item.name}</div>
                        <div class="phone">${item.phone}</div>
                    </div>`;
        })
        .join("");


}
render(listData);
document.querySelector("#add").addEventListener("click", () => {
    let nameInput = document.querySelector(".name1").value;
    let phoneInput = document.querySelector(".phone1").value;
    listData.push({ name: nameInput, phone: phoneInput });
    render(listData);
});

document.querySelector("#find").addEventListener("click", () => {
    let info = document.querySelector(".search input").value;
    let findData = listData.filter(
        (item) =>
            item.name.toLocaleLowerCase().includes(info) || item.phone.includes(info)
    );
    console.log(listData);
    console.log(findData);
    findData.length == 0 ? document.querySelector(".main").innerText = 'không tìm thấy' : render(findData);
});
