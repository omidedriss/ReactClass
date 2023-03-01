import "./student.css";

const Student=()=>{
return(<div>
<label>شماره دانشجویی:</label>
<label>نام و نام خانوادگی:</label>
<input type="text"></input>
<label>کلاس</label>
<input type="text"></input>
<label>شماره تلفن</label>
<input type="number"></input>
<label>ایمیل</label>
<input type="email"></input>
<button btnType="danger">حذف</button>
</div>)
}

export default Student;
