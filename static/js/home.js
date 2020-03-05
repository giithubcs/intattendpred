$(function () {

        $("#datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
        }).datepicker('update', new Date());
        
      });


 
      //=====read json======//       
      
      var myobj = JSON.parse(data);
      var today = new Date();     
      var todate = today.getDate();
      var tomonth = today.getMonth()+1;
      var toyear = today.getFullYear();  
      var todays = today.getDay();
      var days = '';
      if (todays == 0) {
        days = 'Sun';
      }else if (todays == 1) {
        days = 'Mon';
      }else if (todays == 2) {
        days = 'Tue';
      }else if (todays == 3) {
        days = 'Wed';
      }else if (todays == 4) {
        days = 'Thu';
      }else if (todays == 5) {
        days = 'Fri';
      }else if (todays == 6) {
        days = 'Sat';
      }
      document.getElementById('todayDate').innerHTML = days+", "+todate+"-"+tomonth+"-"+toyear; 
	  document.getElementById('tableDiv').style.display = '';
        var count = 0;
        var noshowCount = 0;  
        var confirmedCount = 0;
           
        var tableData = '';
        for (var i = 0; i < myobj.length; i++){

          if ($( "#skill" ).val() == myobj[i].skill) {                         

              var CurDate = myobj[i].intdt;
              var CDate = new Date(CurDate);
              const diffTime = Math.abs(CDate - today);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              //alert(diffDays);
              if (CDate >= today && $("#dates").val() > diffDays) {
                count++;
                if (myobj[i].Confirmed == 1) {
                  confirmedCount++;
                }
                if (myobj[i].pred < 50) {
                  noshowCount++;
                }

                  tableData += '<tr>';        
                  //tableData += '<td class="py-1"><img src="../static/images/face0.jpg" alt="image" /></td>';
                  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].cd;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].skill;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].phone;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
				  tableData += myobj[i].gender;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].scheduler;
				  tableData += '</center>';
                  tableData += '</td>'; 

				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].intdt;
				  tableData += '</center>';
                  tableData += '</td>';
                  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].scdt;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].jobloc;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].natloc;
				  tableData += '</center>';
                  tableData += '</td>';
				  
				  if (myobj[i].Confirmed == "1") {
					  tableData += '<td>';
					  tableData += '<center>';
					  tableData += "Yes";
					  tableData += '</center>';
					  tableData += '</td>';
					  }else{
					  tableData += '<td>';
					  tableData += '<center>';
					  tableData += "No";
					  tableData += '</center>';
				      tableData += '</td>';
					  }                               
                  tableData += '</tr>';
              }              
          }        
        }
        document.getElementById('tableData').innerHTML = tableData;
        document.getElementById('total').innerHTML = count;
        document.getElementById('totalNoShow').innerHTML = noshowCount;
        document.getElementById('confirm').innerHTML = confirmedCount;
        document.getElementById('highProbable').innerHTML = count - noshowCount;
		
      //=========filter===========// 
      $('select').on('change', function() {  
	    document.getElementById('tableDiv').style.display = '';
        var count = 0;
        var noshowCount = 0;  
        var confirmedCount = 0;
           
        var tableData = '';
        for (var i = 0; i < myobj.length; i++){

          if ($( "#skill" ).val() == myobj[i].skill) {                         

              var CurDate = myobj[i].intdt;
              var CDate = new Date(CurDate);
              const diffTime = Math.abs(CDate - today);
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
              //alert(diffDays);
              if (CDate >= today && $("#dates").val() > diffDays) {
                count++;
                if (myobj[i].Confirmed == 1) {
                  confirmedCount++;
                }
                if (myobj[i].pred < 50) {
                  noshowCount++;
                }

                  tableData += '<tr>';        
                  //tableData += '<td class="py-1"><img src="../static/images/face0.jpg" alt="image" /></td>';
                  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].cd;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].skill;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].phone;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
				  tableData += myobj[i].gender;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].scheduler;
				  tableData += '</center>';
                  tableData += '</td>'; 

				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].intdt;
				  tableData += '</center>';
                  tableData += '</td>';
                  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].scdt;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].jobloc;
				  tableData += '</center>';
                  tableData += '</td>';
				  tableData += '<td>';
				  tableData += '<center>';
                  tableData += myobj[i].natloc;
				  tableData += '</center>';
                  tableData += '</td>';
				  
				  if (myobj[i].Confirmed == "1") {
					  tableData += '<td>';
					  tableData += '<center>';
					  tableData += "Yes";
					  tableData += '</center>';
					  tableData += '</td>';
					  }else{
					  tableData += '<td>';
					  tableData += '<center>';
					  tableData += "No";
					  tableData += '</center>';
				      tableData += '</td>';
					  }
			  
                  //if (myobj[i].scheduler == null || myobj[i].scheduler == undefined || myobj[i].scheduler == 'select') {
                  //  tableData += '<td>';
                  //  tableData += "";
                  //  tableData += '</td>';
                  //}else{
                   // tableData += '<td>';
                  //  tableData += myobj[i].scheduler;
                  //  tableData += '</td>';
				 //if (myobj[i].pred > 50) {
                   // tableData += '<td style="color: green;">';
                   // tableData += myobj[i].pred;
                   // tableData += '</td>';
                 // }else{
                  //  tableData += '<td style="color: red;">';
                  //  tableData += myobj[i].pred;
                  //  tableData += '</td>';
                 // }                                    
                  tableData += '</tr>';
              }              
          }        
        }
        document.getElementById('tableData').innerHTML = tableData;
        document.getElementById('total').innerHTML = count;
        document.getElementById('totalNoShow').innerHTML = noshowCount;
        document.getElementById('confirm').innerHTML = confirmedCount;
        document.getElementById('highProbable').innerHTML = count - noshowCount;
    });