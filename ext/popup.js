// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});





// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {	  
	  //$(".select__value-name").css("background-color", color);
	  
	  //$(".estimate__value").html(" 4 ").parent().removeClass("estimate_view_warning").removeClass("estimate_view_severe-warning").removeClass("estimate_view_error").removeClass("estimate_view_danger").addClass("estimate_view_warning");
	  //todo:
	  // сделать заполнение пустых мест
	  // сделать сканирование расписания
	  //
	  // замена пустых уроков на предметы с выпад. списком
	  // время урока и недели
	  
	  //function createSubjList () {
		//  var roughList = $(".teacher-widget__subject");
		  //var subjList = {};
		  //var finalList = [];
		  //var x;
		  //var str = "";
		  //for (x in roughList) {
		//	  subjList[roughList.eq(x).text()] = roughList.eq(x).text();
		 // };
		 // var y;
		 // for (y in subjList) {
		//	  str += y + ",";
		//	  finalList.push(subjList[y]);
		 // };
		  //return finalList;
	  //};
	  
	  //var days = $("int-day");
	  //var schedule = {};
	  
	// for (i = 0; i <= 5; i++) {
	//	  currDay = days.eq(i).find("span.ng-star-inserted").eq(0).text();
	//	  lessons = days.eq(i).find("int-event");
	//	  for (j = 0; j <= (lessons.length-1); j++) {
	//		  if (lessons.eq(j).find("span.ng-star-inserted").eq(0) == "Нет урока") {
	//			  schedule[currDay["u"+j]] = "";
	//		  } else {
	//			  schedule[currDay["u"+j]] = lessons.eq(j).find(".schedule-event__subject").eq(0).text();
	//		  }
	//	  };
	//  };
	  
	//  alert (schedule[Пн[u0]]);
	  
	  //var emptyLesson = '<int-event _ngcontent-qci-c70="" _nghost-qci-c69="" class="ng-star-inserted"><div _ngcontent-qci-c69="" class="schedule-event schedule-event_theme_lessons"><div _ngcontent-qci-c69="" class="schedule-event__caption"><div _ngcontent-qci-c69="" class="schedule-event__interval"><span _ngcontent-qci-c69="" class="ng-star-inserted"> 09:00 - 09:45 </span><!----><!----></div><div _ngcontent-qci-c69="" class="schedule-event__number">1</div></div><div _ngcontent-qci-c69="" class="schedule-event__info"><h4 _ngcontent-qci-c69="" class="schedule-event__subject"> География </h4><div _ngcontent-qci-c69="" class="schedule-event__topic">Юго-Западная Азия.</div><!----><!----><div _ngcontent-qci-c69="" class="schedule-event__homework-value"><!----></div></div><div _ngcontent-qci-c69="" class="schedule-event__homework ng-star-inserted"><div _ngcontent-qci-c69="" class="schedule-event__homework-title"> Домашнее задание на следующий урок: </div><div _ngcontent-qci-c69="" class="schedule-event__homework-value"><div _ngcontent-qci-c69="" class="schedule-event__task ng-star-inserted"><div _ngcontent-qci-c69="" class="schedule-event__task-name">§21, записи в тетради</div><!----></div><!----></div></div><!----><!----></div></int-event>';
	  
	  var emptyLesson = $("int-event").eq(11).html();
	  
	  var dayHTML = document.getElementsByClassName("schedule-day__day")[0];
	  var newAttr70 = dayHTML.attributes[0].name;
	  var newAttr69 = newAttr70.replace('70','69');
	  var newAttr68 = newAttr70.replace('70','68');
	  
	  //emptyLesson = emptyLesson.replace('_ngcontent-qci-c70',newAttr70);
	  //emptyLesson = emptyLesson.replace('_ngcontent-qci-c69',newAttr69);
	  //emptyLesson = emptyLesson.replace('_ngcontent-qci-c68',newAttr68);
	  
	  //$("int-event").eq(0).remove();
	  //$("int-event").eq(0).remove();
	  //$("int-event").eq(0).remove();
	  //$("int-event").eq(0).remove();
	  //$("int-event").eq(0).remove();
	  
	  $(".schedule-event__estimates").remove();
	  
	  //$("int-event").eq(0).before(emptyLesson);
	  //$("int-event").eq(0).before(emptyLesson);
	 // $("int-event").eq(0).before(emptyLesson);
	  //$("int-event").eq(0).before(emptyLesson);
	  //$("int-event").eq(0).before(emptyLesson);
	  
	  //$(".schedule-event__subject").eq(0).text("История");
	  //$(".schedule-event__topic").eq(0).remove();
	  
	  //$(".schedule-event__subject").eq(0).text("Математика: алгебра и начала математического анализа");
	  //$(".schedule-event__topic").eq(0).remove();
	  
	  //$(".schedule-event__subject").eq(0).text("Иностранный язык (французский)");
	  //$(".schedule-event__topic").eq(0).remove();
	  
	  //$(".schedule-event__subject").eq(0).text("Литература");
	  //$(".schedule-event__topic").eq(0).remove();
	  
	  //$(".schedule-event__subject").eq(0).text("История");
	  //$(".schedule-event__topic").eq(0).remove();
		
	  
	  //var list = createSubjList();
	  
	  

	  
	  
	  function moveHW (d1,l1,d2,l2) {
		  var lesson1 = $("int-day").eq(d1).find("int-event").eq(l1);
		  var lesson2 = $("int-day").eq(d2).find("int-event").eq(l2);
		  var hw = lesson1.find(".schedule-event__task-name").first().html();
		  
		  lesson2.find(".schedule-event__homework-title").first().html("Домашнее задание на этот урок:");
		  lesson2.find(".schedule-event__task-name").first().html(hw);
	  };
	  
	  

	  //var num = lesson.find(".schedule-event__number").first().text();
	  
	  //num = Number(num)+1;
	  
	  //lesson.after(lesson.html());
	  
	 //название предмета .schedule-event__subject
	 //дз .schedule-event__task-name
	 //номер урока .schedule-event__number 
	 //день int-day
	 //урок int-event
	 //<int-event _ngcontent-cvi-c70="" _nghost-cvi-c69="" class="ng-star-inserted"><div _ngcontent-cvi-c69="" class="schedule-event schedule-event_theme_lessons"><div _ngcontent-cvi-c69="" class="schedule-event__caption"><div _ngcontent-cvi-c69="" class="schedule-event__interval"><span _ngcontent-cvi-c69="" class="ng-star-inserted"> 09:45 - 10:25 </span><!----><!----></div><div _ngcontent-cvi-c69="" class="schedule-event__number">2</div></div><div _ngcontent-cvi-c69="" class="schedule-event__info"><h4 _ngcontent-cvi-c69="" class="schedule-event__subject" style="background-color: rgb(255, 204, 102);"> ИМЯ УРОКА </h4><div _ngcontent-cvi-c69="" class="schedule-event__topic">ТЕМА УРОКА</div><!----><!----><div _ngcontent-cvi-c69="" class="schedule-event__homework-value"><!----></div></div><div _ngcontent-cvi-c69="" class="schedule-event__homework ng-star-inserted"><div _ngcontent-cvi-c69="" class="schedule-event__homework-title"> Домашнее задание на следующий урок: </div><div _ngcontent-cvi-c69="" class="schedule-event__homework-value"><div _ngcontent-cvi-c69="" class="schedule-event__task ng-star-inserted"><div _ngcontent-cvi-c69="" class="schedule-event__task-name">ДОМАШНЕЕ ЗАДАНИЕ</div><!----></div><!----></div></div><!----><div _ngcontent-cvi-c69="" class="schedule-event__estimates ng-star-inserted"><div _ngcontent-cvi-c69="" class="schedule-event__estimates-title"> Отметки: </div><div _ngcontent-cvi-c69="" class="schedule-event__estimates-value"><feature-estimate _ngcontent-cvi-c69="" theme="round" _nghost-cvi-c68="" class="ng-star-inserted"><div _ngcontent-cvi-c68="" class="estimate estimate_theme_round estimate_size_m estimate_view_success"><span _ngcontent-cvi-c68="" class="estimate__value"> 5 </span></div><v-tooltip _ngcontent-cvi-c68="" class="ng-star-inserted"><!----></v-tooltip><!----></feature-estimate><!----></div></div><!----></div></int-event> пример урока
	 
	 
	
      //$("h4").css("background-color", "#ffcc66");
});
}