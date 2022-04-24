function hocsinh(tenhs, mssv, khoa){
    this.tenhs=tenhs,
    this.mssv=mssv,
    this.khoa=khoa
}
var a = new hocsinh('Thien Tu','123','44')
var b = new hocsinh('Tri Nguyen','234','44')
var c = new hocsinh('Huy Vo','456','44')

var arr = [
    a,
    b,
    c
]
console.log(arr)
var printName = arr.forEach(function(arr,index){
    console.log(arr.tenhs)
})


var isKhoa44 = arr.every(function(arr,index){
    return arr.khoa == '44'
})
console.log(isKhoa44)

//forEach - duyet qua tung ptu thuc hien function o ptu do
//every - duyet qua tung ptu xet dkien and -> return boolean
//some(or) - >< every
//find - tim ptu dung dkien xet va dung lai-> return 1 object

var is123 = arr.find(function(arr,index){
    return arr.mssv == '123'
})
console.log(is123)

//map - tim va thay doi ptu trong mang -> return 1 mang moi da thay doi ptu
var testMap = arr.map(function(arr){
    return{
        tenhs:arr.tenhs,
        mssv:arr.mssv
    }
})
console.log(testMap)

//reduce - duyet qua mang -> cong don vao gia tri tra ve neu hop le

var testReduce = arr.reduce((temp,element,index)=>{
    return temp + element.tenhs + '\n';    
},'')
console.log(testReduce)

//filter - loc ra cac ptu dung dkien xet -> return 1 mang chua tat ca ptu hop le
var testFilter = arr.filter(function(element,index){
    var temp = element.tenhs.slice(-6,element.tenhs.length)
    
    return temp == 'Nguyen'
})
console.log(testFilter)