import { useState } from "react";
import './Colours.css';

function StudentMarks() {

    const [m1, setMarks1] = useState();
    const [m2, setMarks2] = useState();
    const [m3, setMarks3] = useState();
    const [m4, setMarks4] = useState();
    const [m5, setMarks5] = useState();
    const [m6, setMarks6] = useState();
    const [m7, setMarks7] = useState();
    const [m8, setMarks8] = useState();
    const [m9, setMarks9] = useState();
    const [tot, setTot] =  useState(); 
    const [average, setAvg] =  useState(); 
    const [gradee, setGrade] =  useState(); 
    var total;
    var grade;
    var avg;
function handleClick()
{

  total= Number(m1) + Number(m2) + Number(m3) + Number(m4) +Number(m5)+Number(m6)+Number(m7)+Number(m8)+Number(m9);
  setTot(total); 

  avg =  Number(total/9);

  setAvg(avg); 

  if(avg > 70)
  {
    grade = "Excellent"
  }
  else if(avg > 50)
  {
    grade = "good"
  }
  else if(avg > 35)
  {
    grade = "pass"
  }

  else
  {
    grade = "fail"
  }

  setGrade(grade); 

}

    return (
      <div  class="container">
   
        <h1 class="header"><b>Student Marks Calculation</b></h1>
       <div class="subject">
        <label><b><font color="#500646">Sinhala</font></b></label>
        <input type="text" name="m1" class="form-control" onChange={(event) =>
                {
                  setMarks1(event.target.value);      
                }}>
        </input>
        </div>
        <br/>
              
        <div class="subject">
        <label><b><font color="#500646">English</font></b></label>
        <input type="text" name="m2"  class="form-control" onChange={(event) =>
                {
                  setMarks2(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>

         <div class="subject">
        <label><b><font color="#500646">History</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks3(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>


         <div class="subject">
        <label><b><font color="#500646">Science</font></b></label>
        <input type="text" name="m3" background="#ff0011" class="form-control" onChange={(event) =>
                {
                  setMarks4(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>

         <div class="subject">
        <label><b><font color="#500646">Mathematics</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks5(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>

         <div class="subject">
        <label><b><font color="#500646">Buddhism</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks6(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>


         <div class="subject">
        <label><b><font color="#500646">1 st catogory</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks7(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>

         <div class="subject">
        <label><b><font color="#500646">2 nd catogory</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks8(event.target.value);      
                }}>
         </input> 
         </div>
         <br/>


         <div class="subject">
        <label><b><font color="#500646">3 rd catogory</font></b></label>
        <input type="text" name="m3"  class="form-control" onChange={(event) =>
                {
                  setMarks9(event.target.value);      
                }}>
         </input> 
         </div>
         <br/><br/><br/>

         <div class="Topic">
         <label><b><font color="#000000">TOTAL</font></b></label>
        <input type="text" class="form-control" value={ tot }></input>   
        </div>
        <br/>

        <div class="Topic">
        <label><b><font color="#000000">AVERAGE</font></b></label>
        <input type="text"   class="form-control" value={ average }></input>   
        </div>
        <br/>

        <div class="Topic">
        <label><b><font color="#000000">STATUS</font></b></label>
        <input type="text"   class="form-control" value={ gradee }></input>   
        </div>

        <button onClick={handleClick}  class="btn btn-warning mt-4"> Click</button>
      </div>
    );
            
}
  export default StudentMarks;