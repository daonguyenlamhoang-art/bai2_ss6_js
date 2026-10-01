let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;
let memberName = "";
let memberPackage = "";
let months = 0;
let ptSessions = 0;
let memberCard = "";
let choice;
const STANDARD_PRICE = 500000;
const VIP_PRICE = 800000;
const PT_PRICE = 300000;
const currentYear = new Date().getFullYear();
do {
    console.log(`
===== GYM FITNESS =====
1. Dang ky hoi vien
2. Tinh tien goi tap
3. Quet ma the check-in
4. Bao cao va thoat
`);

    choice = prompt("Nhap lua chon:");
    switch (choice) {
        case "1":
            memberName = prompt("Nhap ten hoi vien:").trim();
            memberPackage = prompt("Nhap goi tap STANDARD hoac VIP:").trim().toUpperCase();
            memberCard = prompt("Nhap ma the hoi vien:").trim().toUpperCase();
            if (memberName !== "" && (memberPackage === "STANDARD" || memberPackage === "VIP")) {
                registeredMembers++;
                console.log("Dang ky hoi vien thanh cong!");
                console.log("Ho ten:", memberName);
                console.log("Goi tap:", memberPackage);
                console.log("Ma the:", memberCard);
            } 
            else {
                console.log("Thong tin dang ky khong hop le!");
            }
            break;
        case "2":
            if (registeredMembers === 0) {
                console.log("Khong the tinh tien: Chua dang ky hoi vien!");
            } 
            else {
                months = Number(prompt("Nhap so thang dang ky:"));
                ptSessions = Number(prompt("Nhap so buoi PT:"));
                let packagePrice = 0;
                if (memberPackage === "STANDARD") {
                    packagePrice = STANDARD_PRICE;
                } 
                else if (memberPackage === "VIP") {
                    packagePrice = VIP_PRICE;
                }
                let totalBeforeDiscount = (packagePrice * months) + (PT_PRICE * ptSessions);
                let discountPercent = 0;

                if (months >= 12) {
                    discountPercent = 25;
                } 
                else if (months >= 6) {
                    discountPercent = 15;
                }

                let discountAmount = totalBeforeDiscount * discountPercent / 100;
                let finalPayment = totalBeforeDiscount - discountAmount;
                totalRevenue = totalRevenue + finalPayment;
                console.log(`
                    ----------------------------------------
                    HOA DON GOI TAP
                    ----------------------------------------
                    Hoi vien: ${memberName}
                    Goi tap: ${memberPackage}
                    So thang: ${months}
                    So buoi PT: ${ptSessions}
                    Tien goi tap: ${packagePrice * months} VNĐ
                    Tien PT: ${PT_PRICE * ptSessions} VNĐ
                    Tong tien: ${totalBeforeDiscount} VNĐ
                    Chiet khau: ${discountPercent}%
                    Tien giam: ${discountAmount} VNĐ
                    THANH TOAN: ${finalPayment} VNĐ
                    ----------------------------------------
                    `);
            }
            break;
        case "3":
            memberCard = prompt("Nhap ma the check-in:").trim().toUpperCase();
            const expectedYear = currentYear.toString();
            if (memberCard.startsWith("GYM-") && memberCard.endsWith(expectedYear)) {
                checkInCount++;
                console.log("Check-in thanh cong!");
                console.log("Ma the:", memberCard);
            } 
            else {
                console.log("Ma the khong hop le!");
            }
            break;

        case "4":
            console.log(`
                ========================================
                    BAO CAO CA TRUC GYM FITNESS
                ========================================
                So hoi vien da dang ky: ${registeredMembers}
                So luot check-in: ${checkInCount}
                Tong doanh thu: ${totalRevenue} VNĐ
                ========================================
                `);
            console.log("Da ket thuc ca truc.");
            break;
        default:
            console.log("Lua chon khong hop le!");
    }

} 
while (choice !== "4");