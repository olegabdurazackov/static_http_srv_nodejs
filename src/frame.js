"use strict"
 
EventUtil.addHandler(window, "message" , function(event){
  //проверка отправителя
   if ( event.origin == "*" ) {
      // обработка данных
      processMessage(event.data) ;
      // необязательно : отправка сообщения и сходному окну
      // event.source. postMessage(" Received ! " , "*" ) ;
   }
});

