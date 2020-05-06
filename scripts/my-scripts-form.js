$( document ).ready(function() {
  //alert("my alert!");
  
  
 


//begin code for the volunteer form 
  $(document).on('change', '#t-size', chkSize);
  
  function chksize() {
    
    var t_size = $('#t-size').val(); 
    
      it (t_size == 'other') {
        //alert (t_size);
        
        $('#other').removeAttr ('disabled');
      } //end if
      else {
        $('#other').attr('disabled', true); 
        $('#other').val('');
      }
    //end code for the volunteer form 
    
    //alert(t_size);
  }